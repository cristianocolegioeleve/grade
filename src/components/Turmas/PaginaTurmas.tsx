import React, { useState } from 'react';
import { useSistema } from '../../context/SistemaContext';
import { CardTurma } from './CardTurma';
import { ModalTurma } from './ModalTurma';
import { Turma } from '../../types';
import { Plus, Search, Filter } from 'lucide-react';

export function PaginaTurmas() {
  const { estado } = useSistema();
  const [modalAberto, setModalAberto] = useState(false);
  const [turmaEdicao, setTurmaEdicao] = useState<Turma | null>(null);
  const [busca, setBusca] = useState('');
  const [filtroSegmento, setFiltroSegmento] = useState('');
  const [filtroPeriodo, setFiltroPeriodo] = useState('');

  // Filtrar turmas
  const turmasFiltradas = estado.turmas.filter(turma => {
    const matchBusca = 
      turma.ano.toLowerCase().includes(busca.toLowerCase()) ||
      turma.turma.toLowerCase().includes(busca.toLowerCase()) ||
      turma.segmento.toLowerCase().includes(busca.toLowerCase()) ||
      turma.periodo.toLowerCase().includes(busca.toLowerCase());
    
    const matchSegmento = !filtroSegmento || turma.segmento === filtroSegmento;
    const matchPeriodo = !filtroPeriodo || turma.periodo === filtroPeriodo;
    
    return matchBusca && matchSegmento && matchPeriodo;
  });

  // Obter segmentos e períodos únicos
  const segmentosUnicos = [...new Set(estado.turmas.map(t => t.segmento))];
  const periodosUnicos = [...new Set(estado.turmas.map(t => t.periodo))];

  const handleNovaTurma = () => {
    setTurmaEdicao(null);
    setModalAberto(true);
  };

  const handleEditarTurma = (turma: Turma) => {
    setTurmaEdicao(turma);
    setModalAberto(true);
  };

  const handleFecharModal = () => {
    setModalAberto(false);
    setTurmaEdicao(null);
  };

  const limparFiltros = () => {
    setBusca('');
    setFiltroSegmento('');
    setFiltroPeriodo('');
  };

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Gerenciamento de Turmas
          </h1>
          <p className="text-gray-600 mt-1">
            Gerencie o cadastro de turmas por segmento, ano e período
          </p>
        </div>
        
        <button
          onClick={handleNovaTurma}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-4 sm:mt-0"
        >
          <Plus className="h-5 w-5" />
          <span>Nova Turma</span>
        </button>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="h-5 w-5 text-gray-600" />
          <h3 className="text-lg font-medium text-gray-900">Filtros e Busca</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Busca */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Busca Geral
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar turmas..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          {/* Filtro por Segmento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Segmento
            </label>
            <select
              value={filtroSegmento}
              onChange={(e) => setFiltroSegmento(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Todos os segmentos</option>
              {segmentosUnicos.map((segmento) => (
                <option key={segmento} value={segmento}>
                  {segmento}
                </option>
              ))}
            </select>
          </div>
          
          {/* Filtro por Período */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Período
            </label>
            <select
              value={filtroPeriodo}
              onChange={(e) => setFiltroPeriodo(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Todos os períodos</option>
              {periodosUnicos.map((periodo) => (
                <option key={periodo} value={periodo}>
                  {periodo}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Botão limpar filtros */}
        {(busca || filtroSegmento || filtroPeriodo) && (
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              {turmasFiltradas.length} turma(s) encontrada(s)
            </div>
            <button
              onClick={limparFiltros}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-blue-600">
            {estado.turmas.length}
          </div>
          <div className="text-sm text-gray-600">Total de Turmas</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-green-600">
            {segmentosUnicos.length}
          </div>
          <div className="text-sm text-gray-600">Segmentos</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-purple-600">
            {periodosUnicos.length}
          </div>
          <div className="text-sm text-gray-600">Períodos</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-orange-600">
            {turmasFiltradas.length}
          </div>
          <div className="text-sm text-gray-600">Resultados</div>
        </div>
      </div>

      {/* Lista de turmas */}
      {turmasFiltradas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {turmasFiltradas.map((turma) => (
            <CardTurma
              key={turma.id}
              turma={turma}
              onEditar={() => handleEditarTurma(turma)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {busca || filtroSegmento || filtroPeriodo ? 'Nenhuma turma encontrada' : 'Nenhuma turma cadastrada'}
            </h3>
            <p className="text-gray-600 mb-4">
              {busca || filtroSegmento || filtroPeriodo
                ? 'Tente ajustar os filtros de busca'
                : 'Comece adicionando sua primeira turma'
              }
            </p>
            {!(busca || filtroSegmento || filtroPeriodo) && (
              <button
                onClick={handleNovaTurma}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-5 w-5" />
                <span>Adicionar Turma</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Modal */}
      {modalAberto && (
        <ModalTurma
          turma={turmaEdicao}
          onFechar={handleFecharModal}
        />
      )}
    </div>
  );
}