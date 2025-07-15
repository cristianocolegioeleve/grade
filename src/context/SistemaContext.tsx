import React, { createContext, useContext, useReducer, useEffect, ReactNode, useState } from 'react';
import { EstadoSistema, Disciplina, Professor, Turma, Horario } from '../types';
import { apiService } from '../services/apiService';
import { ConflitosService } from '../services/conflitosService';
import { useNotificacao } from '../components/Notificacoes/NotificacaoProvider';

type AcaoSistema =
  | { tipo: 'CARREGAR_DADOS'; payload: EstadoSistema }
  | { tipo: 'ADICIONAR_DISCIPLINA'; payload: Disciplina }
  | { tipo: 'ATUALIZAR_DISCIPLINA'; payload: Disciplina }
  | { tipo: 'REMOVER_DISCIPLINA'; payload: number }
  | { tipo: 'ADICIONAR_PROFESSOR'; payload: Professor }
  | { tipo: 'ATUALIZAR_PROFESSOR'; payload: Professor }
  | { tipo: 'REMOVER_PROFESSOR'; payload: number }
  | { tipo: 'ADICIONAR_TURMA'; payload: Turma }
  | { tipo: 'ATUALIZAR_TURMA'; payload: Turma }
  | { tipo: 'REMOVER_TURMA'; payload: number }
  | { tipo: 'ADICIONAR_HORARIO'; payload: Horario }
  | { tipo: 'ATUALIZAR_HORARIO'; payload: Horario }
  | { tipo: 'REMOVER_HORARIO'; payload: number }
  | { tipo: 'MOVER_HORARIO'; payload: { horarioId: number; novoDia: number; novaAula: number } }
  | { tipo: 'ATUALIZAR_CONFLITOS' }
  | { tipo: 'DEFINIR_CARREGANDO'; payload: boolean }
  | { tipo: 'DEFINIR_ERRO'; payload: string | null };

interface ContextoSistema {
  estado: EstadoSistema;
  carregando: boolean;
  erro: string | null;
  dispatch: React.Dispatch<AcaoSistema>;
  // Funciones auxiliares
  carregarDados: () => Promise<void>;
  adicionarDisciplina: (disciplina: Omit<Disciplina, 'id'>) => Promise<void>;
  atualizarDisciplina: (disciplina: Disciplina) => Promise<void>;
  removerDisciplina: (id: number) => Promise<void>;
  adicionarProfessor: (professor: Omit<Professor, 'id'>) => Promise<void>;
  atualizarProfessor: (professor: Professor) => Promise<void>;
  removerProfessor: (id: number) => Promise<void>;
  adicionarTurma: (turma: Omit<Turma, 'id'>) => Promise<void>;
  atualizarTurma: (turma: Turma) => Promise<void>;
  removerTurma: (id: number) => Promise<void>;
  adicionarHorario: (horario: Omit<Horario, 'id'>) => Promise<void>;
  atualizarHorario: (horario: Horario) => Promise<void>;
  removerHorario: (id: number) => Promise<void>;
  moverHorario: (horarioId: number, novoDia: number, novaAula: number) => Promise<void>;
  validarHorario: (horario: Omit<Horario, 'id'>) => { valido: boolean; motivo?: string };
  obterDisciplinaPorId: (id: number) => Disciplina | undefined;
  obterProfessorPorId: (id: number) => Professor | undefined;
  obterTurmaPorId: (id: number) => Turma | undefined;
  // Utilitários
  exportarDados: () => Promise<void>;
  importarDados: (dados: EstadoSistema) => Promise<void>;
  resetarSistema: () => Promise<void>;
  testarConexaoAPI: () => Promise<boolean>;
}

const SistemaContext = createContext<ContextoSistema | undefined>(undefined);

