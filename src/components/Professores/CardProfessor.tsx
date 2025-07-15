import React from 'react';
import { useSistema } from '../../context/SistemaContext';
import { Professor, DIAS_SEMANA } from '../../types';
import { Edit3, Trash2, Calendar, CheckCircle, XCircle } from 'lucide-react';

interface CardProfessorProps {
  professor: Professor;
  onEditar: () => void;
}

export function CardProfessor({ professor, onEditar }: CardProfessorProps) {
  const { removerProfessor, obterDisciplinaPorId, estado } = useSistema();
  
  const disciplinas = professor.disciplinaIds.map(id => obterDisciplinaPorId(id)).filter(Boolean);
  
  // Contar horários atribuídos
  const horariosAtribuidos = estado.horarios.filter(h => h.professorId === professor.id).length;
  
  // Calcular disponibilidade total
  const totalSlots = professor.disponibilidade.length;
  const slotsDisponiveis = professor.disponibilidade.filter(d => d.disponivel).length;
  const percentualDisponibilidade = Math.round((slotsDisponiveis / totalSlots) * 100);

  const handleRemover = () => {
    if (horariosAtribuidos > 0) {
      if (!window.confirm(
        `Este professor possui ${horariosAtribuidos} horário(s) atribuído(s). ` +
        'Ao removê-lo, todos os horários serão perdidos. Deseja continuar?'
      )) {
        return;
      }
    } else {
      if (!window.confirm('Tem certeza que deseja remover este professor?')) {
        return;
      }
    }
    
    removerProfessor(professor.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      {/* Cabeçalho do card */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">
              {professor.nome}
            </h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {disciplinas.length > 0 ? (
                disciplinas.map((disciplina, index) => (
                  <div key={disciplina?.id || index} className="flex items-center space-x-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: disciplina?.cor }}
                    />
                    <span className="text-sm text-gray-600">
                      {disciplina?.nome}
                    </span>
                  </div>
                ))
              ) : (
                <span className="text-sm text-gray-600">Nenhuma disciplina</span>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={onEditar}
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              title="Editar professor"
            >
              <Edit3 className="h-4 w-4" />
            </button>
            <button
              onClick={handleRemover}
              className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="Remover professor"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {horariosAtribuidos}
            </div>
            <div className="text-xs text-gray-600">Horários</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {percentualDisponibilidade}%
            </div>
            <div className="text-xs text-gray-600">Disponível</div>
          </div>
        </div>

        {/* Grade de disponibilidade visual */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 mb-2">
            <Calendar className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              Disponibilidade Semanal
            </span>
          </div>
          
          <div className="space-y-1">
            {[1, 2, 3, 4, 5].map((dia) => {
              const aulasDoDia = professor.disponibilidade.filter(d => d.diaSemana === dia);
              const aulasDisponiveis = aulasDoDia.filter(d => d.disponivel).length;
              const totalAulas = aulasDoDia.length;
              
              return (
                <div key={dia} className="flex items-center space-x-2">
                  <div className="w-12 text-xs text-gray-600">
                    {DIAS_SEMANA[dia as keyof typeof DIAS_SEMANA].slice(0, 3)}
                  </div>
                  <div className="flex-1 flex space-x-1">
                    {[1, 2, 3, 4, 5, 6].map((aula) => {
                      const disponibilidade = professor.disponibilidade.find(
                        d => d.diaSemana === dia && d.aula === aula
                      );
                      const disponivel = disponibilidade?.disponivel ?? false;
                      
                      return (
                        <div
                          key={aula}
                          className={`
                            w-4 h-4 rounded-sm flex items-center justify-center
                            ${
                              disponivel
                                ? 'bg-green-100 text-green-600'
                                : 'bg-red-100 text-red-600'
                            }
                          `}
                          title={`${DIAS_SEMANA[dia as keyof typeof DIAS_SEMANA]} - Aula ${aula}: ${disponivel ? 'Disponível' : 'Indisponível'}`}
                        >
                          {disponivel ? (
                            <CheckCircle className="h-2 w-2" />
                          ) : (
                            <XCircle className="h-2 w-2" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-xs text-gray-500 w-8">
                    {aulasDisponiveis}/{totalAulas}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Calendário de horários atribuídos */}
        <div className="space-y-2 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2 mb-2">
            <Calendar className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">
              Horários Atribuídos
            </span>
          </div>
          
          <div className="space-y-1">
            {[1, 2, 3, 4, 5].map((dia) => {
              const horariosNoDia = estado.horarios.filter(
                h => h.professorId === professor.id && h.diaSemana === dia
              );
              
              return (
                <div key={dia} className="flex items-center space-x-2">
                  <div className="w-12 text-xs text-gray-600">
                    {DIAS_SEMANA[dia as keyof typeof DIAS_SEMANA].slice(0, 3)}
                  </div>
                  <div className="flex-1 flex space-x-1">
                    {[1, 2, 3, 4, 5, 6].map((aula) => {
                      const horario = horariosNoDia.find(h => h.aula === aula);
                      const disciplinaHorario = horario ? obterDisciplinaPorId(horario.disciplinaId) : null;
                      
                      return (
                        <div
                          key={aula}
                          className={`
                            w-4 h-4 rounded-sm flex items-center justify-center
                            ${
                              horario
                                ? 'border-2'
                                : 'bg-gray-50 border border-gray-200'
                            }
                          `}
                          style={{
                            backgroundColor: horario ? disciplinaHorario?.cor : undefined,
                            borderColor: horario ? disciplinaHorario?.cor : undefined
                          }}
                          title={horario ? `${DIAS_SEMANA[dia as keyof typeof DIAS_SEMANA]} - Aula ${aula}: ${disciplinaHorario?.nome}` : `${DIAS_SEMANA[dia as keyof typeof DIAS_SEMANA]} - Aula ${aula}: Livre`}
                        >
                          {/* Espaço em branco para slots livres, colorido para ocupados */}
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-xs text-gray-500 w-8">
                    {horariosNoDia.length}/6
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}