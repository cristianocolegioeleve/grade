import React from 'react';
import { useSistema } from '../../context/SistemaContext';
import { Turma } from '../../types';
import { Edit3, Trash2, Users, BookOpen, Calendar, Clock } from 'lucide-react';

interface CardTurmaProps {
  turma: Turma;
  onEditar: () => void;
}

export function CardTurma({ turma, onEditar }: CardTurmaProps) {
  const { removerTurma, estado } = useSistema();
  
  // Contar horários, disciplinas e professores da turma
  const horariosDoTurma = estado.horarios.filter(h => h.turmaId === turma.id);
  const disciplinasUnicas = new Set(horariosDoTurma.map(h => h.disciplinaId));
  const professoresUnicos = new Set(horariosDoTurma.map(h => h.professorId));
  
  // Calcular progresso da grade (30 slots total: 5 dias x 6 aulas)
  const totalSlots = 30;
  const slotsPreenchidos = horariosDoTurma.length;
  const percentualPreenchimento = Math.round((slotsPreenchidos / totalSlots) * 100);

  const handleRemover = () => {
    if (horariosDoTurma.length > 0) {
      if (!window.confirm(
        `Esta turma possui ${horariosDoTurma.length} horário(s) cadastrado(s). ` +
        'Ao removê-la, todos os horários serão perdidos. Deseja continuar?'
      )) {
        return;
      }
    } else {
      if (!window.confirm('Tem certeza que deseja remover esta turma?')) {
        return;
      }
    }
    
    removerTurma(turma.id);
  };

  // Definir cor baseada no segmento
  const getCorSegmento = (segmento: string) => {
    if (segmento.includes('Fundamental I')) return 'bg-blue-100 text-blue-800';
    if (segmento.includes('Fundamental II')) return 'bg-green-100 text-green-800';
    if (segmento.includes('Médio')) return 'bg-purple-100 text-purple-800';
    return 'bg-gray-100 text-gray-800';
  };

  const getCorPeriodo = (periodo: string) => {
    switch (periodo) {
      case 'Manhã': return 'bg-yellow-100 text-yellow-800';
      case 'Tarde': return 'bg-orange-100 text-orange-800';
      case 'Noite': return 'bg-indigo-100 text-indigo-800';
      case 'Integral': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      {/* Cabeçalho do card */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">
                {turma.ano}{turma.turma}
              </h3>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCorPeriodo(turma.periodo)}`}>
                {turma.periodo}
              </span>
            </div>
            
            <div className={`inline-block text-xs px-2 py-1 rounded-full font-medium ${getCorSegmento(turma.segmento)}`}>
              {turma.segmento}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={onEditar}
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              title="Editar turma"
            >
              <Edit3 className="h-4 w-4" />
            </button>
            <button
              onClick={handleRemover}
              className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="Remover turma"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Calendar className="h-4 w-4 text-blue-600" />
            </div>
            <div className="text-lg font-bold text-blue-600">
              {slotsPreenchidos}
            </div>
            <div className="text-xs text-gray-600">Horários</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <BookOpen className="h-4 w-4 text-green-600" />
            </div>
            <div className="text-lg font-bold text-green-600">
              {disciplinasUnicas.size}
            </div>
            <div className="text-xs text-gray-600">Disciplinas</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Users className="h-4 w-4 text-purple-600" />
            </div>
            <div className="text-lg font-bold text-purple-600">
              {professoresUnicos.size}
            </div>
            <div className="text-xs text-gray-600">Professores</div>
          </div>
        </div>

        {/* Progresso da grade */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                Preenchimento da Grade
              </span>
            </div>
            <span className="text-sm font-medium text-gray-900">
              {percentualPreenchimento}%
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                percentualPreenchimento === 0 ? 'bg-gray-400' :
                percentualPreenchimento < 30 ? 'bg-red-500' :
                percentualPreenchimento < 70 ? 'bg-yellow-500' :
                'bg-green-500'
              }`}
              style={{ width: `${percentualPreenchimento}%` }}
            />
          </div>
          
          <div className="text-xs text-gray-600">
            {slotsPreenchidos} de {totalSlots} horários preenchidos
          </div>
        </div>
      </div>
    </div>
  );
}