function sistemaReducer(estado: EstadoSistema, acao: AcaoSistema): EstadoSistema {
  switch (acao.tipo) {
    case 'CARREGAR_DADOS':
      return {
        ...acao.payload,
        conflitos: ConflitosService.detectarConflitos(acao.payload.horarios, acao.payload.professores, acao.payload.turmas)
      };

    case 'ADICIONAR_DISCIPLINA':
      const novoEstadoComDisciplina = {
        ...estado,
        disciplinas: [...estado.disciplinas, acao.payload]
      };
      return {
        ...novoEstadoComDisciplina,
        conflitos: ConflitosService.detectarConflitos(novoEstadoComDisciplina.horarios, novoEstadoComDisciplina.professores, novoEstadoComDisciplina.turmas)
      };

    case 'ATUALIZAR_DISCIPLINA':
      const estadoAtualizadoDisciplina = {
        ...estado,
        disciplinas: estado.disciplinas.map(d =>
          d.id === acao.payload.id ? acao.payload : d
        )
      };
      return {
        ...estadoAtualizadoDisciplina,
        conflitos: ConflitosService.detectarConflitos(estadoAtualizadoDisciplina.horarios, estadoAtualizadoDisciplina.professores, estadoAtualizadoDisciplina.turmas)
      };

    case 'REMOVER_DISCIPLINA':
      const estadoSemDisciplina = {
        ...estado,
        disciplinas: estado.disciplinas.filter(d => d.id !== acao.payload),
        professores: estado.professores.filter(p => !p.disciplinaIds.includes(acao.payload)),
        horarios: estado.horarios.filter(h => h.disciplinaId !== acao.payload)
      };
      return {
        ...estadoSemDisciplina,
        conflitos: ConflitosService.detectarConflitos(estadoSemDisciplina.horarios, estadoSemDisciplina.professores, estadoSemDisciplina.turmas)
      };

    case 'ADICIONAR_PROFESSOR':
      const novoEstadoComProfessor = {
        ...estado,
        professores: [...estado.professores, acao.payload]
      };
      return {
        ...novoEstadoComProfessor,
        conflitos: ConflitosService.detectarConflitos(novoEstadoComProfessor.horarios, novoEstadoComProfessor.professores, novoEstadoComProfessor.turmas)
      };

    case 'ATUALIZAR_PROFESSOR':
      const estadoAtualizadoProfessor = {
        ...estado,
        professores: estado.professores.map(p =>
          p.id === acao.payload.id ? acao.payload : p
        )
      };
      return {
        ...estadoAtualizadoProfessor,
        conflitos: ConflitosService.detectarConflitos(estadoAtualizadoProfessor.horarios, estadoAtualizadoProfessor.professores, estadoAtualizadoProfessor.turmas)
      };

    case 'REMOVER_PROFESSOR':
      const estadoSemProfessor = {
        ...estado,
        professores: estado.professores.filter(p => p.id !== acao.payload),
        horarios: estado.horarios.filter(h => h.professorId !== acao.payload)
      };
      return {
        ...estadoSemProfessor,
        conflitos: ConflitosService.detectarConflitos(estadoSemProfessor.horarios, estadoSemProfessor.professores, estadoSemProfessor.turmas)
      };

    case 'ADICIONAR_TURMA':
      const novoEstadoComTurma = {
        ...estado,
        turmas: [...estado.turmas, acao.payload]
      };
      return {
        ...novoEstadoComTurma,
        conflitos: ConflitosService.detectarConflitos(novoEstadoComTurma.horarios, novoEstadoComTurma.professores, novoEstadoComTurma.turmas)
      };

    case 'ATUALIZAR_TURMA':
      const estadoAtualizadoTurma = {
        ...estado,
        turmas: estado.turmas.map(t =>
          t.id === acao.payload.id ? acao.payload : t
        )
      };
      return {
        ...estadoAtualizadoTurma,
        conflitos: ConflitosService.detectarConflitos(estadoAtualizadoTurma.horarios, estadoAtualizadoTurma.professores, estadoAtualizadoTurma.turmas)
      };

    case 'REMOVER_TURMA':
      const estadoSemTurma = {
        ...estado,
        turmas: estado.turmas.filter(t => t.id !== acao.payload),
        horarios: estado.horarios.filter(h => h.turmaId !== acao.payload)
      };
      return {
        ...estadoSemTurma,
        conflitos: ConflitosService.detectarConflitos(estadoSemTurma.horarios, estadoSemTurma.professores, estadoSemTurma.turmas)
      };

    case 'ADICIONAR_HORARIO':
      const novoEstadoComHorario = {
        ...estado,
        horarios: [...estado.horarios, acao.payload]
      };
      return {
        ...novoEstadoComHorario,
        conflitos: ConflitosService.detectarConflitos(novoEstadoComHorario.horarios, novoEstadoComHorario.professores, novoEstadoComHorario.turmas)
      };

    case 'ATUALIZAR_HORARIO':
      const estadoAtualizadoHorario = {
        ...estado,
        horarios: estado.horarios.map(h =>
          h.id === acao.payload.id ? acao.payload : h
        )
      };
      return {
        ...estadoAtualizadoHorario,
        conflitos: ConflitosService.detectarConflitos(estadoAtualizadoHorario.horarios, estadoAtualizadoHorario.professores, estadoAtualizadoHorario.turmas)
      };

    case 'REMOVER_HORARIO':
      const estadoSemHorario = {
        ...estado,
        horarios: estado.horarios.filter(h => h.id !== acao.payload)
      };
      return {
        ...estadoSemHorario,
        conflitos: ConflitosService.detectarConflitos(estadoSemHorario.horarios, estadoSemHorario.professores, estadoSemHorario.turmas)
      };

    case 'MOVER_HORARIO':
      const { horarioId, novoDia, novaAula } = acao.payload;
      const estadoComHorarioMovido = {
        ...estado,
        horarios: estado.horarios.map(h =>
          h.id === horarioId
            ? { ...h, diaSemana: novoDia, aula: novaAula }
            : h
        )
      };
      return {
        ...estadoComHorarioMovido,
        conflitos: ConflitosService.detectarConflitos(estadoComHorarioMovido.horarios, estadoComHorarioMovido.professores, estadoComHorarioMovido.turmas)
      };

    case 'ATUALIZAR_CONFLITOS':
      return {
        ...estado,
        conflitos: ConflitosService.detectarConflitos(estado.horarios, estado.professores, estado.turmas)
      };

    default:
      return estado;
  }
}

