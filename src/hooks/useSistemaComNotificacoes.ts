import { useSistema } from '../context/SistemaContext';
import { useNotificacao } from '../components/Notificacoes/NotificacaoProvider';
import { Disciplina, Professor, Turma, Horario } from '../types';
import { useCallback } from 'react';

/**
 * Hook personalizado que encapsula as operações do sistema com notificações automáticas
 */
export function useSistemaComNotificacoes() {
  const sistema = useSistema();
  const notificacao = useNotificacao();

  // Disciplinas com notificações
  const adicionarDisciplinaComNotificacao = useCallback(
    (disciplina: Omit<Disciplina, 'id'>) => {
      try {
        sistema.adicionarDisciplina(disciplina);
        notificacao.sucesso(
          'Disciplina adicionada!',
          `${disciplina.nome} foi adicionada com sucesso.`
        );
      } catch (error) {
        notificacao.erro(
          'Erro ao adicionar disciplina',
          'Ocorreu um erro inesperado. Tente novamente.'
        );
      }
    },
    [sistema, notificacao]
  );

  const atualizarDisciplinaComNotificacao = useCallback(
    (disciplina: Disciplina) => {
      try {
        sistema.atualizarDisciplina(disciplina);
        notificacao.sucesso(
          'Disciplina atualizada!',
          `${disciplina.nome} foi atualizada com sucesso.`
        );
      } catch (error) {
        notificacao.erro(
          'Erro ao atualizar disciplina',
          'Ocorreu um erro inesperado. Tente novamente.'
        );
      }
    },
    [sistema, notificacao]
  );

  const removerDisciplinaComNotificacao = useCallback(
    (id: number) => {
      try {
        const disciplina = sistema.obterDisciplinaPorId(id);
        sistema.removerDisciplina(id);
        notificacao.sucesso(
          'Disciplina removida!',
          disciplina ? `${disciplina.nome} foi removida com sucesso.` : undefined
        );
      } catch (error) {
        notificacao.erro(
          'Erro ao remover disciplina',
          'Ocorreu um erro inesperado. Tente novamente.'
        );
      }
    },
    [sistema, notificacao]
  );

  // Professores com notificações
  const adicionarProfessorComNotificacao = useCallback(
    (professor: Omit<Professor, 'id'>) => {
      try {
        sistema.adicionarProfessor(professor);
        notificacao.sucesso(
          'Professor adicionado!',
          `${professor.nome} foi adicionado com sucesso.`
        );
      } catch (error) {
        notificacao.erro(
          'Erro ao adicionar professor',
          'Ocorreu um erro inesperado. Tente novamente.'
        );
      }
    },
    [sistema, notificacao]
  );

  const atualizarProfessorComNotificacao = useCallback(
    (professor: Professor) => {
      try {
        sistema.atualizarProfessor(professor);
        notificacao.sucesso(
          'Professor atualizado!',
          `${professor.nome} foi atualizado com sucesso.`
        );
      } catch (error) {
        notificacao.erro(
          'Erro ao atualizar professor',
          'Ocorreu um erro inesperado. Tente novamente.'
        );
      }
    },
    [sistema, notificacao]
  );

  const removerProfessorComNotificacao = useCallback(
    (id: number) => {
      try {
        const professor = sistema.obterProfessorPorId(id);
        sistema.removerProfessor(id);
        notificacao.sucesso(
          'Professor removido!',
          professor ? `${professor.nome} foi removido com sucesso.` : undefined
        );
      } catch (error) {
        notificacao.erro(
          'Erro ao remover professor',
          'Ocorreu um erro inesperado. Tente novamente.'
        );
      }
    },
    [sistema, notificacao]
  );

  // Turmas com notificações
  const adicionarTurmaComNotificacao = useCallback(
    (turma: Omit<Turma, 'id'>) => {
      try {
        sistema.adicionarTurma(turma);
        notificacao.sucesso(
          'Turma adicionada!',
          `${turma.segmento} ${turma.ano}${turma.turma} foi adicionada com sucesso.`
        );
      } catch (error) {
        notificacao.erro(
          'Erro ao adicionar turma',
          'Ocorreu um erro inesperado. Tente novamente.'
        );
      }
    },
    [sistema, notificacao]
  );

  const atualizarTurmaComNotificacao = useCallback(
    (turma: Turma) => {
      try {
        sistema.atualizarTurma(turma);
        notificacao.sucesso(
          'Turma atualizada!',
          `${turma.segmento} ${turma.ano}${turma.turma} foi atualizada com sucesso.`
        );
      } catch (error) {
        notificacao.erro(
          'Erro ao atualizar turma',
          'Ocorreu um erro inesperado. Tente novamente.'
        );
      }
    },
    [sistema, notificacao]
  );

  const removerTurmaComNotificacao = useCallback(
    (id: number) => {
      try {
        const turma = sistema.obterTurmaPorId(id);
        sistema.removerTurma(id);
        notificacao.sucesso(
          'Turma removida!',
          turma ? `${turma.segmento} ${turma.ano}${turma.turma} foi removida com sucesso.` : undefined
        );
      } catch (error) {
        notificacao.erro(
          'Erro ao remover turma',
          'Ocorreu um erro inesperado. Tente novamente.'
        );
      }
    },
    [sistema, notificacao]
  );

  // Horários com notificações
  const adicionarHorarioComNotificacao = useCallback(
    (horario: Omit<Horario, 'id'>) => {
      try {
        const validacao = sistema.validarHorario(horario);
        
        if (!validacao.valido) {
          notificacao.erro(
            'Não foi possível adicionar o horário',
            validacao.motivo
          );
          return false;
        }
        
        sistema.adicionarHorario(horario);
        notificacao.sucesso(
          'Horário adicionado!',
          'O horário foi adicionado à grade com sucesso.'
        );
        return true;
      } catch (error) {
        notificacao.erro(
          'Erro ao adicionar horário',
          'Ocorreu um erro inesperado. Tente novamente.'
        );
        return false;
      }
    },
    [sistema, notificacao]
  );

  const moverHorarioComNotificacao = useCallback(
    (horarioId: number, novoDia: number, novaAula: number) => {
      try {
        // Verificar se o novo local é válido
        const horarioOriginal = sistema.estado.horarios.find(h => h.id === horarioId);
        if (!horarioOriginal) {
          notificacao.erro('Horário não encontrado');
          return false;
        }

        // Criar horário temporário para validação
        const horarioTemporal = {
          ...horarioOriginal,
          diaSemana: novoDia,
          aula: novaAula
        };

        // Remover o horário original da lista para validação
        const horariosParaValidacao = sistema.estado.horarios.filter(h => h.id !== horarioId);
        const validacao = sistema.validarHorario(horarioTemporal);
        
        if (!validacao.valido) {
          notificacao.aviso(
            'Movimento não permitido',
            validacao.motivo
          );
          return false;
        }
        
        sistema.moverHorario(horarioId, novoDia, novaAula);
        notificacao.info(
          'Horário movido!',
          'O horário foi reposicionado na grade.'
        );
        return true;
      } catch (error) {
        notificacao.erro(
          'Erro ao mover horário',
          'Ocorreu um erro inesperado. Tente novamente.'
        );
        return false;
      }
    },
    [sistema, notificacao]
  );

  const removerHorarioComNotificacao = useCallback(
    (id: number) => {
      try {
        sistema.removerHorario(id);
        notificacao.info(
          'Horário removido!',
          'O horário foi removido da grade.'
        );
      } catch (error) {
        notificacao.erro(
          'Erro ao remover horário',
          'Ocorreu um erro inesperado. Tente novamente.'
        );
      }
    },
    [sistema, notificacao]
  );

  // Notificações para conflitos
  const notificarConflitos = useCallback(() => {
    const conflitos = sistema.estado.conflitos;
    
    if (conflitos.length > 0) {
      notificacao.aviso(
        `${conflitos.length} conflito(s) detectado(s)`,
        'Verifique a grade de horários para resolver os conflitos.'
      );
    }
  }, [sistema.estado.conflitos, notificacao]);

  return {
    // Estado original
    ...sistema,
    
    // Operações com notificações
    adicionarDisciplina: adicionarDisciplinaComNotificacao,
    atualizarDisciplina: atualizarDisciplinaComNotificacao,
    removerDisciplina: removerDisciplinaComNotificacao,
    
    adicionarProfessor: adicionarProfessorComNotificacao,
    atualizarProfessor: atualizarProfessorComNotificacao,
    removerProfessor: removerProfessorComNotificacao,
    
    adicionarTurma: adicionarTurmaComNotificacao,
    atualizarTurma: atualizarTurmaComNotificacao,
    removerTurma: removerTurmaComNotificacao,
    
    adicionarHorario: adicionarHorarioComNotificacao,
    moverHorario: moverHorarioComNotificacao,
    removerHorario: removerHorarioComNotificacao,
    
    // Utilidades
    notificarConflitos,
    notificacao
  };
}