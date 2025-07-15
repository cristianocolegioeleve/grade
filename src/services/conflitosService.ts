import { Horario, ConflitoDados, Professor, Turma, Disciplina } from '../types';

export class ConflitosService {
  static detectarConflitos(
    horarios: Horario[],
    professores: Professor[],
    turmas: Turma[],
    disciplinas: Disciplina[]
  ): ConflitoDados[] {
    const conflitos: ConflitoDados[] = [];
    
    // Detectar conflitos de professor (mesmo professor em turmas diferentes no mesmo horário)
    const conflitosProfesor = this.detectarConflitosProfesor(horarios, professores, turmas, disciplinas);
    conflitos.push(...conflitosProfesor);
    
    // Detectar conflitos de turma (mesma turma com múltiplas aulas no mesmo horário)
    const conflitosTurma = this.detectarConflitosTurma(horarios, professores, turmas, disciplinas);
    conflitos.push(...conflitosTurma);
    
    return conflitos;
  }
  
  private static detectarConflitosProfesor(
    horarios: Horario[],
    professores: Professor[],
    turmas: Turma[],
    disciplinas: Disciplina[]
  ): ConflitoDados[] {
    const conflitos: ConflitoDados[] = [];
    const mapaHorarios = new Map<string, Horario[]>();
    
    // Agrupa horários por professor + dia + aula
    horarios.forEach(horario => {
      const chave = `${horario.professorId}-${horario.diaSemana}-${horario.aula}`;
      if (!mapaHorarios.has(chave)) {
        mapaHorarios.set(chave, []);
      }
      mapaHorarios.get(chave)!.push(horario);
    });
    
    // Verifica conflitos (mais de um horário para o mesmo professor no mesmo momento)
    mapaHorarios.forEach((horariosConflito, chave) => {
      if (horariosConflito.length > 1) {
        const professorId = Number(chave.split('-')[0]);
        const professor = professores.find(p => p.id === professorId);
        const disciplinasProf = professor?.disciplinaIds.map(id => 
          disciplinas.find(d => d.id === id)
        ).filter(Boolean) || [];
        
        if (professor && disciplinasProf.length > 0) {
          const turmasConflito = horariosConflito
            .map(h => turmas.find(t => t.id === h.turmaId))
            .filter(Boolean)
            .map(t => `${t!.segmento} ${t!.ano}${t!.turma}`)
            .join(' e ');
            
          conflitos.push({
            id: `professor-${chave}`,
            tipo: 'professor_duplo',
            descricao: `Professor ${professor.nome} tem aulas simultâneas nas turmas: ${turmasConflito}`,
            horarios: horariosConflito
          });
        }
      }
    });
    
    return conflitos;
  }
  
  private static detectarConflitosTurma(
    horarios: Horario[],
    professores: Professor[],
    turmas: Turma[],
    disciplinas: Disciplina[]
  ): ConflitoDados[] {
    const conflitos: ConflitoDados[] = [];
    const mapaHorarios = new Map<string, Horario[]>();
    
    // Agrupa horários por turma + dia + aula
    horarios.forEach(horario => {
      const chave = `${horario.turmaId}-${horario.diaSemana}-${horario.aula}`;
      if (!mapaHorarios.has(chave)) {
        mapaHorarios.set(chave, []);
      }
      mapaHorarios.get(chave)!.push(horario);
    });
    
    // Verifica conflitos (mais de uma aula para a mesma turma no mesmo momento)
    mapaHorarios.forEach((horariosConflito, chave) => {
      if (horariosConflito.length > 1) {
        const turmaId = Number(chave.split('-')[0]);
        const turma = turmas.find(t => t.id === turmaId);
        
        if (turma) {
          const disciplinasConflito = horariosConflito
            .map(h => {
              const disciplina = disciplinas.find(d => d.id === h.disciplinaId);
              const professor = professores.find(p => p.id === h.professorId);
              return disciplina && professor ? `${disciplina.nome} (${professor.nome})` : 'Desconhecido';
            })
            .join(' e ');
            
          conflitos.push({
            id: `turma-${chave}`,
            tipo: 'turma_dupla',
            descricao: `Turma ${turma.segmento} ${turma.ano}${turma.turma} tem aulas simultâneas: ${disciplinasConflito}`,
            horarios: horariosConflito
          });
        }
      }
    });
    
    return conflitos;
  }
  
  static validarHorario(
    novoHorario: Omit<Horario, 'id'>,
    horariosExistentes: Horario[]
  ): { valido: boolean; motivo?: string } {
    // Verifica se já existe horário para a turma no mesmo momento
    const conflitoTurma = horariosExistentes.find(h => 
      h.turmaId === novoHorario.turmaId &&
      h.diaSemana === novoHorario.diaSemana &&
      h.aula === novoHorario.aula
    );
    
    if (conflitoTurma) {
      return {
        valido: false,
        motivo: 'Turma já possui aula neste horário'
      };
    }
    
    // Verifica se professor já tem aula no mesmo momento
    const conflitoProfesor = horariosExistentes.find(h => 
      h.professorId === novoHorario.professorId &&
      h.diaSemana === novoHorario.diaSemana &&
      h.aula === novoHorario.aula
    );
    
    if (conflitoProfesor) {
      return {
        valido: false,
        motivo: 'Professor já possui aula neste horário'
      };
    }
    
    return { valido: true };
  }
}