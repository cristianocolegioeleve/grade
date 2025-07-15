import React from 'react';
import { ConflitoDados } from '../../types';
import { AlertTriangle, Users, GraduationCap } from 'lucide-react';

interface CardConflitosProps {
  conflitos: ConflitoDados[];
}

export function CardConflitos({ conflitos }: CardConflitosProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-red-100 rounded-lg">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Conflitos Detectados
            </h3>
            <p className="text-sm text-gray-600">
              {conflitos.length} {conflitos.length === 1 ? 'conflito precisa' : 'conflitos precisam'} de atenção
            </p>
          </div>
        </div>
        
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">
          Resolver Conflitos
        </button>
      </div>
      
      <div className="space-y-4">
        {conflitos.slice(0, 5).map((conflito) => (
          <div 
            key={conflito.id}
            className="border border-red-200 rounded-lg p-4 bg-red-50"
          >
            <div className="flex items-start space-x-3">
              <div className="p-1 bg-red-200 rounded">
                {conflito.tipo === 'professor_duplo' ? (
                  <Users className="h-4 w-4 text-red-700" />
                ) : (
                  <GraduationCap className="h-4 w-4 text-red-700" />
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-medium text-red-900">
                    {conflito.tipo === 'professor_duplo' ? 'Conflito de Professor' : 'Conflito de Turma'}
                  </span>
                  <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">
                    {conflito.horarios.length} horários
                  </span>
                </div>
                <p className="text-sm text-red-800">
                  {conflito.descricao}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {conflitos.length > 5 && (
          <div className="text-center">
            <p className="text-sm text-gray-600">
              E mais {conflitos.length - 5} conflitos...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}