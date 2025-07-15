#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 ========================================');
console.log('   SISTEMA COLÉGIO ELEVE - BACKEND');
console.log('🚀 ========================================\n');

const backendPath = path.join(__dirname, 'backend');

// Verificar se a pasta backend existe
if (!fs.existsSync(backendPath)) {
  console.error('❌ Pasta backend não encontrada!');
  console.log('📁 Verifique se o arquivo está na raiz do projeto.');
  process.exit(1);
}

// Verificar se package.json existe no backend
const packageJsonPath = path.join(backendPath, 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ package.json não encontrado na pasta backend!');
  process.exit(1);
}

console.log('📦 Instalando dependências do backend...');

// Instalar dependências
const npmInstall = spawn('npm', ['install'], {
  cwd: backendPath,
  stdio: 'inherit',
  shell: true
});

npmInstall.on('close', (code) => {
  if (code !== 0) {
    console.error('❌ Erro ao instalar dependências!');
    process.exit(1);
  }

  console.log('✅ Dependências instaladas com sucesso!');
  console.log('🚀 Iniciando servidor backend...\n');

  // Iniciar o servidor
  const server = spawn('npm', ['start'], {
    cwd: backendPath,
    stdio: 'inherit',
    shell: true
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
