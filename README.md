# 🏫 Sistema de Gestão de Horários - Colégio Eleve (Multiusuário)

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.2-black.svg)](https://expressjs.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

**Versão multiusuário com backend compartilhado** - Sistema moderno de gestão de horários escolares com interface intuitiva, funcionalidades avançadas e dados compartilhados entre todos os usuários.

## 🎯 **SOLUÇÃO PARA O PROBLEMA**

### ❌ **Problema Original:**
- Sistema anterior usava localStorage (dados locais do navegador)
- Cada usuário via apenas seus próprios dados
- Alterações não eram compartilhadas entre usuários

### ✅ **Solução Implementada:**
- **Backend Node.js/Express** para armazenamento central
- **API REST** para comunicação frontend-backend
- **Dados compartilhados** entre todos os usuários
- **Atualizações em tempo real** (auto-refresh a cada 30 segundos)
- **Interface de monitoramento** da conexão com API

---

## 🚀 **INICIALIZAÇÃO RÁPIDA**

### **Método 1: Sistema Completo (Recomendado)**
```bash
# Iniciar backend + frontend automaticamente
npm run start:sistema
```

### **Método 2: Componentes Separados**
```bash
# Terminal 1 - Backend (porta 3001)
npm run start:backend

# Terminal 2 - Frontend (porta 5173)
npm run start:frontend
```

### **Método 3: Manual**
```bash
# Backend
cd backend
npm install
npm start

# Frontend (em outro terminal)
npm install
npm run dev
```

---

## 🌐 **URLs DO SISTEMA**

Após inicializar:
- **🎨 Frontend**: http://localhost:5173
- **🔧 Backend**: http://localhost:3001
- **📊 API**: http://localhost:3001/api

---

## 📋 **FUNCIONALIDADES**

### **🎓 Gestão Acadêmica**
- ✅ **Disciplinas** - Cadastro com cores personalizadas
- ✅ **Professores** - Gestão com disponibilidade semanal
- ✅ **Turmas** - Organização por segmento, ano e período
- ✅ **Horários** - Grade semanal completa

### **🎯 Funcionalidades Avançadas**
- ✅ **Drag & Drop** - Arrastar e soltar horários
- ✅ **Detecção de Conflitos** - Validação em tempo real
- ✅ **Filtros Inteligentes** - Por turma e professor
- ✅ **Interface Responsiva** - Funciona em qualquer dispositivo

### **🔄 Recursos Multiusuário**
- ✅ **Dados Compartilhados** - Todos veem as mesmas informações
- ✅ **Atualizações Automáticas** - Refresh a cada 30 segundos
- ✅ **Monitoramento de Conexão** - Status da API em tempo real
- ✅ **Backup/Restore** - Import/export de dados

---

## 🛠️ **TECNOLOGIAS**

### **Frontend:**
- **React 18.3.1** - Interface moderna
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Vite** - Build tool rápido
- **DND Kit** - Drag and drop
- **Lucide React** - Ícones

### **Backend:**
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **CORS** - Política de origem
- **Helmet** - Segurança
- **fs-extra** - Manipulação de arquivos

---

## 📁 **ESTRUTURA DO PROJETO**

```
sistema-colegio-eleve-multiusuario/
├── 📁 backend/                 # Servidor Node.js/Express
│   ├── server.js              # Servidor principal
│   ├── package.json           # Dependências do backend
│   └── 📁 data/               # Dados armazenados (JSON)
├── 📁 src/                    # Código fonte do frontend
│   ├── 📁 components/         # Componentes React
│   ├── 📁 services/           # Serviços (API, utilitários)
│   ├── 📁 context/            # Contextos React
│   └── 📁 types/              # Tipos TypeScript
├── start-sistema.js           # Script completo
├── start-backend.js           # Script do backend
├── start-frontend.js          # Script do frontend
├── package.json               # Dependências do frontend
└── .env                       # Variáveis de ambiente
```

---

## 🔧 **CONFIGURAÇÃO**

### **Variáveis de Ambiente (.env):**
```env
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_APP_NAME=Sistema Colégio Eleve
REACT_APP_VERSION=2.0.0
```

### **Portas Padrão:**
- **Frontend**: 5173 (Vite)
- **Backend**: 3001 (Express)

---

## 📊 **API ENDPOINTS**

### **Dados Gerais:**
- `GET /api/dados` - Todos os dados do sistema
- `POST /api/importar` - Importar dados
- `GET /api/exportar` - Exportar dados
- `DELETE /api/resetar` - Resetar sistema

### **Disciplinas:**
- `GET /api/disciplinas` - Listar
- `POST /api/disciplinas` - Criar
- `PUT /api/disciplinas/:id` - Atualizar
- `DELETE /api/disciplinas/:id` - Remover

### **Professores:**
- `GET /api/professores` - Listar
- `POST /api/professores` - Criar
- `PUT /api/professores/:id` - Atualizar
- `DELETE /api/professores/:id` - Remover

### **Turmas:**
- `GET /api/turmas` - Listar
- `POST /api/turmas` - Criar
- `PUT /api/turmas/:id` - Atualizar
- `DELETE /api/turmas/:id` - Remover

### **Horários:**
- `GET /api/horarios` - Listar
- `POST /api/horarios` - Criar
- `PUT /api/horarios/:id` - Atualizar
- `DELETE /api/horarios/:id` - Remover

---

## 🔍 **MONITORAMENTO**

### **Status da Conexão:**
- **Indicador visual** no canto inferior direito
- **Teste automático** a cada 60 segundos
- **Detalhes da API** com URL e status
- **Ações rápidas** (testar/recarregar)

### **Estados da Conexão:**
- 🟢 **Conectado** - API funcionando
- 🔴 **Desconectado** - Problema de conexão
- 🟡 **Testando** - Verificando status

---

## 📚 **COMO USAR**

### **1. Configuração Inicial:**
1. Baixe o projeto
2. Execute `npm run start:sistema`
3. Aguarde a inicialização
4. Acesse http://localhost:5173

### **2. Primeiro Acesso:**
1. O sistema inicia com dados de exemplo
2. Cadastre suas disciplinas, professores e turmas
3. Monte a grade de horários
4. Use drag & drop para reorganizar

### **3. Uso Diário:**
1. Abra o sistema em qualquer navegador
2. Faça as alterações necessárias
3. Todos os usuários veem as mudanças
4. Use os filtros para visualizar específicos

---

## 🚨 **SOLUÇÃO DE PROBLEMAS**

### **❌ Backend não inicia:**
```bash
# Verificar se a porta 3001 está livre
lsof -i :3001

# Instalar dependências manualmente
cd backend && npm install
```

### **❌ Frontend não conecta:**
1. Verifique se backend está rodando
2. Confirme URL da API no .env
3. Teste conexão: http://localhost:3001/api/dados

### **❌ Dados não aparecem:**
1. Verifique status da conexão (canto inferior direito)
2. Teste a conexão pela interface
3. Recarregue os dados

### **❌ Port já em uso:**
```bash
# Matar processo na porta 3001
npx kill-port 3001

# Matar processo na porta 5173
npx kill-port 5173
```

---

## 🔄 **BACKUP E RESTORE**

### **Exportar Dados:**
1. Use o botão "Status da API" (canto inferior direito)
2. Clique em "Exportar" ou acesse: http://localhost:3001/api/exportar
3. Arquivo JSON será baixado

### **Importar Dados:**
1. Use a interface de debug
2. Selecione arquivo JSON de backup
3. Confirme a importação

### **Reset do Sistema:**
1. Use a interface de debug
2. Clique em "Resetar Sistema"
3. Dados voltam ao padrão inicial

---

## 🤝 **COLABORAÇÃO**

### **Trabalho em Equipe:**
- Múltiplos usuários podem acessar simultaneamente
- Todas as alterações são sincronizadas
- Auto-refresh mantém dados atualizados
- Conflitos são detectados automaticamente

---

## 📝 **LICENÇA**

Este projeto está licenciado sob a **Licença MIT**. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 **DESENVOLVIMENTO**

**Criado por:** MiniMax Agent  
**Versão:** 2.0.0 (Multiusuário)  
**Data:** 2025

### **Melhorias desta versão:**
- ✅ Backend Node.js/Express
- ✅ Dados compartilhados entre usuários  
- ✅ API REST completa
- ✅ Monitoramento de conexão
- ✅ Auto-refresh de dados
- ✅ Scripts de inicialização automática

---

## 🎉 **PRONTO PARA USO!**

**Este é um sistema completo e funcional para gestão de horários escolares com suporte multiusuário.**

**Para iniciar: `npm run start:sistema`** 🚀
