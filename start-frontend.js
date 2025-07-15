#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 ========================================');
console.log('   SISTEMA COLÉGIO ELEVE - FRONTEND');
console.log('🚀 ========================================\n');

const frontendPath = __dirname;

// Verificar se package.json existe
const packageJsonPath = path.join(frontendPath, 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ package.json não encontrado!');
  process.exit(1);
}

console.log('📦 Instalando dependências do frontend...');

// Instalar dependências
const npmInstall = spawn('npm', ['install'], {
  cwd: frontendPath,
  stdio: 'inherit',
  shell: true
});

npmInstall.on('close', (code) => {
  if (code !== 0) {
    console.error('❌ Erro ao instalar dependências!');
    process.exit(1);
  }

  console.log('✅ Dependências instaladas com sucesso!');
  console.log('🚀 Iniciando servidor de desenvolvimento...\n');

  // Definir variável de ambiente para API
  process.env.REACT_APP_API_URL = 'http://localhost:3001/api';

  // Iniciar o servidor de desenvolvimento
  const server = spawn('npm', ['run', 'dev'], {
    cwd: frontendPath,
    stdio: 'inherit',
    shell: true,
    env: { ...process.env }
  });

  server.on('close', (code) => {
    console.log(`\n🔄 Servidor finalizado com código: ${code}`);
  });

  // Capturar sinais para finalizar graciosamente
  process.on('SIGINT', () => {
    console.log('\n🛑 Finalizando servidor...');
    server.kill('SIGINT');
  });

  process.on('SIGTERM', () => {
    console.log('\n🛑 Finalizando servidor...');
    server.kill('SIGTERM');
  });
});

npmInstall.on('error', (error) => {
  console.error('❌ Erro ao executar npm install:', error.message);
  process.exit(1);
});
