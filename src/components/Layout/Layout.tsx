import React, { useState } from 'react';
import { Navegacao } from './Navegacao';
import { Dashboard } from '../Dashboard/Dashboard';
import { PaginaHorarios } from '../Horarios/PaginaHorarios';
import { PaginaProfessores } from '../Professores/PaginaProfessores';
import { PaginaTurmas } from '../Turmas/PaginaTurmas';
import { PaginaDisciplinas } from '../Disciplinas/PaginaDisciplinas';

export function Layout() {
  const [abaSelecionada, setAbaSelecionada] = useState('dashboard');

  const renderizarConteudo = () => {
    switch (abaSelecionada) {
      case 'dashboard':
        return <Dashboard />;
      case 'horarios':
        return <PaginaHorarios />;
      case 'professores':
        return <PaginaProfessores />;
      case 'turmas':
        return <PaginaTurmas />;
      case 'disciplinas':
        return <PaginaDisciplinas />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navegacao 
        abaSelecionada={abaSelecionada} 
        aoSelecionarAba={setAbaSelecionada} 
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderizarConteudo()}
      </main>
    </div>
  );
}