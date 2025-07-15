import React, { useState, useEffect } from 'react';
import { useSistema } from '../../context/SistemaContext';
import { Professor, DisponibilidadeProfessor, DIAS_SEMANA } from '../../types';
import { X, Save, User, CheckCircle, XCircle } from 'lucide-react';

interface ModalProfessorProps {
  professor: Professor | null;
  onFechar: () => void;
}

// Gerar disponibilidade padrão (todos os horários disponíveis)
const gerarDisponibilidadePadrao = (): DisponibilidadeProfessor[] => {
  const disponibilidade: DisponibilidadeProfessor[] = [];
  for (let dia = 1; dia <= 5; dia++) {
    for (let aula = 1; aula <= 6; aula++) {
      disponibilidade.push({
        diaSemana: dia,
        aula,
        disponivel: true
      });
    }
  }
  return disponibilidade;
};

export function ModalProfessor({ professor, onFechar }: ModalProfessorProps) {
  const { estado, adicionarProfessor, atualizarProfessor } = useSistema();
  
  const [nome, setNome] = useState('');
  const [disciplinaIds, setDisciplinaIds] = useState<number[]>([]);
  const [disponibilidade, setDisponibilidade] = useState<DisponibilidadeProfessor[]>(
    gerarDisponibilidadePadrao()
  );
  const [erro, setErro] = useState('');

  const modoEdicao = !!professor;

  // Carregar dados do professor em edição
  useEffect(() => {
    if (professor) {
      setNome(professor.nome);
      setDisciplinaIds(professor.disciplinaIds || []);
      setDisponibilidade(professor.disponibilidade);
    }
  }, [professor]);

  const toggleDisponibilidade = (dia: number, aula: number) => {
    setDisponibilidade(prev => 
      prev.map(d => 
        d.diaSemana === dia && d.aula === aula
          ? { ...d, disponivel: !d.disponivel }
          : d
      )
    );
  };

  const toggleDiaCompleto = (dia: number) => {
    const aulasDoDia = disponibilidade.filter(d => d.diaSemana === dia);
    const todasDisponiveis = aulasDoDia.every(d => d.disponivel);
    
    setDisponibilidade(prev => 
      prev.map(d => 
        d.diaSemana === dia
          ? { ...d, disponivel: !todasDisponiveis }
          : d
      )
    );
  };

  const marcarTodosDisponiveis = () => {
    setDisponibilidade(prev => 
      prev.map(d => ({ ...d, disponivel: true }))
    );
  };

  const marcarTodosIndisponiveis = () => {
    setDisponibilidade(prev => 
      prev.map(d => ({ ...d, disponivel: false }))
    );
  };

  const handleSalvar = () => {
    setErro('');
    
    // Validações
    if (!nome.trim()) {
      setErro('Nome é obrigatório');
      return;
    }
    
    if (disciplinaIds.length === 0) {
      setErro('Pelo menos uma disciplina é obrigatória');
      return;
    }

    // Verificar se há pelo menos uma disponibilidade
    const temDisponibilidade = disponibilidade.some(d => d.disponivel);
    if (!temDisponibilidade) {
      setErro('Professor deve ter pelo menos um horário disponível');
      return;
    }

    const dadosProfessor = {
      nome: nome.trim(),
      disciplinaIds,
      disponibilidade
    };

    if (modoEdicao && professor) {
      atualizarProfessor({
        ...professor,
        ...dadosProfessor
      });
    } else {
      adicionarProfessor(dadosProfessor);
    }

    onFechar();
  };

  const disciplinasSelecionadas = estado.disciplinas.filter(d => disciplinaIds.includes(d.id));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <User className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {modoEdicao ? 'Editar Professor' : 'Novo Professor'}
              </h3>
              <p className="text-sm text-gray-600">
                {modoEdicao ? 'Atualize as informações do professor' : 'Adicione um novo professor ao sistema'}
              </p>
            </div>
          </div>
          <button
            onClick={onFechar}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-6 space-y-6">
          {/* Informações básicas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome do Professor *
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o nome completo"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Disciplinas *
              </label>
              <div className="space-y-2 max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-3">
                {estado.disciplinas.map((disciplina) => (
                  <label key={disciplina.id} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={disciplinaIds.includes(disciplina.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setDisciplinaIds([...disciplinaIds, disciplina.id]);
                        } else {
                          setDisciplinaIds(disciplinaIds.filter(id => id !== disciplina.id));
                        }
                      }}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: disciplina.cor }}
                    />
                    <span className="text-sm text-gray-900">{disciplina.nome}</span>
                  </label>
                ))}
              </div>
              
              {disciplinasSelecionadas.length > 0 && (
                <div className="mt-2">
                  <span className="text-sm text-gray-600">
                    {disciplinasSelecionadas.length} disciplina(s) selecionada(s)
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Grade de disponibilidade */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-medium text-gray-900">
                Disponibilidade Semanal
              </h4>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={marcarTodosDisponiveis}
                  className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                >
                  Marcar Todos
                </button>
                <button
                  onClick={marcarTodosIndisponiveis}
                  className="text-sm px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                >
                  Desmarcar Todos
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left py-2 px-3 text-sm font-medium text-gray-700">Dia</th>
                      {[1, 2, 3, 4, 5, 6].map(aula => (
                        <th key={aula} className="text-center py-2 px-2 text-sm font-medium text-gray-700">
                          Aula {aula}
                        </th>
                      ))}
                      <th className="text-center py-2 px-3 text-sm font-medium text-gray-700">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5].map(dia => {
                      const aulasDoDia = disponibilidade.filter(d => d.diaSemana === dia);
                      const todasDisponiveis = aulasDoDia.every(d => d.disponivel);
                      
                      return (
                        <tr key={dia} className="border-t border-gray-200">
                          <td className="py-2 px-3 text-sm font-medium text-gray-900">
                            {DIAS_SEMANA[dia as keyof typeof DIAS_SEMANA]}
                          </td>
                          {[1, 2, 3, 4, 5, 6].map(aula => {
                            const disp = disponibilidade.find(
                              d => d.diaSemana === dia && d.aula === aula
                            );
                            const disponivel = disp?.disponivel ?? false;
                            
                            return (
                              <td key={aula} className="py-2 px-2 text-center">
                                <button
                                  onClick={() => toggleDisponibilidade(dia, aula)}
                                  className={`
                                    w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200
                                    ${
                                      disponivel
                                        ? 'bg-green-500 text-white hover:bg-green-600'
                                        : 'bg-red-500 text-white hover:bg-red-600'
                                    }
                                  `}
                                  title={`${DIAS_SEMANA[dia as keyof typeof DIAS_SEMANA]} - Aula ${aula}: ${disponivel ? 'Disponível' : 'Indisponível'}`}
                                >
                                  {disponivel ? (
                                    <CheckCircle className="h-4 w-4" />
                                  ) : (
                                    <XCircle className="h-4 w-4" />
                                  )}
                                </button>
                              </td>
                            );
                          })}
                          <td className="py-2 px-3 text-center">
                            <button
                              onClick={() => toggleDiaCompleto(dia)}
                              className={`
                                text-xs px-2 py-1 rounded transition-colors
                                ${
                                  todasDisponiveis
                                    ? 'bg-red-100 text-red-700 hover:bg-red-200'
                                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                                }
                              `}
                            >
                              {todasDisponiveis ? 'Desmarcar' : 'Marcar'} Dia
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 text-sm text-gray-600">
                <p>• Clique nos quadrados para marcar/desmarcar disponibilidade</p>
                <p>• Verde = Disponível, Vermelho = Indisponível</p>
                <p>• Use os botões "à direita para marcar/desmarcar um dia inteiro</p>
              </div>
            </div>
          </div>

          {/* Mensagem de erro */}
          {erro && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-700">{erro}</p>
            </div>
          )}
        </div>

        {/* Rodapé */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={onFechar}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSalvar}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Save className="h-4 w-4" />
            <span>{modoEdicao ? 'Atualizar' : 'Adicionar'} Professor</span>
          </button>
        </div>
      </div>
    </div>
  );
}