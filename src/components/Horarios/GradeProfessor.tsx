import React from 'react';
import { Horario, Professor, Turma, Disciplina } from '../../types';
import { Clock, MapPin, BookOpen } from 'lucide-react';

interface GradeProfessorProps {
  professor: Professor;
  horarios: Horario[];
  turmas: Turma[];
  disciplinas: Disciplina[];
}

const diasSemana = [1, 2, 3, 4, 5]; // 1 = Segunda, 2 = Terça, ..., 5 = Sexta
const diasNomes = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
const aulas = [1, 2, 3, 4, 5, 6];

export function GradeProfessor({ professor, horarios, turmas, disciplinas }: GradeProfessorProps) {
  const horariosProfessor = horarios.filter(h => h.professorId === professor.id);
  
  const getHorario = (diaSemana: number, aula: number) => {
    return horariosProfessor.find(h => h.diaSemana === diaSemana && h.aula === aula);
  };

  const getTurma = (turmaId: number) => {
    return turmas.find(t => t.id === turmaId);
  };

  const getDisciplina = (disciplinaId: number) => {
    return disciplinas.find(d => d.id === disciplinaId);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Cabeçalho do professor */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 text-white">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 rounded-full p-2">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold">{professor.nome}</h2>
            <p className="text-blue-100">
              Grade de Horários - Todas as Turmas
            </p>
          </div>
        </div>
      </div>

      {/* Informações resumidas */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              <strong>{horariosProfessor.length}</strong> aulas por semana
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              <strong>{new Set(horariosProfessor.map(h => h.turmaId)).size}</strong> turmas diferentes
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              <strong>{new Set(horariosProfessor.map(h => h.disciplinaId)).size}</strong> disciplinas
            </span>
          </div>
        </div>
      </div>

      {/* Grade de horários */}
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="w-16 px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aula
                </th>
                {diasNomes.map((dia, index) => (
                  <th key={dia} className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {dia}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {aulas.map((numeroAula) => (
                <tr key={numeroAula} className="hover:bg-gray-50">
                  <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                    Aula {numeroAula}
                  </td>
                  {diasSemana.map((diaSemana, index) => {
                    const horario = getHorario(diaSemana, numeroAula);
                    const turma = horario ? getTurma(horario.turmaId) : null;
                    const disciplina = horario ? getDisciplina(horario.disciplinaId) : null;

                    return (
                      <td key={`${diaSemana}-${numeroAula}`} className="px-3 py-2 whitespace-nowrap text-sm">
                        {horario && turma && disciplina ? (
                          <div className="relative">
                            <div 
                              className="rounded-lg p-3 text-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center"
                              style={{ backgroundColor: disciplina.cor }}
                            >
                              {/* Turma (maior) */}
                              <div className="font-bold text-base mb-1 drop-shadow-sm">
                                {turma.ano}{turma.turma}
                              </div>
                              {/* Segmento (menor) */}
                              <div className="text-xs opacity-90 mb-1">
                                {turma.segmento === 'Ensino Fundamental I' ? 'Fund I' :
                                 turma.segmento === 'Ensino Fundamental II' ? 'Fund II' :
                                 turma.segmento === 'Ensino Médio' ? 'EM' : turma.segmento}
                              </div>
                              {/* Disciplina (menor) */}
                              <div className="text-xs opacity-90 font-medium">
                                {disciplina.nome}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="h-16 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center">
                            <span className="text-xs text-gray-400">Livre</span>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legenda das disciplinas */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Disciplinas do Professor:</h4>
        <div className="flex flex-wrap gap-2">
          {Array.from(new Set(horariosProfessor.map(h => h.disciplinaId)))
            .map(disciplinaId => {
              const disciplina = getDisciplina(disciplinaId);
              return disciplina ? (
                <div 
                  key={disciplina.id}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white"
                  style={{ backgroundColor: disciplina.cor }}
                >
                  {disciplina.nome}
                </div>
              ) : null;
            })}
        </div>
      </div>
    </div>
  );
}
