import React, { useState } from 'react';
import { useSistema } from '../../context/SistemaContext';
import { CardDisciplina } from './CardDisciplina';
import { ModalDisciplina } from './ModalDisciplina';
import { Disciplina } from '../../types';
import { Plus, Search, Palette } from 'lucide-react';

export function PaginaDisciplinas() {
  const { estado } = useSistema();
  const [modalAberto, setModalAberto] = useState(false);
  const [disciplinaEdicao, setDisciplinaEdicao] = useState<Disciplina | null>(null);
  const [busca, setBusca] = useState('');

  // Filtrar disciplinas pela busca
  const disciplinasFiltradas = estado.disciplinas.filter(disciplina =>
    disciplina.nome.toLowerCase().includes(busca.toLowerCase())
  );

  // Calcular estatísticas
  const calcularEstatisticas = () => {
    const estatisticas = disciplinasFiltradas.map(disciplina => {
      const professores = estado.professores.filter(p => p.disciplinaIds.includes(disciplina.id));
      const horarios = estado.horarios.filter(h => h.disciplinaId === disciplina.id);
      const turmasUnicas = new Set(horarios.map(h => h.turmaId));
      
      return {
        disciplina,
        professores: professores.length,
        turmas: turmasUnicas.size,
        horarios: horarios.length
      };
    });
    
    return estatisticas;
  };

  const estatisticasDisciplinas = calcularEstatisticas();
  const totalProfessores = estado.professores.length;
  const disciplinasComProfessores = estado.disciplinas.filter(d => 
    estado.professores.some(p => p.disciplinaIds.includes(d.id))
  ).length;
  const disciplinasSemProfessores = estado.disciplinas.length - disciplinasComProfessores;

  const handleNovaDisciplina = () => {
    setDisciplinaEdicao(null);
    setModalAberto(true);
  };

  const handleEditarDisciplina = (disciplina: Disciplina) => {
    setDisciplinaEdicao(disciplina);
    setModalAberto(true);
  };

  const handleFecharModal = () => {
    setModalAberto(false);
    setDisciplinaEdicao(null);
  };

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Gerenciamento de Disciplinas
          </h1>
          <p className="text-gray-600 mt-1">
            Gerencie o cadastro de disciplinas e suas cores identificação
          </p>
        </div>
        
        <button
          onClick={handleNovaDisciplina}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-4 sm:mt-0"
        >
          <Plus className="h-5 w-5" />
          <span>Nova Disciplina</span>
        </button>
      </div>

      {/* Barra de busca */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar disciplinas por nome..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Palette className="h-4 w-4" />
            <span>Cores organizadas por disciplina</span>
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-blue-600">
            {estado.disciplinas.length}
          </div>
          <div className="text-sm text-gray-600">Total de Disciplinas</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-green-600">
            {disciplinasComProfessores}
          </div>
          <div className="text-sm text-gray-600">Com Professores</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-orange-600">
            {disciplinasSemProfessores}
          </div>
          <div className="text-sm text-gray-600">Sem Professores</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-purple-600">
            {disciplinasFiltradas.length}
          </div>
          <div className="text-sm text-gray-600">Resultados da Busca</div>
        </div>
      </div>

      {/* Lista de disciplinas */}
      {disciplinasFiltradas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {estatisticasDisciplinas.map(({ disciplina, professores, turmas, horarios }) => (
            <CardDisciplina
              key={disciplina.id}
              disciplina={disciplina}
              professores={professores}
              turmas={turmas}
              horarios={horarios}
              onEditar={() => handleEditarDisciplina(disciplina)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center">
            <div className="text-gray-400 mb-4">
              <Palette className="mx-auto h-16 w-16" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {busca ? 'Nenhuma disciplina encontrada' : 'Nenhuma disciplina cadastrada'}
            </h3>
            <p className="text-gray-600 mb-4">
              {busca
                ? 'Tente ajustar os termos de busca'
                : 'Comece adicionando sua primeira disciplina'
              }
            </p>
            {!busca && (
              <button
                onClick={handleNovaDisciplina}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-5 w-5" />
                <span>Adicionar Disciplina</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Paleta de cores em uso */}
      {estado.disciplinas.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Paleta de Cores em Uso
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {estado.disciplinas.map((disciplina) => (
              <div key={disciplina.id} className="flex items-center space-x-3">
                <div
                  className="w-8 h-8 rounded-lg shadow-sm border border-gray-200 flex-shrink-0"
                  style={{ backgroundColor: disciplina.cor }}
                />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-gray-900 truncate">
                    {disciplina.nome}
                  </div>
                  <div className="text-xs text-gray-500 font-mono">
                    {disciplina.cor.toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instruções */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-2">Dicas sobre Disciplinas:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Cada disciplina tem uma cor única para identificação visual na grade</li>
          <li>• Ao remover uma disciplina, todos os professores e horários associados serão removidos</li>
          <li>• Use cores contrastantes para facilitar a identificação na grade de horários</li>
          <li>• É recomendado ter pelo menos um professor para cada disciplina ativa</li>
        </ul>
      </div>

      {/* Modal */}
      {modalAberto && (
        <ModalDisciplina
          disciplina={disciplinaEdicao}
          onFechar={handleFecharModal}
        />
      )}
    </div>
  );
}