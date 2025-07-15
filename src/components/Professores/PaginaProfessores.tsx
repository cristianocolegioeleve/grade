import React, { useState } from 'react';
import { useSistema } from '../../context/SistemaContext';
import { CardProfessor } from './CardProfessor';
import { ModalProfessor } from './ModalProfessor';
import { Professor } from '../../types';
import { Plus, Search } from 'lucide-react';

export function PaginaProfessores() {
  const { estado } = useSistema();
  const [modalAberto, setModalAberto] = useState(false);
  const [professorEdicao, setProfessorEdicao] = useState<Professor | null>(null);
  const [busca, setBusca] = useState('');

  // Filtrar professores pela busca
  const professoresFiltrados = estado.professores.filter(professor =>
    professor.nome.toLowerCase().includes(busca.toLowerCase()) ||
    professor.disciplinaIds.some(disciplinaId => 
      estado.disciplinas.find(d => d.id === disciplinaId)?.nome
        .toLowerCase().includes(busca.toLowerCase())
    )
  );

  const handleNovoProfessor = () => {
    setProfessorEdicao(null);
    setModalAberto(true);
  };

  const handleEditarProfessor = (professor: Professor) => {
    setProfessorEdicao(professor);
    setModalAberto(true);
  };

  const handleFecharModal = () => {
    setModalAberto(false);
    setProfessorEdicao(null);
  };

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Gerenciamento de Professores
          </h1>
          <p className="text-gray-600 mt-1">
            Gerencie o cadastro de professores e suas disponibilidades
          </p>
        </div>
        
        <button
          onClick={handleNovoProfessor}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-4 sm:mt-0"
        >
          <Plus className="h-5 w-5" />
          <span>Novo Professor</span>
        </button>
      </div>

      {/* Barra de busca */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por nome do professor ou disciplina..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-blue-600">
            {estado.professores.length}
          </div>
          <div className="text-sm text-gray-600">Total de Professores</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-green-600">
            {estado.disciplinas.length}
          </div>
          <div className="text-sm text-gray-600">Disciplinas Disponíveis</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-purple-600">
            {professoresFiltrados.length}
          </div>
          <div className="text-sm text-gray-600">Resultados da Busca</div>
        </div>
      </div>

      {/* Lista de professores */}
      {professoresFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professoresFiltrados.map((professor) => (
            <CardProfessor
              key={professor.id}
              professor={professor}
              onEditar={() => handleEditarProfessor(professor)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {busca ? 'Nenhum professor encontrado' : 'Nenhum professor cadastrado'}
            </h3>
            <p className="text-gray-600 mb-4">
              {busca
                ? 'Tente ajustar os termos de busca'
                : 'Comece adicionando seu primeiro professor'
              }
            </p>
            {!busca && (
              <button
                onClick={handleNovoProfessor}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-5 w-5" />
                <span>Adicionar Professor</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Modal */}
      {modalAberto && (
        <ModalProfessor
          professor={professorEdicao}
          onFechar={handleFecharModal}
        />
      )}
    </div>
  );
}