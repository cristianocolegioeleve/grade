import React from 'react';
import { useSistema } from '../../context/SistemaContext';
import { Disciplina } from '../../types';
import { Edit3, Trash2, Users, GraduationCap, Calendar, AlertTriangle } from 'lucide-react';

interface CardDisciplinaProps {
  disciplina: Disciplina;
  professores: number;
  turmas: number;
  horarios: number;
  onEditar: () => void;
}

export function CardDisciplina({ 
  disciplina, 
  professores, 
  turmas, 
  horarios, 
  onEditar 
}: CardDisciplinaProps) {
  const { removerDisciplina } = useSistema();
  
  const handleRemover = () => {
    const temDados = professores > 0 || horarios > 0;
    
    if (temDados) {
      const mensagem = [
        'Esta disciplina possui:',
        professores > 0 ? `• ${professores} professor(es)` : '',
        horarios > 0 ? `• ${horarios} horário(s)` : '',
        '',
        'Ao removê-la, todos os dados associados serão perdidos.',
        'Deseja continuar?'
      ].filter(Boolean).join('\n');
      
      if (!window.confirm(mensagem)) {
        return;
      }
    } else {
      if (!window.confirm('Tem certeza que deseja remover esta disciplina?')) {
        return;
      }
    }
    
    removerDisciplina(disciplina.id);
  };

  // Determinar status da disciplina
  const getStatus = () => {
    if (professores === 0) {
      return {
        tipo: 'alerta',
        texto: 'Sem professores',
        cor: 'text-orange-600 bg-orange-100'
      };
    }
    if (horarios === 0) {
      return {
        tipo: 'info',
        texto: 'Sem horários',
        cor: 'text-blue-600 bg-blue-100'
      };
    }
    return {
      tipo: 'ativo',
      texto: 'Ativa',
      cor: 'text-green-600 bg-green-100'
    };
  };

  const status = getStatus();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      {/* Cabeçalho do card com barra de cor */}
      <div className="relative">
        {/* Barra de cor da disciplina */}
        <div
          className="h-2 w-full rounded-t-lg"
          style={{ backgroundColor: disciplina.cor }}
        />
        
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <div
                  className="w-6 h-6 rounded-lg shadow-sm border border-gray-200 flex-shrink-0"
                  style={{ backgroundColor: disciplina.cor }}
                />
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {disciplina.nome}
                </h3>
              </div>
              
              {/* Status */}
              <div className="flex items-center space-x-2">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${status.cor}`}>
                  {status.texto}
                </span>
                {status.tipo === 'alerta' && (
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={onEditar}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Editar disciplina"
              >
                <Edit3 className="h-4 w-4" />
              </button>
              <button
                onClick={handleRemover}
                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Remover disciplina"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Users className="h-4 w-4 text-blue-600" />
            </div>
            <div className="text-lg font-bold text-blue-600">
              {professores}
            </div>
            <div className="text-xs text-gray-600">Professores</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <GraduationCap className="h-4 w-4 text-green-600" />
            </div>
            <div className="text-lg font-bold text-green-600">
              {turmas}
            </div>
            <div className="text-xs text-gray-600">Turmas</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Calendar className="h-4 w-4 text-purple-600" />
            </div>
            <div className="text-lg font-bold text-purple-600">
              {horarios}
            </div>
            <div className="text-xs text-gray-600">Horários</div>
          </div>
        </div>
      </div>

      {/* Informações da cor */}
      <div className="px-4 pb-4 border-t border-gray-100 pt-3">
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            Código da cor:
          </div>
          <div className="text-xs font-mono text-gray-700 bg-gray-100 px-2 py-1 rounded">
            {disciplina.cor.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}