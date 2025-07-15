import React, { useState } from 'react';
import { useSistema } from '../../context/SistemaContext';
import { DIAS_SEMANA } from '../../types';
import { X, AlertTriangle, CheckCircle } from 'lucide-react';

interface ModalAdicionarHorarioProps {
  turmaId: number;
  diaSemana: number;
  aula: number;
  onFechar: () => void;
}

export function ModalAdicionarHorario({
  turmaId,
  diaSemana,
  aula,
  onFechar
}: ModalAdicionarHorarioProps) {
  const {
    estado,
    adicionarHorario,
    validarHorario,
    obterTurmaPorId
  } = useSistema();
  
  const [professorSelecionado, setProfessorSelecionado] = useState<number | null>(null);
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState<number | null>(null);
  const [mensagemValidacao, setMensagemValidacao] = useState<{
    tipo: 'erro' | 'sucesso';
    texto: string;
  } | null>(null);

  const turma = obterTurmaPorId(turmaId);
  
  // Filtrar professores pela disciplina selecionada e disponibilidade
  const professoresFiltrados = disciplinaSelecionada
    ? estado.professores.filter(p => {
        // Verificar se o professor ensina a disciplina
        if (!p.disciplinaIds.includes(disciplinaSelecionada)) return false;
        
        // Verificar disponibilidade no horário
        const disponivel = p.disponibilidade.some(
          d => d.diaSemana === diaSemana && d.aula === aula && d.disponivel
        );
        if (!disponivel) return false;
        
        // Verificar se professor já tem aula neste horário
        const jaTemAula = estado.horarios.some(
          h => h.professorId === p.id && h.diaSemana === diaSemana && h.aula === aula
        );
        
        return !jaTemAula;
      })
    : [];

  // Verificar disponibilidade do professor
  const professorDisponivel = (professorId: number | null): boolean => {
    if (!professorId) return false;
    const professor = estado.professores.find(p => p.id === professorId);
    if (!professor) return false;
    
    return professor.disponibilidade.some(
      d => d.diaSemana === diaSemana && d.aula === aula && d.disponivel
    );
  };

  const handleDisciplinaChange = (disciplinaId: string) => {
    setDisciplinaSelecionada(disciplinaId ? Number(disciplinaId) : null);
    setProfessorSelecionado(null); // Reset professor quando disciplina muda
    setMensagemValidacao(null);
  };

  const handleProfessorChange = (professorId: string) => {
    setProfessorSelecionado(professorId ? Number(professorId) : null);
    setMensagemValidacao(null);
    
    // Validar disponibilidade
    if (professorId && !professorDisponivel(Number(professorId))) {
      setMensagemValidacao({
        tipo: 'erro',
        texto: 'Professor não está disponível neste horário'
      });
    }
  };

  const handleSalvar = () => {
    if (!professorSelecionado || !disciplinaSelecionada) {
      setMensagemValidacao({
        tipo: 'erro',
        texto: 'Selecione uma disciplina e um professor'
      });
      return;
    }

    // Verificar disponibilidade do professor
    if (!professorDisponivel(professorSelecionado)) {
      setMensagemValidacao({
        tipo: 'erro',
        texto: 'Professor não está disponível neste horário'
      });
      return;
    }

    // Validar se não há conflitos
    const novoHorario = {
      turmaId,
      professorId: professorSelecionado,
      disciplinaId: disciplinaSelecionada,
      diaSemana,
      aula
    };

    const validacao = validarHorario(novoHorario);
    
    if (!validacao.valido) {
      setMensagemValidacao({
        tipo: 'erro',
        texto: validacao.motivo || 'Erro de validação'
      });
      return;
    }

    // Adicionar horário
    adicionarHorario(novoHorario);
    
    setMensagemValidacao({
      tipo: 'sucesso',
      texto: 'Horário adicionado com sucesso!'
    });
    
    // Fechar modal após um tempo
    setTimeout(() => {
      onFechar();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Adicionar Horário
          </h3>
          <button
            onClick={onFechar}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-6 space-y-4">
          {/* Informações do slot */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Detalhes do Horário</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>Turma: {turma?.segmento} {turma?.ano}{turma?.turma}</div>
              <div>Dia: {DIAS_SEMANA[diaSemana as keyof typeof DIAS_SEMANA]}</div>
              <div>Aula: {aula}</div>
            </div>
          </div>

          {/* Seleção de disciplina */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Disciplina
            </label>
            <select
              value={disciplinaSelecionada}
              onChange={(e) => handleDisciplinaChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Selecione uma disciplina</option>
              {estado.disciplinas.map((disciplina) => (
                <option key={disciplina.id} value={disciplina.id.toString()}>
                  {disciplina.nome}
                </option>
              ))}
            </select>
          </div>

          {/* Seleção de professor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Professor
            </label>
            <select
              value={professorSelecionado}
              onChange={(e) => handleProfessorChange(e.target.value)}
              disabled={!disciplinaSelecionada}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              <option value="">Selecione um professor</option>
              {professoresFiltrados.map((professor) => {
                const disponivel = professorDisponivel(professor.id);
                return (
                  <option
                    key={professor.id}
                    value={professor.id.toString()}
                    disabled={!disponivel}
                  >
                    {professor.nome} {!disponivel ? '(Indisponível)' : ''}
                  </option>
                );
              })}
            </select>
            
            {disciplinaSelecionada && professoresFiltrados.length === 0 && (
              <p className="text-sm text-gray-500 mt-1">
                Nenhum professor cadastrado para esta disciplina
              </p>
            )}
          </div>

          {/* Mensagem de validação */}
          {mensagemValidacao && (
            <div className={`
              flex items-center space-x-2 p-3 rounded-lg
              ${
                mensagemValidacao.tipo === 'erro'
                  ? 'bg-red-50 text-red-700 border border-red-200'
                  : 'bg-green-50 text-green-700 border border-green-200'
              }
            `}>
              {mensagemValidacao.tipo === 'erro' ? (
                <AlertTriangle className="h-5 w-5 flex-shrink-0" />
              ) : (
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
              )}
              <span className="text-sm">{mensagemValidacao.texto}</span>
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
            disabled={!professorSelecionado || !disciplinaSelecionada || mensagemValidacao?.tipo === 'sucesso'}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {mensagemValidacao?.tipo === 'sucesso' ? 'Adicionado!' : 'Adicionar'}
          </button>
        </div>
      </div>
    </div>
  );
}