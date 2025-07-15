const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Caminho do arquivo de dados
const dataPath = path.join(__dirname, 'data', 'sistema.json');

// Garantir que o diretório data existe
async function ensureDataDirectory() {
  await fs.ensureDir(path.dirname(dataPath));
}

// Carregar dados do arquivo
async function loadData() {
  try {
    if (await fs.pathExists(dataPath)) {
      const data = await fs.readJson(dataPath);
      return data;
    } else {
      // Dados iniciais se arquivo não existe
      const initialData = {
        disciplinas: [
          { id: 1, nome: "Matemática", cor: "#3B82F6" },
          { id: 2, nome: "Português", cor: "#10B981" },
          { id: 3, nome: "História", cor: "#F59E0B" },
          { id: 4, nome: "Geografia", cor: "#8B5CF6" },
          { id: 5, nome: "Ciências", cor: "#06B6D4" }
        ],
        professores: [
          {
            id: 1,
            nome: "João Silva",
            disciplinaIds: [1],
            disponibilidade: [
              { diaSemana: 1, aula: 1, disponivel: true },
              { diaSemana: 1, aula: 2, disponivel: true },
              { diaSemana: 1, aula: 3, disponivel: false }
            ]
          }
        ],
        turmas: [
          {
            id: 1,
            nome: "6ºA",
            segmento: "Fundamental II",
            ano: "6º Ano",
            turma: "A",
            periodo: "Manhã"
          }
        ],
        horarios: [],
        conflitos: []
      };
      await saveData(initialData);
      return initialData;
    }
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    throw error;
  }
}

// Salvar dados no arquivo
async function saveData(data) {
  try {
    await fs.writeJson(dataPath, data, { spaces: 2 });
    console.log('✅ Dados salvos com sucesso');
  } catch (error) {
    console.error('❌ Erro ao salvar dados:', error);
    throw error;
  }
}

// Detectar conflitos
function detectarConflitos(horarios) {
  const conflitos = [];
  
  // Conflitos de professor (mesmo professor em 2 lugares no mesmo horário)
  const conflitosProf = {};
  horarios.forEach(h => {
    const key = `${h.professorId}-${h.diaSemana}-${h.aula}`;
    if (!conflitosProf[key]) {
      conflitosProf[key] = [];
    }
    conflitosProf[key].push(h);
  });
  
  Object.values(conflitosProf).forEach(grupo => {
    if (grupo.length > 1) {
      conflitos.push({
        id: `prof-${grupo[0].professorId}-${grupo[0].diaSemana}-${grupo[0].aula}`,
        tipo: 'professor_duplo',
        descricao: `Professor em múltiplas turmas no mesmo horário`,
        horarios: grupo
      });
    }
  });
  
  // Conflitos de turma (mesma turma com 2 aulas no mesmo horário)
  const conflitorTurma = {};
  horarios.forEach(h => {
    const key = `${h.turmaId}-${h.diaSemana}-${h.aula}`;
    if (!conflitorTurma[key]) {
      conflitorTurma[key] = [];
    }
    conflitorTurma[key].push(h);
  });
  
  Object.values(conflitorTurma).forEach(grupo => {
    if (grupo.length > 1) {
      conflitos.push({
        id: `turma-${grupo[0].turmaId}-${grupo[0].diaSemana}-${grupo[0].aula}`,
        tipo: 'turma_dupla',
        descricao: `Turma com múltiplas aulas no mesmo horário`,
        horarios: grupo
      });
    }
  });
  
  return conflitos;
}

// ================== ROTAS API ==================

// GET - Obter todos os dados
app.get('/api/dados', async (req, res) => {
  try {
    const data = await loadData();
    data.conflitos = detectarConflitos(data.horarios);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao carregar dados' });
  }
});

// ================== DISCIPLINAS ==================

