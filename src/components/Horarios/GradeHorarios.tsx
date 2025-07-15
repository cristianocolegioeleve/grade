import React from 'react';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import { Turma, Horario, ConflitoDados } from '../../types';
import { DIAS_SEMANA } from '../../types';
import { SlotHorario } from './SlotHorario';
import { useSistema } from '../../context/SistemaContext';
import { useState } from 'react';

interface GradeHorariosProps {
  horarios: Horario[];
  turmaSelecionada: Turma | null;
  modoEdicao: boolean;
  onAdicionarHorario: (diaSemana: number, aula: number) => void;
  conflitos: ConflitoDados[];
}

const AULAS = [1, 2, 3, 4, 5, 6] as const;
const DIAS = [1, 2, 3, 4, 5] as const;

export function GradeHorarios({
  horarios,
  turmaSelecionada,
  modoEdicao,
  onAdicionarHorario,
  conflitos
}: GradeHorariosProps) {
  const { moverHorario, obterDisciplinaPorId, obterProfessorPorId } = useSistema();
  const [horarioArrastado, setHorarioArrastado] = useState<Horario | null>(null);

  // Se não há turma selecionada, mostrar mensagem
  if (!turmaSelecionada) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-4 8h.01M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V9a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Selecione uma turma
          </h3>
          <p className="text-gray-600">
            Escolha uma turma nos filtros acima para visualizar e editar sua grade de horários
          </p>
        </div>
      </div>
    );
  }

  // Filtrar horários da turma selecionada
  const horariosDoTurma = horarios.filter(h => h.turmaId === turmaSelecionada.id);

  // Função para obter horário de um slot específico
  const obterHorarioDoSlot = (dia: number, aula: number): Horario | undefined => {
    return horariosDoTurma.find(h => h.diaSemana === dia && h.aula === aula);
  };

  // Função para verificar se um slot tem conflito
  const slotTemConflito = (dia: number, aula: number): ConflitoDados | undefined => {
    const horarioDoSlot = obterHorarioDoSlot(dia, aula);
    if (!horarioDoSlot) return undefined;
    
    return conflitos.find(conflito => 
      conflito.horarios.some(h => h.id === horarioDoSlot.id)
    );
  };

  // Handler para início do drag
  const handleDragStart = (event: DragStartEvent) => {
    const horarioId = Number(event.active.id);
    const horario = horariosDoTurma.find(h => h.id === horarioId);
    setHorarioArrastado(horario || null);
  };

  // Handler para fim do drag
  const handleDragEnd = (event: DragEndEvent) => {
    setHorarioArrastado(null);
    
    const { active, over } = event;
    
    if (!over || !active) return;
    
    const horarioId = Number(active.id);
    const [novoDia, novaAula] = (over.id as string).split('-').map(Number);
    
    if (novoDia && novaAula) {
      moverHorario(horarioId, novoDia, novaAula);
    }
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Cabeçalho da grade */}
        <div className="bg-gray-50 border-b border-gray-200 p-4">
          <h3 className="text-lg font-medium text-gray-900">
            Grade de Horários - {turmaSelecionada.segmento} {turmaSelecionada.ano}{turmaSelecionada.turma}
          </h3>
          <p className="text-sm text-gray-600">
            Período: {turmaSelecionada.periodo}
          </p>
        </div>

        {/* Grid da grade */}
        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Cabeçalho dos dias */}
            <div className="grid grid-cols-6 border-b border-gray-200">
              <div className="p-4 bg-gray-50 font-medium text-gray-900 text-center border-r border-gray-200">
                Aulas
              </div>
              {DIAS.map((dia) => (
                <div key={dia} className="p-4 bg-gray-50 font-medium text-gray-900 text-center border-r border-gray-200 last:border-r-0">
                  {DIAS_SEMANA[dia]}
                </div>
              ))}
            </div>

            {/* Linhas das aulas */}
            {AULAS.map((aula) => (
              <div key={aula} className="grid grid-cols-6 border-b border-gray-200 last:border-b-0">
                {/* Coluna do número da aula */}
                <div className="p-4 bg-gray-50 font-medium text-gray-900 text-center border-r border-gray-200 flex items-center justify-center">
                  Aula {aula}
                </div>
                
                {/* Slots dos dias */}
                {DIAS.map((dia) => {
                  const horario = obterHorarioDoSlot(dia, aula);
                  const conflito = slotTemConflito(dia, aula);
                  
                  return (
                    <SlotHorario
                      key={`${dia}-${aula}`}
                      dia={dia}
                      aula={aula}
                      horario={horario}
                      conflito={conflito}
                      modoEdicao={modoEdicao}
                      onAdicionarHorario={() => onAdicionarHorario(dia, aula)}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay do drag */}
      <DragOverlay>
        {horarioArrastado && (
          <div className="bg-white border-2 border-blue-500 rounded-lg p-3 shadow-lg opacity-90">
            <div className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: obterDisciplinaPorId(horarioArrastado.disciplinaId)?.cor }}
              />
              <div>
                <div className="font-medium text-sm">
                  {obterDisciplinaPorId(horarioArrastado.disciplinaId)?.nome}
                </div>
                <div className="text-xs text-gray-600">
                  {obterProfessorPorId(horarioArrastado.professorId)?.nome}
                </div>
              </div>
            </div>
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
}