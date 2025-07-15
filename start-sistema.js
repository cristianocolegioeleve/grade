#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 ========================================');
console.log('   SISTEMA COLÉGIO ELEVE - COMPLETO');
console.log('🚀 ========================================\n');

const backendPath = path.join(__dirname, 'backend');
const frontendPath = __dirname;

// Verificar se as pastas existem
if (!fs.existsSync(backendPath)) {
  console.error('❌ Pasta backend não encontrada!');
  process.exit(1);
}

if (!fs.existsSync(path.join(frontendPath, 'package.json'))) {
  console.error('❌ package.json do frontend não encontrado!');
  process.exit(1);
}

if (!fs.existsSync(path.join(backendPath, 'package.json'))) {
  console.error('❌ package.json do backend não encontrado!');
  process.exit(1);
}

let backendProcess = null;
let frontendProcess = null;

// Função para finalizar processos
function cleanup() {
  console.log('\n🛑 Finalizando sistema...');
  
  if (backendProcess) {
    backendProcess.kill('SIGINT');
  }
  
  if (frontendProcess) {
    frontendProcess.kill('SIGINT');
  }
  
  setTimeout(() => {
    process.exit(0);
  }, 2000);
}

// Capturar sinais para finalizar graciosamente
process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

// Instalar dependências do backend
console.log('📦 Instalando dependências do backend...');
const backendInstall = spawn('npm', ['install'], {
  cwd: backendPath,
  stdio: 'inherit',
  shell: true
});

backendInstall.on('close', (code) => {
  if (code !== 0) {
    console.error('❌ Erro ao instalar dependências do backend!');
    process.exit(1);
  }

  console.log('✅ Dependências do backend instaladas!');
  
  // Instalar dependências do frontend
  console.log('📦 Instalando dependências do frontend...');
  const frontendInstall = spawn('npm', ['install'], {
    cwd: frontendPath,
    stdio: 'inherit',
    shell: true
  });

  frontendInstall.on('close', (code) => {
    if (code !== 0) {
      console.error('❌ Erro ao instalar dependências do frontend!');
      process.exit(1);
    }

    console.log('✅ Dependências do frontend instaladas!');
    console.log('\n🚀 Iniciando sistema completo...\n');

    // Iniciar backend
    console.log('🔧 Iniciando backend na porta 3001...');
    backendProcess = spawn('npm', ['start'], {
      cwd: backendPath,
      stdio: ['inherit', 'pipe', 'pipe'],
      shell: true
    });

    backendProcess.stdout.on('data', (data) => {
      console.log(`[BACKEND] ${data}`);
    });

    backendProcess.stderr.on('data', (data) => {
      console.error(`[BACKEND] ${data}`);
    });

    // Aguardar um pouco e iniciar frontend
    setTimeout(() => {
      console.log('🎨 Iniciando frontend na porta 5173...');
      
      frontendProcess = spawn('npm', ['run', 'dev'], {
        cwd: frontendPath,
        stdio: ['inherit', 'pipe', 'pipe'],
        shell: true,
        env: { 
          ...process.env, 
          REACT_APP_API_URL: 'http://localhost:3001/api'
        }
      });

      frontendProcess.stdout.on('data', (data) => {
        console.log(`[FRONTEND] ${data}`);
      });

      frontendProcess.stderr.on('data', (data) => {
        console.error(`[FRONTEND] ${data}`);
      });

      console.log('\n✅ ========================================');
      console.log('   SISTEMA INICIADO COM SUCESSO!');
      console.log('✅ ========================================\n');
      console.log('🌐 Frontend: http://localhost:5173');
      console.log('🔧 Backend:  http://localhost:3001');
      console.log('📊 API:      http://localhost:3001/api');
      console.log('\n💡 Para parar o sistema, pressione Ctrl+C\n');

    }, 3000); // Aguardar 3 segundos
  });
});
