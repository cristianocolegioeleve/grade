import React from 'react';
import { useSistema } from '../../context/SistemaContext';
import { CardResumo } from './CardResumo';
import { CardConflitos } from './CardConflitos';
import { Users, GraduationCap, BookOpen, CalendarDays, AlertTriangle, CheckCircle } from 'lucide-react';

export function Dashboard() {
  const { estado } = useSistema();
  
  const totalProfessores = estado.professores.length;
  const totalTurmas = estado.turmas.length;
  const totalDisciplinas = estado.disciplinas.length;
  const totalHorarios = estado.horarios.length;
  const totalConflitos = estado.conflitos.length;
  
  // Calcular estatísticas adicionais
  const horariosPreenchidos = totalHorarios;
  const totalSlotsDisponiveis = totalTurmas * 30; // 30 slots por turma (5 dias x 6 aulas)
  const percentualPreenchimento = totalSlotsDisponiveis > 0 
    ? Math.round((horariosPreenchidos / totalSlotsDisponiveis) * 100) 
    : 0;

  return (
    <div className="space-y-8">
      {/* Cabeçalho */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Dashboard do Sistema
        </h1>
        <p className="text-gray-600">
          Visão geral do gerenciamento de grade de horários escolares
        </p>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CardResumo
          titulo="Professores"
          valor={totalProfessores}
          icone={Users}
          cor="blue"
        />
        
        <CardResumo
          titulo="Turmas"
          valor={totalTurmas}
          icone={GraduationCap}
          cor="green"
        />
        
        <CardResumo
          titulo="Disciplinas"
          valor={totalDisciplinas}
          icone={BookOpen}
          cor="purple"
        />
        
        <CardResumo
          titulo="Horários"
          valor={totalHorarios}
          icone={CalendarDays}
          cor="orange"
        />
      </div>

      {/* Cards de Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card de Preenchimento */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Preenchimento da Grade
            </h3>
            <div className="p-2 bg-blue-100 rounded-lg">
              <CalendarDays className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Horários preenchidos</span>
              <span className="font-medium">{horariosPreenchidos}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total de slots</span>
              <span className="font-medium">{totalSlotsDisponiveis}</span>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {percentualPreenchimento}% Completo
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${percentualPreenchimento}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card de Status dos Conflitos */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Status dos Conflitos
            </h3>
            <div className={`p-2 rounded-lg ${
              totalConflitos > 0 ? 'bg-red-100' : 'bg-green-100'
            }`}>
              {totalConflitos > 0 ? (
                <AlertTriangle className="h-6 w-6 text-red-600" />
              ) : (
                <CheckCircle className="h-6 w-6 text-green-600" />
              )}
            </div>
          </div>
          
          <div className="space-y-3">
            {totalConflitos > 0 ? (
              <>
                <div className="text-2xl font-bold text-red-600">
                  {totalConflitos}
                </div>
                <p className="text-sm text-gray-600">
                  {totalConflitos === 1 ? 'Conflito detectado' : 'Conflitos detectados'}
                </p>
              </>
            ) : (
              <>
                <div className="text-2xl font-bold text-green-600">
                  0
                </div>
                <p className="text-sm text-gray-600">
                  Nenhum conflito detectado
                </p>
              </>
            )}
          </div>
        </div>

        {/* Card de Ações Rápidas */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Ações Rápidas
            </h3>
          </div>
          
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
              <div className="font-medium text-blue-900">Gerenciar Horários</div>
              <div className="text-sm text-blue-700">Visualizar e editar grade</div>
            </button>
            
            <button className="w-full text-left p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors duration-200">
              <div className="font-medium text-green-900">Adicionar Professor</div>
              <div className="text-sm text-green-700">Cadastrar novo professor</div>
            </button>
            
            <button className="w-full text-left p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors duration-200">
              <div className="font-medium text-purple-900">Nova Turma</div>
              <div className="text-sm text-purple-700">Criar nova turma</div>
            </button>
          </div>
        </div>
      </div>

      {/* Card de Conflitos Detalhado */}
      {totalConflitos > 0 && (
        <CardConflitos conflitos={estado.conflitos} />
      )}
    </div>
  );
}