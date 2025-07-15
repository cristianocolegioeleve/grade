import React from 'react';
import { Turma, Professor } from '../../types';
import { Filter } from 'lucide-react';

interface FiltrosHorariosProps {
  turmaFiltro: string;
  professorFiltro: string;
  onTurmaChange: (turmaId: string) => void;
  onProfessorChange: (professorId: string) => void;
  turmas: Turma[];
  professores: Professor[];
}

export function FiltrosHorarios({
  turmaFiltro,
  professorFiltro,
  onTurmaChange,
  onProfessorChange,
  turmas,
  professores
}: FiltrosHorariosProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="h-5 w-5 text-gray-600" />
        <h3 className="text-lg font-medium text-gray-900">Filtros</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Filtro por Turma */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Turma
          </label>
          <select
            value={turmaFiltro}
            onChange={(e) => onTurmaChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Todas as turmas</option>
            {turmas.map((turma) => (
              <option key={turma.id} value={turma.id}>
                {turma.segmento} - {turma.ano}{turma.turma} ({turma.periodo})
              </option>
            ))}
          </select>
        </div>
        
        {/* Filtro por Professor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Professor
          </label>
          <select
            value={professorFiltro}
            onChange={(e) => onProfessorChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Todos os professores</option>
            {professores.map((professor) => (
              <option key={professor.id} value={professor.id}>
                {professor.nome}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Botões de ação rápida */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          {turmaFiltro || professorFiltro ? (
            <span>
              Filtros ativos: 
              {turmaFiltro && professorFiltro ? 'Turma e Professor' :
               turmaFiltro ? 'Turma' : 'Professor'}
            </span>
          ) : (
            'Nenhum filtro aplicado'
          )}
        </div>
        
        {(turmaFiltro || professorFiltro) && (
          <button
            onClick={() => {
              onTurmaChange('');
              onProfessorChange('');
            }}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Limpar filtros
          </button>
        )}
      </div>
    </div>
  );
}