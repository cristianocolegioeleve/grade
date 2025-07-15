import React, { useState, useEffect } from 'react';
import { useSistema } from '../../context/SistemaContext';
import { Turma, SEGMENTOS, ANOS_EF1, ANOS_EF2, ANOS_EM, TURMAS_OPCOES, PERIODOS } from '../../types';
import { X, Save, GraduationCap } from 'lucide-react';

interface ModalTurmaProps {
  turma: Turma | null;
  onFechar: () => void;
}

export function ModalTurma({ turma, onFechar }: ModalTurmaProps) {
  const { estado, adicionarTurma, atualizarTurma } = useSistema();
  
  const [segmento, setSegmento] = useState('');
  const [ano, setAno] = useState('');
  const [turmaLetra, setTurmaLetra] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [erro, setErro] = useState('');

  const modoEdicao = !!turma;

  // Carregar dados da turma em edição
  useEffect(() => {
    if (turma) {
      setSegmento(turma.segmento);
      setAno(turma.ano);
      setTurmaLetra(turma.turma);
      setPeriodo(turma.periodo);
    }
  }, [turma]);

  // Obter anos disponíveis baseado no segmento
  const getAnosDisponiveis = (): string[] => {
    switch (segmento) {
      case 'Ensino Fundamental I':
        return ANOS_EF1;
      case 'Ensino Fundamental II':
        return ANOS_EF2;
      case 'Ensino Médio':
        return ANOS_EM;
      default:
        return [];
    }
  };

  const handleSegmentoChange = (novoSegmento: string) => {
    setSegmento(novoSegmento);
    setAno(''); // Reset ano quando segmento muda
    setErro('');
  };

  const verificarDuplicata = (segmento: string, ano: string, turmaLetra: string, periodo: string): boolean => {
    return estado.turmas.some(t => 
      t.id !== turma?.id && // Ignorar a própria turma em edição
      t.segmento === segmento &&
      t.ano === ano &&
      t.turma === turmaLetra &&
      t.periodo === periodo
    );
  };

  const handleSalvar = () => {
    setErro('');
    
    // Validações
    if (!segmento) {
      setErro('Segmento é obrigatório');
      return;
    }
    
    if (!ano) {
      setErro('Ano é obrigatório');
      return;
    }
    
    if (!turmaLetra) {
      setErro('Turma é obrigatória');
      return;
    }
    
    if (!periodo) {
      setErro('Período é obrigatório');
      return;
    }

    // Verificar duplicata
    if (verificarDuplicata(segmento, ano, turmaLetra, periodo)) {
      setErro('Já existe uma turma com essa combinação de segmento, ano, turma e período');
      return;
    }

    const dadosTurma = {
      nome: `${ano}${turmaLetra}`,
      segmento,
      ano,
      turma: turmaLetra,
      periodo
    };

    if (modoEdicao && turma) {
      atualizarTurma({
        ...turma,
        ...dadosTurma
      });
    } else {
      adicionarTurma(dadosTurma);
    }

    onFechar();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <GraduationCap className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {modoEdicao ? 'Editar Turma' : 'Nova Turma'}
              </h3>
              <p className="text-sm text-gray-600">
                {modoEdicao ? 'Atualize as informações da turma' : 'Adicione uma nova turma ao sistema'}
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
          {/* Formulário */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Segmento */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Segmento de Ensino *
              </label>
              <select
                value={segmento}
                onChange={(e) => handleSegmentoChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecione o segmento</option>
                {SEGMENTOS.map((seg) => (
                  <option key={seg} value={seg}>
                    {seg}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Ano */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ano *
              </label>
              <select
                value={ano}
                onChange={(e) => setAno(e.target.value)}
                disabled={!segmento}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="">Selecione o ano</option>
                {getAnosDisponiveis().map((anoOpcao) => (
                  <option key={anoOpcao} value={anoOpcao}>
                    {anoOpcao} Ano
                  </option>
                ))}
              </select>
              {!segmento && (
                <p className="text-xs text-gray-500 mt-1">
                  Selecione um segmento primeiro
                </p>
              )}
            </div>
            
            {/* Turma */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Turma *
              </label>
              <select
                value={turmaLetra}
                onChange={(e) => setTurmaLetra(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecione a turma</option>
                {TURMAS_OPCOES.map((turmaOpcao) => (
                  <option key={turmaOpcao} value={turmaOpcao}>
                    Turma {turmaOpcao}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Período */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Período *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {PERIODOS.map((periodoOpcao) => (
                  <label
                    key={periodoOpcao}
                    className={`
                      flex items-center justify-center p-3 border-2 rounded-lg cursor-pointer transition-all duration-200
                      ${
                        periodo === periodoOpcao
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400 text-gray-700'
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="periodo"
                      value={periodoOpcao}
                      checked={periodo === periodoOpcao}
                      onChange={(e) => setPeriodo(e.target.value)}
                      className="sr-only"
                    />
                    <span className="text-sm font-medium">{periodoOpcao}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Preview da turma */}
          {segmento && ano && turmaLetra && periodo && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">Preview da Turma</h4>
              <div className="space-y-1 text-sm text-blue-800">
                <div><strong>Identificação:</strong> {segmento} - {ano}{turmaLetra}</div>
                <div><strong>Período:</strong> {periodo}</div>
                <div><strong>Descrição completa:</strong> {segmento}, {ano} Ano, Turma {turmaLetra}, Período {periodo}</div>
              </div>
            </div>
          )}

          {/* Mensagem de erro */}
          {erro && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-700">{erro}</p>
            </div>
          )}

          {/* Informações sobre duplicatas */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Informações Importantes</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Não é possível criar turmas com a mesma combinação de segmento, ano, turma e período</li>
              <li>• Você pode ter múltiplas turmas do mesmo ano em períodos diferentes</li>
              <li>• Exemplo: 1ºA Manhã e 1ºA Tarde são permitidas</li>
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
            <span>{modoEdicao ? 'Atualizar' : 'Adicionar'} Turma</span>
          </button>
        </div>
      </div>
    </div>
  );
}