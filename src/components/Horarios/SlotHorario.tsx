import React from 'react';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import { Horario, ConflitoDados } from '../../types';
import { useSistema } from '../../context/SistemaContext';
import { Plus, X, AlertTriangle } from 'lucide-react';

interface SlotHorarioProps {
  dia: number;
  aula: number;
  horario?: Horario;
  conflito?: ConflitoDados;
  modoEdicao: boolean;
  onAdicionarHorario: () => void;
}

export function SlotHorario({
  dia,
  aula,
  horario,
  conflito,
  modoEdicao,
  onAdicionarHorario
}: SlotHorarioProps) {
  const { removerHorario, obterDisciplinaPorId, obterProfessorPorId } = useSistema();

  // Setup do droppable (para receber drops)
  const { setNodeRef: setDropRef, isOver } = useDroppable({
    id: `${dia}-${aula}`,
  });

  // Setup do draggable (se há horário)
  const {
    attributes,
    listeners,
    setNodeRef: setDragRef,
    transform,
    isDragging,
  } = useDraggable({
    id: horario?.id || '',
    disabled: !horario || !modoEdicao,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  // Se não há horário, mostrar slot vazio
  if (!horario) {
    return (
      <div
        ref={setDropRef}
        className={`
          relative min-h-[80px] border-r border-gray-200 last:border-r-0 p-2
          flex items-center justify-center transition-all duration-200
          ${
            isOver
              ? 'bg-blue-50 border-blue-300 rounded-lg'
              : 'bg-gray-50/50 hover:bg-gray-100/50 rounded-lg'
          }
        `}
      >
        {modoEdicao && (
          <button
            onClick={onAdicionarHorario}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            title="Adicionar horário"
          >
            <Plus className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }

  // Obter dados da disciplina e professor
  const disciplina = obterDisciplinaPorId(horario.disciplinaId);
  const professor = obterProfessorPorId(horario.professorId);

  const handleRemover = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Tem certeza que deseja remover este horário?')) {
      removerHorario(horario.id);
    }
  };

  return (
    <div
      ref={(node) => {
        setDropRef(node);
        setDragRef(node);
      }}
      style={{
        ...style,
        backgroundColor: disciplina?.cor || '#ffffff'
      }}
      className={`
        relative min-h-[80px] border-r border-gray-200 last:border-r-0 p-2
        transition-all duration-200 text-white
        ${
          isDragging
            ? 'opacity-50 scale-95'
            : 'opacity-100 scale-100'
        }
        ${
          isOver && !isDragging
            ? 'ring-2 ring-blue-300 ring-inset'
            : ''
        }
        ${
          conflito
            ? 'border-2 border-red-500 animate-pulse'
            : ''
        }
        ${
          modoEdicao && horario
            ? 'cursor-grab active:cursor-grabbing hover:shadow-lg hover:scale-105'
            : 'cursor-default'
        }
        rounded-lg shadow-sm
      `}
      {...(modoEdicao ? listeners : {})}
      {...(modoEdicao ? attributes : {})}
    >
      {/* Conteúdo do horário */}
      <div className="flex flex-col items-center justify-center text-center space-y-1 h-full">
        {/* Disciplina */}
        <div className="text-base font-bold text-white truncate drop-shadow-sm">
          {disciplina?.nome}
        </div>
        
        {/* Professor */}
        <div className="text-sm text-white/90 truncate drop-shadow-sm">
          {professor?.nome}
        </div>
      </div>

      {/* Ícones de ação no modo edição */}
      {modoEdicao && (
        <div className="absolute top-1 right-1 flex space-x-1">
          {/* Ícone de conflito */}
          {conflito && (
            <div
              className="p-1 bg-white/90 rounded text-red-600 shadow-sm"
              title={conflito.descricao}
            >
              <AlertTriangle className="h-3 w-3" />
            </div>
          )}
          
          {/* Botão remover */}
          <button
            onClick={handleRemover}
            className="p-1 bg-white/90 hover:bg-white rounded text-red-600 transition-colors duration-200 shadow-sm"
            title="Remover horário"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* Ícone de conflito (fora do modo edição) */}
      {!modoEdicao && conflito && (
        <div
          className="absolute top-1 right-1 p-1 bg-white/90 rounded text-red-600 shadow-sm"
          title={conflito.descricao}
        >
          <AlertTriangle className="h-3 w-3" />
        </div>
      )}
    </div>
  );
}