// GET - Listar disciplinas
app.get('/api/disciplinas', async (req, res) => {
  try {
    const data = await loadData();
    res.json(data.disciplinas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao carregar disciplinas' });
  }
});

// POST - Criar disciplina
app.post('/api/disciplinas', async (req, res) => {
  try {
    const data = await loadData();
    const novaDisciplina = {
      id: data.disciplinas.length > 0 ? Math.max(...data.disciplinas.map(d => d.id)) + 1 : 1,
      ...req.body
    };
    data.disciplinas.push(novaDisciplina);
    await saveData(data);
    res.json(novaDisciplina);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar disciplina' });
  }
});

// PUT - Atualizar disciplina
app.put('/api/disciplinas/:id', async (req, res) => {
  try {
    const data = await loadData();
    const id = parseInt(req.params.id);
    const index = data.disciplinas.findIndex(d => d.id === id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Disciplina não encontrada' });
    }
    
    data.disciplinas[index] = { ...data.disciplinas[index], ...req.body };
    await saveData(data);
    res.json(data.disciplinas[index]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar disciplina' });
  }
});

// DELETE - Remover disciplina
app.delete('/api/disciplinas/:id', async (req, res) => {
  try {
    const data = await loadData();
    const id = parseInt(req.params.id);
    
    data.disciplinas = data.disciplinas.filter(d => d.id !== id);
    data.professores = data.professores.filter(p => !p.disciplinaIds.includes(id));
    data.horarios = data.horarios.filter(h => h.disciplinaId !== id);
    
    await saveData(data);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover disciplina' });
  }
});

// ================== PROFESSORES ==================

// GET - Listar professores
app.get('/api/professores', async (req, res) => {
  try {
    const data = await loadData();
    res.json(data.professores);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao carregar professores' });
  }
});

// POST - Criar professor
app.post('/api/professores', async (req, res) => {
  try {
    const data = await loadData();
    const novoProfessor = {
      id: data.professores.length > 0 ? Math.max(...data.professores.map(p => p.id)) + 1 : 1,
      ...req.body
    };
    data.professores.push(novoProfessor);
    await saveData(data);
    res.json(novoProfessor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar professor' });
  }
});

// PUT - Atualizar professor
app.put('/api/professores/:id', async (req, res) => {
  try {
    const data = await loadData();
    const id = parseInt(req.params.id);
    const index = data.professores.findIndex(p => p.id === id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Professor não encontrado' });
    }
    
    data.professores[index] = { ...data.professores[index], ...req.body };
    await saveData(data);
    res.json(data.professores[index]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar professor' });
  }
});

// DELETE - Remover professor
app.delete('/api/professores/:id', async (req, res) => {
  try {
    const data = await loadData();
    const id = parseInt(req.params.id);
    
    data.professores = data.professores.filter(p => p.id !== id);
    data.horarios = data.horarios.filter(h => h.professorId !== id);
    
    await saveData(data);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover professor' });
  }
});

// ================== TURMAS ==================

// GET - Listar turmas
app.get('/api/turmas', async (req, res) => {
  try {
    const data = await loadData();
    res.json(data.turmas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao carregar turmas' });
  }
});

// POST - Criar turma
app.post('/api/turmas', async (req, res) => {
  try {
    const data = await loadData();
    const novaTurma = {
      id: data.turmas.length > 0 ? Math.max(...data.turmas.map(t => t.id)) + 1 : 1,
      ...req.body
    };
    data.turmas.push(novaTurma);
    await saveData(data);
    res.json(novaTurma);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar turma' });
  }
});

// PUT - Atualizar turma
app.put('/api/turmas/:id', async (req, res) => {
  try {
    const data = await loadData();
    const id = parseInt(req.params.id);
    const index = data.turmas.findIndex(t => t.id === id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Turma não encontrada' });
    }
    
    data.turmas[index] = { ...data.turmas[index], ...req.body };
    await saveData(data);
    res.json(data.turmas[index]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar turma' });
  }
});

// DELETE - Remover turma
app.delete('/api/turmas/:id', async (req, res) => {
  try {
    const data = await loadData();
    const id = parseInt(req.params.id);
    
    data.turmas = data.turmas.filter(t => t.id !== id);
    data.horarios = data.horarios.filter(h => h.turmaId !== id);
    
    await saveData(data);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover turma' });
  }
});

// ================== HORARIOS ==================

// GET - Listar horários
app.get('/api/horarios', async (req, res) => {
  try {
    const data = await loadData();
    res.json(data.horarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao carregar horários' });
  }
});

// POST - Criar horário
app.post('/api/horarios', async (req, res) => {
  try {
    const data = await loadData();
    const novoHorario = {
      id: data.horarios.length > 0 ? Math.max(...data.horarios.map(h => h.id)) + 1 : 1,
      ...req.body
    };
    data.horarios.push(novoHorario);
    await saveData(data);
    res.json(novoHorario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar horário' });
  }
});

// PUT - Atualizar horário
app.put('/api/horarios/:id', async (req, res) => {
  try {
    const data = await loadData();
    const id = parseInt(req.params.id);
    const index = data.horarios.findIndex(h => h.id === id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Horário não encontrado' });
    }
    
    data.horarios[index] = { ...data.horarios[index], ...req.body };
    await saveData(data);
    res.json(data.horarios[index]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar horário' });
  }
});

// DELETE - Remover horário
app.delete('/api/horarios/:id', async (req, res) => {
  try {
    const data = await loadData();
    const id = parseInt(req.params.id);
    
    data.horarios = data.horarios.filter(h => h.id !== id);
    await saveData(data);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover horário' });
  }
});

// ================== UTILITÁRIOS ==================

// POST - Importar dados
app.post('/api/importar', async (req, res) => {
  try {
    const dadosImportados = req.body;
    await saveData(dadosImportados);
    res.json({ success: true, message: 'Dados importados com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao importar dados' });
  }
});

// GET - Exportar dados
app.get('/api/exportar', async (req, res) => {
  try {
    const data = await loadData();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename=backup-sistema.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao exportar dados' });
  }
});

// DELETE - Resetar sistema
app.delete('/api/resetar', async (req, res) => {
  try {
    await fs.remove(dataPath);
    res.json({ success: true, message: 'Sistema resetado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao resetar sistema' });
  }
});

// ================== SERVIDOR ==================

// Servir arquivos estáticos do frontend (se existir pasta dist)
const frontendPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(frontendPath)) {
  app.use(express.static(frontendPath));
  
  // SPA fallback - todas as rotas não-API servem o index.html
  app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(frontendPath, 'index.html'));
    }
  });
}

// Iniciar servidor
async function startServer() {
  try {
    await ensureDataDirectory();
    await loadData(); // Carrega dados iniciais
    
    app.listen(PORT, () => {
      console.log(`
🚀 ========================================
   SISTEMA COLÉGIO ELEVE - BACKEND
🚀 ========================================

✅ Servidor rodando na porta: ${PORT}
🌐 API disponível em: http://localhost:${PORT}/api
📊 Dados salvos em: ${dataPath}

📋 Rotas disponíveis:
   GET    /api/dados         - Todos os dados
   
   GET    /api/disciplinas   - Listar disciplinas
   POST   /api/disciplinas   - Criar disciplina
   PUT    /api/disciplinas/:id - Atualizar disciplina
   DELETE /api/disciplinas/:id - Remover disciplina
   
   GET    /api/professores   - Listar professores
   POST   /api/professores   - Criar professor
   PUT    /api/professores/:id - Atualizar professor
   DELETE /api/professores/:id - Remover professor
   
   GET    /api/turmas        - Listar turmas
   POST   /api/turmas        - Criar turma
   PUT    /api/turmas/:id    - Atualizar turma
   DELETE /api/turmas/:id    - Remover turma
   
   GET    /api/horarios      - Listar horários
   POST   /api/horarios      - Criar horário
   PUT    /api/horarios/:id  - Atualizar horário
   DELETE /api/horarios/:id  - Remover horário
   
   POST   /api/importar      - Importar dados
   GET    /api/exportar      - Exportar dados
   DELETE /api/resetar       - Resetar sistema

🎯 Sistema pronto para uso multiusuário!
`);
    });
  } catch (error) {
    console.error('❌ Erro ao iniciar servidor:', error);
    process.exit(1);
  }
}

startServer();
