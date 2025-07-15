import React from 'react';
import { SistemaProvider } from './context/SistemaContext';
import { NotificacaoProvider } from './components/Notificacoes/NotificacaoProvider';
import { Layout } from './components/Layout/Layout';
import { StatusConexaoAPI } from './components/Debug/StatusConexaoAPI';

function App() {
  return (
    <NotificacaoProvider>
      <SistemaProvider>
        <Layout />
        <StatusConexaoAPI />
      </SistemaProvider>
    </NotificacaoProvider>
  );
}

export default App;
