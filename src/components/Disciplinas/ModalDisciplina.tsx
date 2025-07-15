import React, { useState, useEffect } from 'react';
import { useSistemaComNotificacoes } from '../../hooks/useSistemaComNotificacoes';
import { Disciplina } from '../../types';
import { CORES_DISCIPLINAS } from '../../data/mockData';
import { X, Save, BookOpen, Palette, RefreshCw } from 'lucide-react';

interface ModalDisciplinaProps {
  disciplina: Disciplina | null;
  onFechar: () => void;
}

const CORES_PREDEFINIDAS = [
  '#3B82F6', // Azul
  '#EF4444', // Vermelho
  '#10B981', // Verde
  '#F59E0B', // Amarelo
  '#8B5CF6', // Roxo
  '#06B6D4', // Ciano
  '#F97316', // Laranja
  '#84CC16', // Lima
  '#EC4899', // Rosa
  '#6B7280', // Cinza
  '#14B8A6', // Teal
  '#F43F5E', // Rosa Escuro
  '#0EA5E9', // Azul Claro
  '#DC2626', // Vermelho Escuro
  '#059669', // Verde Escuro
  '#D97706', // Amarelo Escuro
  '#7C3AED', // Roxo Escuro
  '#0891B2', // Ciano Escuro
  '#EA580C', // Laranja Escuro
  '#65A30D', // Lima Escuro
  '#DB2777', // Rosa Médio
  '#374151'  // Cinza Escuro
];

