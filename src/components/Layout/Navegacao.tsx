import React from 'react';
import { CalendarDays, Users, GraduationCap, BookOpen, BarChart3 } from 'lucide-react';

interface NavegacaoProps {
  abaSelecionada: string;
  aoSelecionarAba: (aba: string) => void;
}

const abas = [
  { id: 'dashboard', nome: 'Dashboard', icone: BarChart3 },
  { id: 'horarios', nome: 'Horários', icone: CalendarDays },
  { id: 'professores', nome: 'Professores', icone: Users },
  { id: 'turmas', nome: 'Turmas', icone: GraduationCap },
  { id: 'disciplinas', nome: 'Disciplinas', icone: BookOpen }
];

export function Navegacao({ abaSelecionada, aoSelecionarAba }: NavegacaoProps) {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Título */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo-colegio-eleve.png" 
                alt="Colégio Eleve" 
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-gray-900 leading-tight">
                  Sistema de Gestão de Horários
                </h1>
                <p className="text-sm text-gray-600 leading-tight">
                  Colégio Eleve
                </p>
              </div>
            </div>
          </div>

          {/* Navegação por abas */}
          <div className="flex space-x-1">
            {abas.map((aba) => {
              const Icone = aba.icone;
              const ativo = abaSelecionada === aba.id;
              
              return (
                <button
                  key={aba.id}
                  onClick={() => aoSelecionarAba(aba.id)}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
                    ${
                      ativo
                        ? 'bg-blue-100 text-blue-700 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }
                  `}
                >
                  <Icone className="h-5 w-5" />
                  <span className="hidden sm:block">{aba.nome}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}