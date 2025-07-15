export interface Disciplina {
  id: number;
  nome: string;
  cor: string;
}

export interface Professor {
  id: number;
  nome: string;
  disciplinaIds: number[];
  disponibilidade: DisponibilidadeProfessor[];
}

export interface DisponibilidadeProfessor {
  diaSemana: number; // 1 = Segunda, 2 = Terça, ..., 5 = Sexta
  aula: number; // 1 a 6
  disponivel: boolean;
}

export interface Turma {
  id: number;
  nome: string;
  segmento: string;
  ano: string;
  turma: string;
  periodo: string;
}

export interface Horario {
  id: number;
  turmaId: number;
  professorId: number;
  disciplinaId: number;
  diaSemana: number; // 1 = Segunda, 2 = Terça, ..., 5 = Sexta
  aula: number;
}

export interface ConflitoDados {
  id: string;
  tipo: 'professor_duplo' | 'turma_dupla';
  descricao: string;
  horarios: Horario[];
}

export interface EstadoSistema {
  disciplinas: Disciplina[];
  professores: Professor[];
  turmas: Turma[];
  horarios: Horario[];
  conflitos: ConflitoDados[];
}

export type DiaSemana = 1 | 2 | 3 | 4 | 5;
export type NumeroAula = 1 | 2 | 3 | 4 | 5 | 6;

export const DIAS_SEMANA = {
  1: 'Segunda',
  2: 'Terça',
  3: 'Quarta',
  4: 'Quinta',
  5: 'Sexta'
} as const;

export const PERIODOS = [
  'Manhã',
  'Tarde',
  'Noite',
  'Integral'
] as const;

export const SEGMENTOS = [
  'Ensino Fundamental I',
  'Ensino Fundamental II',
  'Ensino Médio'
] as const;

export const ANOS_EF1 = ['1º', '2º', '3º', '4º', '5º'];
export const ANOS_EF2 = ['6º', '7º', '8º', '9º'];
export const ANOS_EM = ['1º', '2º', '3º'];

export const TURMAS_OPCOES = ['A', 'B', 'C', 'D', 'E', 'F'];