export function ModalDisciplina({ disciplina, onFechar }: ModalDisciplinaProps) {
  const { estado, adicionarDisciplina, atualizarDisciplina } = useSistemaComNotificacoes();
  
  const [nome, setNome] = useState('');
  const [corSelecionada, setCorSelecionada] = useState('#3B82F6');
  const [corCustomizada, setCorCustomizada] = useState('#3B82F6');
  const [usandoCorCustomizada, setUsandoCorCustomizada] = useState(false);
  const [erro, setErro] = useState('');

  const modoEdicao = !!disciplina;

  // Carregar dados da disciplina em edição
  useEffect(() => {
    if (disciplina) {
      setNome(disciplina.nome);
      setCorSelecionada(disciplina.cor);
      setCorCustomizada(disciplina.cor);
      
      // Verificar se a cor é customizada (não está nas predefinidas)
      const corEhPredefinida = CORES_PREDEFINIDAS.includes(disciplina.cor);
      setUsandoCorCustomizada(!corEhPredefinida);
    }
  }, [disciplina]);

  // Obter cores em uso por outras disciplinas
  const coresEmUso = estado.disciplinas
    .filter(d => d.id !== disciplina?.id)
    .map(d => d.cor);

  // Gerar cor aleatória não utilizada
  const gerarCorAleatoria = () => {
    const coresDisponiveis = CORES_PREDEFINIDAS.filter(cor => !coresEmUso.includes(cor));
    
    if (coresDisponiveis.length > 0) {
      const corAleatoria = coresDisponiveis[Math.floor(Math.random() * coresDisponiveis.length)];
      setCorSelecionada(corAleatoria);
      setUsandoCorCustomizada(false);
    } else {
      // Se todas as cores estão em uso, gerar uma cor hexadecimal aleatória
      const corRandom = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
      setCorCustomizada(corRandom);
      setCorSelecionada(corRandom);
      setUsandoCorCustomizada(true);
    }
  };

  const handleSelecionarCor = (cor: string) => {
    setCorSelecionada(cor);
    setUsandoCorCustomizada(false);
    setErro('');
  };

  const handleCorCustomizada = (cor: string) => {
    setCorCustomizada(cor);
    setCorSelecionada(cor);
    setUsandoCorCustomizada(true);
    setErro('');
  };

  const verificarNomeDuplicado = (nomeVerificar: string): boolean => {
    return estado.disciplinas.some(d => 
      d.id !== disciplina?.id && // Ignorar a própria disciplina em edição
      d.nome.toLowerCase().trim() === nomeVerificar.toLowerCase().trim()
    );
  };

  const handleSalvar = () => {
    setErro('');
    
    // Validações
    if (!nome.trim()) {
      setErro('Nome da disciplina é obrigatório');
      return;
    }
    
    if (nome.trim().length < 2) {
      setErro('Nome da disciplina deve ter pelo menos 2 caracteres');
      return;
    }
    
    if (verificarNomeDuplicado(nome)) {
      setErro('Já existe uma disciplina com este nome');
      return;
    }

    // Validar cor hexadecimal se for customizada
    if (usandoCorCustomizada) {
      const regexCor = /^#[0-9A-F]{6}$/i;
      if (!regexCor.test(corSelecionada)) {
        setErro('Cor inválida. Use o formato hexadecimal (#RRGGBB)');
        return;
      }
    }

    const dadosDisciplina = {
      nome: nome.trim(),
      cor: corSelecionada
    };

    if (modoEdicao && disciplina) {
      atualizarDisciplina({
        ...disciplina,
        ...dadosDisciplina
      });
    } else {
      adicionarDisciplina(dadosDisciplina);
    }

    onFechar();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {modoEdicao ? 'Editar Disciplina' : 'Nova Disciplina'}
              </h3>
              <p className="text-sm text-gray-600">
                {modoEdicao ? 'Atualize as informações da disciplina' : 'Adicione uma nova disciplina ao sistema'}
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
          {/* Nome da disciplina */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome da Disciplina *
            </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Matemática, Português, História..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Preview da disciplina */}
          {nome && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-3">Preview da Disciplina</h4>
              <div className="flex items-center space-x-3">
                <div
                  className="w-8 h-8 rounded-lg shadow-sm border border-gray-200"
                  style={{ backgroundColor: corSelecionada }}
                />
                <div>
                  <div className="font-medium text-gray-900">{nome}</div>
                  <div className="text-sm text-gray-600 font-mono">{corSelecionada.toUpperCase()}</div>
                </div>
              </div>
            </div>
          )}

          {/* Seletor de cor */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-medium text-gray-900">Cor da Disciplina</h4>
              <button
                onClick={gerarCorAleatoria}
                className="flex items-center space-x-2 text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Cor Aleatória</span>
              </button>
            </div>
            
            {/* Cores predefinidas */}
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-3">Cores Predefinidas</h5>
              <div className="grid grid-cols-8 gap-3">
                {CORES_PREDEFINIDAS.map((cor) => {
                  const corEmUso = coresEmUso.includes(cor);
                  const corSelecionadaAtual = corSelecionada === cor && !usandoCorCustomizada;
                  
                  return (
                    <button
                      key={cor}
                      onClick={() => !corEmUso && handleSelecionarCor(cor)}
                      disabled={corEmUso}
                      className={`
                        relative w-12 h-12 rounded-lg shadow-sm border-2 transition-all duration-200
                        ${
                          corSelecionadaAtual
                            ? 'border-gray-900 scale-110'
                            : 'border-gray-200 hover:border-gray-400'
                        }
                        ${
                          corEmUso
                            ? 'opacity-40 cursor-not-allowed'
                            : 'cursor-pointer hover:scale-105'
                        }
                      `}
                      style={{ backgroundColor: cor }}
                      title={corEmUso ? `Cor em uso` : `Selecionar cor ${cor}`}
                    >
                      {corSelecionadaAtual && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full shadow-sm" />
                        </div>
                      )}
                      {corEmUso && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <X className="w-4 h-4 text-white drop-shadow" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
              
              {coresEmUso.length > 0 && (
                <p className="text-xs text-gray-500 mt-2">
                  • Cores com X já estão sendo usadas por outras disciplinas
                </p>
              )}
            </div>
            
            {/* Cor customizada */}
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-3 flex items-center space-x-2">
                <Palette className="h-4 w-4" />
                <span>Cor Customizada</span>
              </h5>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    value={corCustomizada}
                    onChange={(e) => handleCorCustomizada(e.target.value)}
                    className="w-12 h-12 rounded-lg border-2 border-gray-200 cursor-pointer"
                  />
                  <div>
                    <input
                      type="text"
                      value={corCustomizada}
                      onChange={(e) => handleCorCustomizada(e.target.value)}
                      placeholder="#RRGGBB"
                      className="w-24 px-2 py-1 text-sm font-mono border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <div className="text-xs text-gray-500 mt-1">
                      Formato: #RRGGBB
                    </div>
                  </div>
                </div>
                
                {usandoCorCustomizada && (
                  <div className="flex items-center space-x-2 text-sm text-blue-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span>Cor customizada selecionada</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mensagem de erro */}
          {erro && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-700">{erro}</p>
            </div>
          )}

          {/* Informações importantes */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">Dicas Importantes</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• A cor é usada para identificar a disciplina na grade de horários</li>
              <li>• Escolha cores contrastantes para melhor visualização</li>
              <li>• Cores já em uso por outras disciplinas não podem ser selecionadas</li>
              <li>• Você pode usar o seletor de cor ou digitar o código hexadecimal</li>
            </ul>
          </div>
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
            <span>{modoEdicao ? 'Atualizar' : 'Adicionar'} Disciplina</span>
          </button>
        </div>
      </div>
    </div>
  );
}