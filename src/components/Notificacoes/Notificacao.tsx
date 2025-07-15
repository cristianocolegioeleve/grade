import React, { useEffect, useState } from 'react';
import { NotificacaoData } from './NotificacaoProvider';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';

interface NotificacaoProps {
  notificacao: NotificacaoData;
  onRemover: () => void;
}

export function Notificacao({ notificacao, onRemover }: NotificacaoProps) {
  const [visivel, setVisivel] = useState(false);
  const [saindo, setSaindo] = useState(false);

  // Animação de entrada
  useEffect(() => {
    const timer = setTimeout(() => setVisivel(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleRemover = () => {
    setSaindo(true);
    setTimeout(onRemover, 300); // Aguarda animação de saída
  };

  const getIconeETema = () => {
    switch (notificacao.tipo) {
      case 'sucesso':
        return {
          icone: CheckCircle,
          cores: 'bg-green-50 border-green-200 text-green-800',
          iconeColor: 'text-green-500'
        };
      case 'erro':
        return {
          icone: XCircle,
          cores: 'bg-red-50 border-red-200 text-red-800',
          iconeColor: 'text-red-500'
        };
      case 'aviso':
        return {
          icone: AlertTriangle,
          cores: 'bg-yellow-50 border-yellow-200 text-yellow-800',
          iconeColor: 'text-yellow-500'
        };
      case 'info':
        return {
          icone: Info,
          cores: 'bg-blue-50 border-blue-200 text-blue-800',
          iconeColor: 'text-blue-500'
        };
      default:
        return {
          icone: Info,
          cores: 'bg-gray-50 border-gray-200 text-gray-800',
          iconeColor: 'text-gray-500'
        };
    }
  };

  const { icone: Icone, cores, iconeColor } = getIconeETema();

  return (
    <div
      className={`
        transform transition-all duration-300 ease-in-out
        ${
          visivel && !saindo
            ? 'translate-x-0 opacity-100 scale-100'
            : 'translate-x-full opacity-0 scale-95'
        }
      `}
    >
      <div className={`
        ${cores} border rounded-lg shadow-lg p-4 max-w-sm w-full
        backdrop-blur-sm
      `}>
        <div className="flex items-start space-x-3">
          <div className={`flex-shrink-0 ${iconeColor}`}>
            <Icone className="h-5 w-5" />
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">
              {notificacao.titulo}
            </p>
            {notificacao.mensagem && (
              <p className="text-sm mt-1 opacity-90">
                {notificacao.mensagem}
              </p>
            )}
          </div>
          
          <button
            onClick={handleRemover}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        {/* Barra de progresso (se tiver duração) */}
        {notificacao.duracao && notificacao.duracao > 0 && (
          <div className="mt-3 w-full bg-black bg-opacity-10 rounded-full h-1">
            <div 
              className="bg-current h-1 rounded-full"
              style={{
                animation: `progressBar ${notificacao.duracao}ms linear forwards`,
                animationName: 'progressBar'
              }}
            />
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes progressBar {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
}