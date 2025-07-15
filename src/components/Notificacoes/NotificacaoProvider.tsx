import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Notificacao } from './Notificacao';

export interface NotificacaoData {
  id: string;
  tipo: 'sucesso' | 'erro' | 'aviso' | 'info';
  titulo: string;
  mensagem?: string;
  duracao?: number;
}

interface NotificacaoContexto {
  adicionarNotificacao: (notificacao: Omit<NotificacaoData, 'id'>) => void;
  removerNotificacao: (id: string) => void;
  sucesso: (titulo: string, mensagem?: string) => void;
  erro: (titulo: string, mensagem?: string) => void;
  aviso: (titulo: string, mensagem?: string) => void;
  info: (titulo: string, mensagem?: string) => void;
}

const NotificacaoContext = createContext<NotificacaoContexto | undefined>(undefined);

export function NotificacaoProvider({ children }: { children: ReactNode }) {
  const [notificacoes, setNotificacoes] = useState<NotificacaoData[]>([]);

  const adicionarNotificacao = (notificacao: Omit<NotificacaoData, 'id'>) => {
    const id = crypto.randomUUID();
    const novaNotificacao: NotificacaoData = {
      ...notificacao,
      id,
      duracao: notificacao.duracao ?? 5000
    };
    
    setNotificacoes(prev => [novaNotificacao, ...prev]);
    
    // Auto-remover após a duração especificada
    if (novaNotificacao.duracao > 0) {
      setTimeout(() => {
        removerNotificacao(id);
      }, novaNotificacao.duracao);
    }
  };

  const removerNotificacao = (id: string) => {
    setNotificacoes(prev => prev.filter(n => n.id !== id));
  };

  // Funções de conveniência
  const sucesso = (titulo: string, mensagem?: string) => {
    adicionarNotificacao({ tipo: 'sucesso', titulo, mensagem });
  };

  const erro = (titulo: string, mensagem?: string) => {
    adicionarNotificacao({ tipo: 'erro', titulo, mensagem, duracao: 7000 });
  };

  const aviso = (titulo: string, mensagem?: string) => {
    adicionarNotificacao({ tipo: 'aviso', titulo, mensagem, duracao: 6000 });
  };

  const info = (titulo: string, mensagem?: string) => {
    adicionarNotificacao({ tipo: 'info', titulo, mensagem });
  };

  return (
    <NotificacaoContext.Provider value={{
      adicionarNotificacao,
      removerNotificacao,
      sucesso,
      erro,
      aviso,
      info
    }}>
      {children}
      
      {/* Container de notificações */}
      <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
        {notificacoes.map((notificacao) => (
          <Notificacao
            key={notificacao.id}
            notificacao={notificacao}
            onRemover={() => removerNotificacao(notificacao.id)}
          />
        ))}
      </div>
    </NotificacaoContext.Provider>
  );
}

export function useNotificacao() {
  const contexto = useContext(NotificacaoContext);
  if (contexto === undefined) {
    throw new Error('useNotificacao deve ser usado dentro de NotificacaoProvider');
  }
  return contexto;
}