interface SistemaProviderProps {
  children: ReactNode;
}

export function SistemaProvider({ children }: SistemaProviderProps) {
  const { mostrarNotificacao } = useNotificacao();
  
  const estadoInicial: EstadoSistema = {
    disciplinas: [],
    professores: [],
    turmas: [],
    horarios: [],
    conflitos: []
  };

  const [estado, dispatch] = useReducer(sistemaReducer, estadoInicial);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  // Função para tratar erros de API
  const tratarErro = (error: any, operacao: string) => {
    console.error(`Erro na operação ${operacao}:`, error);
    const mensagem = error.message || `Erro ao ${operacao}`;
    setErro(mensagem);
    mostrarNotificacao(`Erro ao ${operacao}: ${mensagem}`, 'erro');
  };

  // Carregar dados iniciais
  const carregarDados = async () => {
    setCarregando(true);
    setErro(null);
    try {
      const dados = await apiService.carregarTodosDados();
      dispatch({ tipo: 'CARREGAR_DADOS', payload: dados });
      console.log('✅ Dados carregados da API com sucesso');
    } catch (error) {
      tratarErro(error, 'carregar dados');
    } finally {
      setCarregando(false);
    }
  };

  // Disciplinas
  const adicionarDisciplina = async (disciplina: Omit<Disciplina, 'id'>) => {
    try {
      const novaDisciplina = await apiService.criarDisciplina(disciplina);
      dispatch({ tipo: 'ADICIONAR_DISCIPLINA', payload: novaDisciplina });
      mostrarNotificacao('Disciplina adicionada com sucesso!', 'sucesso');
    } catch (error) {
      tratarErro(error, 'adicionar disciplina');
    }
  };

  const atualizarDisciplina = async (disciplina: Disciplina) => {
    try {
      const disciplinaAtualizada = await apiService.atualizarDisciplina(disciplina.id, disciplina);
      dispatch({ tipo: 'ATUALIZAR_DISCIPLINA', payload: disciplinaAtualizada });
      mostrarNotificacao('Disciplina atualizada com sucesso!', 'sucesso');
    } catch (error) {
      tratarErro(error, 'atualizar disciplina');
    }
  };

  const removerDisciplina = async (id: number) => {
    try {
      await apiService.removerDisciplina(id);
      dispatch({ tipo: 'REMOVER_DISCIPLINA', payload: id });
      mostrarNotificacao('Disciplina removida com sucesso!', 'sucesso');
    } catch (error) {
      tratarErro(error, 'remover disciplina');
    }
  };

  // Professores
  const adicionarProfessor = async (professor: Omit<Professor, 'id'>) => {
    try {
      const novoProfessor = await apiService.criarProfessor(professor);
      dispatch({ tipo: 'ADICIONAR_PROFESSOR', payload: novoProfessor });
      mostrarNotificacao('Professor adicionado com sucesso!', 'sucesso');
    } catch (error) {
      tratarErro(error, 'adicionar professor');
    }
  };

  const atualizarProfessor = async (professor: Professor) => {
    try {
      const professorAtualizado = await apiService.atualizarProfessor(professor.id, professor);
      dispatch({ tipo: 'ATUALIZAR_PROFESSOR', payload: professorAtualizado });
      mostrarNotificacao('Professor atualizado com sucesso!', 'sucesso');
    } catch (error) {
      tratarErro(error, 'atualizar professor');
    }
  };

  const removerProfessor = async (id: number) => {
    try {
      await apiService.removerProfessor(id);
      dispatch({ tipo: 'REMOVER_PROFESSOR', payload: id });
      mostrarNotificacao('Professor removido com sucesso!', 'sucesso');
    } catch (error) {
      tratarErro(error, 'remover professor');
    }
  };

  // Turmas
  const adicionarTurma = async (turma: Omit<Turma, 'id'>) => {
    try {
      const novaTurma = await apiService.criarTurma(turma);
      dispatch({ tipo: 'ADICIONAR_TURMA', payload: novaTurma });
      mostrarNotificacao('Turma adicionada com sucesso!', 'sucesso');
    } catch (error) {
      tratarErro(error, 'adicionar turma');
    }
  };

  const atualizarTurma = async (turma: Turma) => {
    try {
      const turmaAtualizada = await apiService.atualizarTurma(turma.id, turma);
      dispatch({ tipo: 'ATUALIZAR_TURMA', payload: turmaAtualizada });
      mostrarNotificacao('Turma atualizada com sucesso!', 'sucesso');
    } catch (error) {
      tratarErro(error, 'atualizar turma');
    }
  };

  const removerTurma = async (id: number) => {
    try {
      await apiService.removerTurma(id);
      dispatch({ tipo: 'REMOVER_TURMA', payload: id });
      mostrarNotificacao('Turma removida com sucesso!', 'sucesso');
    } catch (error) {
      tratarErro(error, 'remover turma');
    }
  };

  // Horários
  const adicionarHorario = async (horario: Omit<Horario, 'id'>) => {
    try {
      const novoHorario = await apiService.criarHorario(horario);
      dispatch({ tipo: 'ADICIONAR_HORARIO', payload: novoHorario });
      mostrarNotificacao('Horário adicionado com sucesso!', 'sucesso');
    } catch (error) {
      tratarErro(error, 'adicionar horário');
    }
  };

  const atualizarHorario = async (horario: Horario) => {
    try {
      const horarioAtualizado = await apiService.atualizarHorario(horario.id, horario);
      dispatch({ tipo: 'ATUALIZAR_HORARIO', payload: horarioAtualizado });
      mostrarNotificacao('Horário atualizado com sucesso!', 'sucesso');
    } catch (error) {
      tratarErro(error, 'atualizar horário');
    }
  };

  const removerHorario = async (id: number) => {
    try {
      await apiService.removerHorario(id);
      dispatch({ tipo: 'REMOVER_HORARIO', payload: id });
      mostrarNotificacao('Horário removido com sucesso!', 'sucesso');
    } catch (error) {
      tratarErro(error, 'remover horário');
    }
  };

  const moverHorario = async (horarioId: number, novoDia: number, novaAula: number) => {
    try {
      const horario = estado.horarios.find(h => h.id === horarioId);
      if (!horario) {
        throw new Error('Horário não encontrado');
      }

      const horarioAtualizado = {
        ...horario,
        diaSemana: novoDia,
        aula: novaAula
      };

      await apiService.atualizarHorario(horarioId, horarioAtualizado);
      dispatch({ tipo: 'MOVER_HORARIO', payload: { horarioId, novoDia, novaAula } });
      mostrarNotificacao('Horário movido com sucesso!', 'sucesso');
    } catch (error) {
      tratarErro(error, 'mover horário');
    }
  };

  // Validação de horários
  const validarHorario = (horario: Omit<Horario, 'id'>): { valido: boolean; motivo?: string } => {
    // Verificar se professor está disponível no horário
    const professor = estado.professores.find(p => p.id === horario.professorId);
    if (!professor) {
      return { valido: false, motivo: 'Professor não encontrado' };
    }

    const disponibilidade = professor.disponibilidade.find(
      d => d.diaSemana === horario.diaSemana && d.aula === horario.aula
    );

    if (!disponibilidade?.disponivel) {
      return { valido: false, motivo: 'Professor não está disponível neste horário' };
    }

    // Verificar conflitos de professor
    const conflitoProfessor = estado.horarios.some(h =>
      h.professorId === horario.professorId &&
      h.diaSemana === horario.diaSemana &&
      h.aula === horario.aula &&
      h.turmaId !== horario.turmaId
    );

    if (conflitoProfessor) {
      return { valido: false, motivo: 'Professor já está alocado em outra turma neste horário' };
    }

    // Verificar conflitos de turma
    const conflitoTurma = estado.horarios.some(h =>
      h.turmaId === horario.turmaId &&
      h.diaSemana === horario.diaSemana &&
      h.aula === horario.aula &&
      h.professorId !== horario.professorId
    );

    if (conflitoTurma) {
      return { valido: false, motivo: 'Turma já possui aula neste horário' };
    }

    return { valido: true };
  };

  // Funções auxiliares
  const obterDisciplinaPorId = (id: number): Disciplina | undefined => {
    return estado.disciplinas.find(d => d.id === id);
  };

  const obterProfessorPorId = (id: number): Professor | undefined => {
    return estado.professores.find(p => p.id === id);
  };

  const obterTurmaPorId = (id: number): Turma | undefined => {
    return estado.turmas.find(t => t.id === id);
  };

  // Utilitários
  const exportarDados = async () => {
    try {
      const dados = await apiService.exportarDados();
      const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `backup-sistema-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      mostrarNotificacao('Dados exportados com sucesso!', 'sucesso');
    } catch (error) {
      tratarErro(error, 'exportar dados');
    }
  };

  const importarDados = async (dados: EstadoSistema) => {
    try {
      await apiService.importarDados(dados);
      await carregarDados(); // Recarregar dados atualizados
      mostrarNotificacao('Dados importados com sucesso!', 'sucesso');
    } catch (error) {
      tratarErro(error, 'importar dados');
    }
  };

  const resetarSistema = async () => {
    try {
      await apiService.resetarSistema();
      await carregarDados(); // Recarregar dados padrão
      mostrarNotificacao('Sistema resetado com sucesso!', 'sucesso');
    } catch (error) {
      tratarErro(error, 'resetar sistema');
    }
  };

  const testarConexaoAPI = async (): Promise<boolean> => {
    try {
      const conexaoOK = await apiService.testarConexao();
      if (conexaoOK) {
        setErro(null);
        mostrarNotificacao('Conexão com API estabelecida!', 'sucesso');
      }
      return conexaoOK;
    } catch (error) {
      tratarErro(error, 'testar conexão com API');
      return false;
    }
  };

  // Carregar dados ao inicializar
  useEffect(() => {
    carregarDados();
  }, []);

  // Auto-refresh a cada 30 segundos (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!carregando) {
        carregarDados();
      }
    }, 30000); // 30 segundos

    return () => clearInterval(interval);
  }, [carregando]);

  const valor: ContextoSistema = {
    estado,
    carregando,
    erro,
    dispatch,
    carregarDados,
    adicionarDisciplina,
    atualizarDisciplina,
    removerDisciplina,
    adicionarProfessor,
    atualizarProfessor,
    removerProfessor,
    adicionarTurma,
    atualizarTurma,
    removerTurma,
    adicionarHorario,
    atualizarHorario,
    removerHorario,
    moverHorario,
    validarHorario,
    obterDisciplinaPorId,
    obterProfessorPorId,
    obterTurmaPorId,
    exportarDados,
    importarDados,
    resetarSistema,
    testarConexaoAPI
  };

  return (
    <SistemaContext.Provider value={valor}>
      {children}
    </SistemaContext.Provider>
  );
}

export function useSistema(): ContextoSistema {
  const contexto = useContext(SistemaContext);
  if (contexto === undefined) {
    throw new Error('useSistema deve ser usado dentro de um SistemaProvider');
  }
  return contexto;
}
