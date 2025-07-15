// Dados reais do sistema escolar
import { Disciplina, Professor, Turma, Horario } from '../types';

// Cores para disciplinas
export const CORES_DISCIPLINAS = [
  "#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", 
  "#F97316", "#06B6D4", "#84CC16", "#EC4899", "#6366F1",
  "#14B8A6", "#F59E0B", "#EF4444", "#8B5CF6", "#F97316",
  "#06B6D4", "#84CC16", "#EC4899", "#6366F1", "#14B8A6"
];

// Disciplinas extraídas dos dados reais
export const disciplinas: Disciplina[] = [
  { id: 1, nome: 'Arte', cor: '#3B82F6' },
  { id: 2, nome: 'Biologia', cor: '#10B981' },
  { id: 3, nome: 'Ciências', cor: '#F59E0B' },
  { id: 4, nome: 'ETEC', cor: '#EF4444' },
  { id: 5, nome: 'Educação Cristã', cor: '#8B5CF6' },
  { id: 6, nome: 'Educação física', cor: '#F97316' },
  { id: 7, nome: 'Estudos Sociais', cor: '#06B6D4' },
  { id: 8, nome: 'Filosofia', cor: '#84CC16' },
  { id: 9, nome: 'Física', cor: '#EC4899' },
  { id: 10, nome: 'Inglês', cor: '#6366F1' },
  { id: 11, nome: 'Interpretação', cor: '#14B8A6' },
  { id: 12, nome: 'Matemática', cor: '#F59E0B' },
  { id: 13, nome: 'Matemática 1', cor: '#EF4444' },
  { id: 14, nome: 'Português', cor: '#8B5CF6' },
  { id: 15, nome: 'Química', cor: '#F97316' },
  { id: 16, nome: 'Redação', cor: '#06B6D4' },
];

// Professores dos dados reais
export const professores: Professor[] = [
  {
    id: 1,
    nome: 'Ricardo',
    disciplinaIds: [14],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 2,
    nome: 'Raphael',
    disciplinaIds: [13],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 3,
    nome: 'Thiago',
    disciplinaIds: [15],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 4,
    nome: 'Samuel',
    disciplinaIds: [9],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 5,
    nome: 'Aline',
    disciplinaIds: [10],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 6,
    nome: 'Caio',
    disciplinaIds: [5],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 7,
    nome: 'Alexandre',
    disciplinaIds: [12],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 8,
    nome: 'Breno',
    disciplinaIds: [7, 8],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 9,
    nome: 'Edmara',
    disciplinaIds: [16, 11],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 10,
    nome: 'Fábio',
    disciplinaIds: [2],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 11,
    nome: 'Amadeu',
    disciplinaIds: [6],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 12,
    nome: 'Saulo',
    disciplinaIds: [1],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 13,
    nome: 'Nicolas',
    disciplinaIds: [4],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 14,
    nome: 'Murilo',
    disciplinaIds: [5],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 15,
    nome: 'Graziela',
    disciplinaIds: [12],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 16,
    nome: 'Luciana',
    disciplinaIds: [14],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 17,
    nome: 'Luciana Cavalcante',
    disciplinaIds: [3],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 18,
    nome: 'Felipe',
    disciplinaIds: [7],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 19,
    nome: 'Vitor',
    disciplinaIds: [6],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 20,
    nome: 'Michelle',
    disciplinaIds: [14],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 21,
    nome: 'Alessandra',
    disciplinaIds: [13],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 22,
    nome: 'Isabela',
    disciplinaIds: [5],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
  {
    id: 23,
    nome: 'Miqueias',
    disciplinaIds: [4],
    disponibilidade: [
      { diaSemana: 1, aula: 1, disponivel: true },
      { diaSemana: 1, aula: 2, disponivel: true },
      { diaSemana: 1, aula: 3, disponivel: true },
      { diaSemana: 1, aula: 4, disponivel: true },
      { diaSemana: 1, aula: 5, disponivel: true },
      { diaSemana: 1, aula: 6, disponivel: true },
      { diaSemana: 2, aula: 1, disponivel: true },
      { diaSemana: 2, aula: 2, disponivel: true },
      { diaSemana: 2, aula: 3, disponivel: true },
      { diaSemana: 2, aula: 4, disponivel: true },
      { diaSemana: 2, aula: 5, disponivel: true },
      { diaSemana: 2, aula: 6, disponivel: true },
      { diaSemana: 3, aula: 1, disponivel: true },
      { diaSemana: 3, aula: 2, disponivel: true },
      { diaSemana: 3, aula: 3, disponivel: true },
      { diaSemana: 3, aula: 4, disponivel: true },
      { diaSemana: 3, aula: 5, disponivel: true },
      { diaSemana: 3, aula: 6, disponivel: true },
      { diaSemana: 4, aula: 1, disponivel: true },
      { diaSemana: 4, aula: 2, disponivel: true },
      { diaSemana: 4, aula: 3, disponivel: true },
      { diaSemana: 4, aula: 4, disponivel: true },
      { diaSemana: 4, aula: 5, disponivel: true },
      { diaSemana: 4, aula: 6, disponivel: true },
      { diaSemana: 5, aula: 1, disponivel: true },
      { diaSemana: 5, aula: 2, disponivel: true },
      { diaSemana: 5, aula: 3, disponivel: true },
      { diaSemana: 5, aula: 4, disponivel: true },
      { diaSemana: 5, aula: 5, disponivel: true },
      { diaSemana: 5, aula: 6, disponivel: true }
    ]
  },
];

// Turmas dos dados reais
export const turmas: Turma[] = [
  {
    id: 1,
    nome: '1ª Série do Ensino Médio',
    segmento: 'Ensino Médio',
    ano: '1º',
    turma: 'Única',
    periodo: 'Manhã'
  },
  {
    id: 2,
    nome: '9º Ano A',
    segmento: 'Ensino Fundamental II',
    ano: '9º',
    turma: 'A',
    periodo: 'Manhã'
  },
  {
    id: 3,
    nome: '9º Ano B',
    segmento: 'Ensino Fundamental II',
    ano: '9º',
    turma: 'B',
    periodo: 'Manhã'
  },
  {
    id: 4,
    nome: '8º Ano A',
    segmento: 'Ensino Fundamental II',
    ano: '8º',
    turma: 'A',
    periodo: 'Manhã'
  },
  {
    id: 5,
    nome: '8º Ano B',
    segmento: 'Ensino Fundamental II',
    ano: '8º',
    turma: 'B',
    periodo: 'Manhã'
  },
  {
    id: 6,
    nome: '7º Ano A',
    segmento: 'Ensino Fundamental II',
    ano: '7º',
    turma: 'A',
    periodo: 'Manhã'
  },
  {
    id: 7,
    nome: '7º Ano B',
    segmento: 'Ensino Fundamental II',
    ano: '7º',
    turma: 'B',
    periodo: 'Manhã'
  },
  {
    id: 8,
    nome: '6º Ano A',
    segmento: 'Ensino Fundamental II',
    ano: '6º',
    turma: 'A',
    periodo: 'Manhã'
  },
  {
    id: 9,
    nome: '6º Ano B',
    segmento: 'Ensino Fundamental II',
    ano: '6º',
    turma: 'B',
    periodo: 'Manhã'
  },
  {
    id: 10,
    nome: '5º Ano A',
    segmento: 'Ensino Fundamental I',
    ano: '5º',
    turma: 'A',
    periodo: 'Manhã'
  },
  {
    id: 11,
    nome: '5º Ano B',
    segmento: 'Ensino Fundamental I',
    ano: '5º',
    turma: 'B',
    periodo: 'Manhã'
  },
  {
    id: 12,
    nome: '4º Ano A',
    segmento: 'Ensino Fundamental I',
    ano: '4º',
    turma: 'A',
    periodo: 'Manhã'
  },
  {
    id: 13,
    nome: '4º Ano B',
    segmento: 'Ensino Fundamental I',
    ano: '4º',
    turma: 'B',
    periodo: 'Manhã'
  },
];

// Horários dos dados reais
export const horarios: Horario[] = [
  {
    id: 1,
    turmaId: 1,
    diaSemana: 1,
    aula: 1,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 2,
    turmaId: 1,
    diaSemana: 1,
    aula: 2,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 3,
    turmaId: 1,
    diaSemana: 1,
    aula: 3,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 4,
    turmaId: 1,
    diaSemana: 1,
    aula: 4,
    professorId: 9,
    disciplinaId: 16
  },
  {
    id: 5,
    turmaId: 1,
    diaSemana: 1,
    aula: 5,
    professorId: 7,
    disciplinaId: 12
  },
  {
    id: 6,
    turmaId: 1,
    diaSemana: 1,
    aula: 6,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 7,
    turmaId: 1,
    diaSemana: 2,
    aula: 1,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 8,
    turmaId: 1,
    diaSemana: 2,
    aula: 2,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 9,
    turmaId: 1,
    diaSemana: 2,
    aula: 3,
    professorId: 6,
    disciplinaId: 5
  },
  {
    id: 10,
    turmaId: 1,
    diaSemana: 2,
    aula: 4,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 11,
    turmaId: 1,
    diaSemana: 2,
    aula: 5,
    professorId: 10,
    disciplinaId: 2
  },
  {
    id: 12,
    turmaId: 1,
    diaSemana: 2,
    aula: 6,
    professorId: 10,
    disciplinaId: 2
  },
  {
    id: 13,
    turmaId: 1,
    diaSemana: 3,
    aula: 1,
    professorId: 3,
    disciplinaId: 15
  },
  {
    id: 14,
    turmaId: 1,
    diaSemana: 3,
    aula: 2,
    professorId: 3,
    disciplinaId: 15
  },
  {
    id: 15,
    turmaId: 1,
    diaSemana: 3,
    aula: 3,
    professorId: 3,
    disciplinaId: 15
  },
  {
    id: 16,
    turmaId: 1,
    diaSemana: 3,
    aula: 4,
    professorId: 10,
    disciplinaId: 2
  },
  {
    id: 17,
    turmaId: 1,
    diaSemana: 3,
    aula: 5,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 18,
    turmaId: 1,
    diaSemana: 3,
    aula: 6,
    professorId: 8,
    disciplinaId: 8
  },
  {
    id: 19,
    turmaId: 1,
    diaSemana: 4,
    aula: 1,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 20,
    turmaId: 1,
    diaSemana: 4,
    aula: 2,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 21,
    turmaId: 1,
    diaSemana: 4,
    aula: 3,
    professorId: 7,
    disciplinaId: 12
  },
  {
    id: 22,
    turmaId: 1,
    diaSemana: 4,
    aula: 4,
    professorId: 7,
    disciplinaId: 12
  },
  {
    id: 23,
    turmaId: 1,
    diaSemana: 4,
    aula: 5,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 24,
    turmaId: 1,
    diaSemana: 4,
    aula: 6,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 25,
    turmaId: 1,
    diaSemana: 5,
    aula: 1,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 26,
    turmaId: 1,
    diaSemana: 5,
    aula: 2,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 27,
    turmaId: 1,
    diaSemana: 5,
    aula: 3,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 28,
    turmaId: 1,
    diaSemana: 5,
    aula: 4,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 29,
    turmaId: 1,
    diaSemana: 5,
    aula: 5,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 30,
    turmaId: 1,
    diaSemana: 5,
    aula: 6,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 31,
    turmaId: 2,
    diaSemana: 1,
    aula: 1,
    professorId: 7,
    disciplinaId: 12
  },
  {
    id: 32,
    turmaId: 2,
    diaSemana: 1,
    aula: 2,
    professorId: 7,
    disciplinaId: 12
  },
  {
    id: 33,
    turmaId: 2,
    diaSemana: 1,
    aula: 3,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 34,
    turmaId: 2,
    diaSemana: 1,
    aula: 4,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 35,
    turmaId: 2,
    diaSemana: 1,
    aula: 5,
    professorId: 11,
    disciplinaId: 6
  },
  {
    id: 36,
    turmaId: 2,
    diaSemana: 1,
    aula: 6,
    professorId: 12,
    disciplinaId: 1
  },
  {
    id: 37,
    turmaId: 2,
    diaSemana: 2,
    aula: 1,
    professorId: 10,
    disciplinaId: 2
  },
  {
    id: 38,
    turmaId: 2,
    diaSemana: 2,
    aula: 2,
    professorId: 10,
    disciplinaId: 2
  },
  {
    id: 39,
    turmaId: 2,
    diaSemana: 2,
    aula: 3,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 40,
    turmaId: 2,
    diaSemana: 2,
    aula: 4,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 41,
    turmaId: 2,
    diaSemana: 2,
    aula: 5,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 42,
    turmaId: 2,
    diaSemana: 2,
    aula: 6,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 43,
    turmaId: 2,
    diaSemana: 3,
    aula: 1,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 44,
    turmaId: 2,
    diaSemana: 3,
    aula: 2,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 45,
    turmaId: 2,
    diaSemana: 3,
    aula: 3,
    professorId: 6,
    disciplinaId: 5
  },
  {
    id: 46,
    turmaId: 2,
    diaSemana: 3,
    aula: 4,
    professorId: 3,
    disciplinaId: 15
  },
  {
    id: 47,
    turmaId: 2,
    diaSemana: 3,
    aula: 5,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 48,
    turmaId: 2,
    diaSemana: 3,
    aula: 6,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 49,
    turmaId: 2,
    diaSemana: 4,
    aula: 1,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 50,
    turmaId: 2,
    diaSemana: 4,
    aula: 2,
    professorId: 7,
    disciplinaId: 12
  },
  {
    id: 51,
    turmaId: 2,
    diaSemana: 4,
    aula: 3,
    professorId: 10,
    disciplinaId: 2
  },
  {
    id: 52,
    turmaId: 2,
    diaSemana: 4,
    aula: 4,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 53,
    turmaId: 2,
    diaSemana: 4,
    aula: 5,
    professorId: 11,
    disciplinaId: 6
  },
  {
    id: 54,
    turmaId: 2,
    diaSemana: 4,
    aula: 6,
    professorId: 9,
    disciplinaId: 16
  },
  {
    id: 55,
    turmaId: 2,
    diaSemana: 5,
    aula: 1,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 56,
    turmaId: 2,
    diaSemana: 5,
    aula: 2,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 57,
    turmaId: 2,
    diaSemana: 5,
    aula: 3,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 58,
    turmaId: 2,
    diaSemana: 5,
    aula: 4,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 59,
    turmaId: 2,
    diaSemana: 5,
    aula: 5,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 60,
    turmaId: 2,
    diaSemana: 5,
    aula: 6,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 61,
    turmaId: 3,
    diaSemana: 1,
    aula: 1,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 62,
    turmaId: 3,
    diaSemana: 1,
    aula: 2,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 63,
    turmaId: 3,
    diaSemana: 1,
    aula: 3,
    professorId: 7,
    disciplinaId: 12
  },
  {
    id: 64,
    turmaId: 3,
    diaSemana: 1,
    aula: 4,
    professorId: 7,
    disciplinaId: 12
  },
  {
    id: 65,
    turmaId: 3,
    diaSemana: 1,
    aula: 5,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 66,
    turmaId: 3,
    diaSemana: 1,
    aula: 6,
    professorId: 11,
    disciplinaId: 6
  },
  {
    id: 67,
    turmaId: 3,
    diaSemana: 2,
    aula: 1,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 68,
    turmaId: 3,
    diaSemana: 2,
    aula: 2,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 69,
    turmaId: 3,
    diaSemana: 2,
    aula: 3,
    professorId: 10,
    disciplinaId: 2
  },
  {
    id: 70,
    turmaId: 3,
    diaSemana: 2,
    aula: 4,
    professorId: 10,
    disciplinaId: 2
  },
  {
    id: 71,
    turmaId: 3,
    diaSemana: 2,
    aula: 5,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 72,
    turmaId: 3,
    diaSemana: 2,
    aula: 6,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 73,
    turmaId: 3,
    diaSemana: 3,
    aula: 1,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 74,
    turmaId: 3,
    diaSemana: 3,
    aula: 2,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 75,
    turmaId: 3,
    diaSemana: 3,
    aula: 3,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 76,
    turmaId: 3,
    diaSemana: 3,
    aula: 4,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 77,
    turmaId: 3,
    diaSemana: 3,
    aula: 5,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 78,
    turmaId: 3,
    diaSemana: 3,
    aula: 6,
    professorId: 3,
    disciplinaId: 15
  },
  {
    id: 79,
    turmaId: 3,
    diaSemana: 4,
    aula: 1,
    professorId: 7,
    disciplinaId: 12
  },
  {
    id: 80,
    turmaId: 3,
    diaSemana: 4,
    aula: 2,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 81,
    turmaId: 3,
    diaSemana: 4,
    aula: 3,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 82,
    turmaId: 3,
    diaSemana: 4,
    aula: 4,
    professorId: 10,
    disciplinaId: 2
  },
  {
    id: 83,
    turmaId: 3,
    diaSemana: 4,
    aula: 5,
    professorId: 9,
    disciplinaId: 16
  },
  {
    id: 84,
    turmaId: 3,
    diaSemana: 4,
    aula: 6,
    professorId: 11,
    disciplinaId: 6
  },
  {
    id: 85,
    turmaId: 3,
    diaSemana: 5,
    aula: 1,
    professorId: 12,
    disciplinaId: 1
  },
  {
    id: 86,
    turmaId: 3,
    diaSemana: 5,
    aula: 2,
    professorId: 6,
    disciplinaId: 5
  },
  {
    id: 87,
    turmaId: 3,
    diaSemana: 5,
    aula: 3,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 88,
    turmaId: 3,
    diaSemana: 5,
    aula: 4,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 89,
    turmaId: 3,
    diaSemana: 5,
    aula: 5,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 90,
    turmaId: 3,
    diaSemana: 5,
    aula: 6,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 91,
    turmaId: 4,
    diaSemana: 1,
    aula: 1,
    professorId: 12,
    disciplinaId: 1
  },
  {
    id: 92,
    turmaId: 4,
    diaSemana: 1,
    aula: 2,
    professorId: 6,
    disciplinaId: 5
  },
  {
    id: 93,
    turmaId: 4,
    diaSemana: 1,
    aula: 3,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 94,
    turmaId: 4,
    diaSemana: 1,
    aula: 4,
    professorId: 11,
    disciplinaId: 6
  },
  {
    id: 95,
    turmaId: 4,
    diaSemana: 1,
    aula: 5,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 96,
    turmaId: 4,
    diaSemana: 1,
    aula: 6,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 97,
    turmaId: 4,
    diaSemana: 2,
    aula: 1,
    professorId: 13,
    disciplinaId: 4
  },
  {
    id: 98,
    turmaId: 4,
    diaSemana: 2,
    aula: 2,
    professorId: 14,
    disciplinaId: 5
  },
  {
    id: 99,
    turmaId: 4,
    diaSemana: 2,
    aula: 3,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 100,
    turmaId: 4,
    diaSemana: 2,
    aula: 4,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 101,
    turmaId: 4,
    diaSemana: 2,
    aula: 5,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 102,
    turmaId: 4,
    diaSemana: 2,
    aula: 6,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 103,
    turmaId: 4,
    diaSemana: 3,
    aula: 1,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 104,
    turmaId: 4,
    diaSemana: 3,
    aula: 2,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 105,
    turmaId: 4,
    diaSemana: 3,
    aula: 3,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 106,
    turmaId: 4,
    diaSemana: 3,
    aula: 4,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 107,
    turmaId: 4,
    diaSemana: 3,
    aula: 5,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 108,
    turmaId: 4,
    diaSemana: 3,
    aula: 6,
    professorId: 11,
    disciplinaId: 6
  },
  {
    id: 109,
    turmaId: 4,
    diaSemana: 4,
    aula: 1,
    professorId: 9,
    disciplinaId: 16
  },
  {
    id: 110,
    turmaId: 4,
    diaSemana: 4,
    aula: 2,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 111,
    turmaId: 4,
    diaSemana: 4,
    aula: 3,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 112,
    turmaId: 4,
    diaSemana: 4,
    aula: 4,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 113,
    turmaId: 4,
    diaSemana: 4,
    aula: 5,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 114,
    turmaId: 4,
    diaSemana: 4,
    aula: 6,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 115,
    turmaId: 4,
    diaSemana: 5,
    aula: 1,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 116,
    turmaId: 4,
    diaSemana: 5,
    aula: 2,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 117,
    turmaId: 4,
    diaSemana: 5,
    aula: 3,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 118,
    turmaId: 4,
    diaSemana: 5,
    aula: 4,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 119,
    turmaId: 4,
    diaSemana: 5,
    aula: 5,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 120,
    turmaId: 4,
    diaSemana: 5,
    aula: 6,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 121,
    turmaId: 5,
    diaSemana: 1,
    aula: 1,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 122,
    turmaId: 5,
    diaSemana: 1,
    aula: 2,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 123,
    turmaId: 5,
    diaSemana: 1,
    aula: 3,
    professorId: 11,
    disciplinaId: 6
  },
  {
    id: 124,
    turmaId: 5,
    diaSemana: 1,
    aula: 4,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 125,
    turmaId: 5,
    diaSemana: 1,
    aula: 5,
    professorId: 14,
    disciplinaId: 5
  },
  {
    id: 126,
    turmaId: 5,
    diaSemana: 1,
    aula: 6,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 127,
    turmaId: 5,
    diaSemana: 2,
    aula: 1,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 128,
    turmaId: 5,
    diaSemana: 2,
    aula: 2,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 129,
    turmaId: 5,
    diaSemana: 2,
    aula: 3,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 130,
    turmaId: 5,
    diaSemana: 2,
    aula: 4,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 131,
    turmaId: 5,
    diaSemana: 2,
    aula: 5,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 132,
    turmaId: 5,
    diaSemana: 2,
    aula: 6,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 133,
    turmaId: 5,
    diaSemana: 3,
    aula: 1,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 134,
    turmaId: 5,
    diaSemana: 3,
    aula: 2,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 135,
    turmaId: 5,
    diaSemana: 3,
    aula: 3,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 136,
    turmaId: 5,
    diaSemana: 3,
    aula: 4,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 137,
    turmaId: 5,
    diaSemana: 3,
    aula: 5,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 138,
    turmaId: 5,
    diaSemana: 3,
    aula: 6,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 139,
    turmaId: 5,
    diaSemana: 4,
    aula: 1,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 140,
    turmaId: 5,
    diaSemana: 4,
    aula: 2,
    professorId: 9,
    disciplinaId: 16
  },
  {
    id: 141,
    turmaId: 5,
    diaSemana: 4,
    aula: 3,
    professorId: 1,
    disciplinaId: 14
  },
  {
    id: 142,
    turmaId: 5,
    diaSemana: 4,
    aula: 4,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 143,
    turmaId: 5,
    diaSemana: 4,
    aula: 5,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 144,
    turmaId: 5,
    diaSemana: 4,
    aula: 6,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 145,
    turmaId: 5,
    diaSemana: 5,
    aula: 1,
    professorId: 6,
    disciplinaId: 5
  },
  {
    id: 146,
    turmaId: 5,
    diaSemana: 5,
    aula: 2,
    professorId: 13,
    disciplinaId: 4
  },
  {
    id: 147,
    turmaId: 5,
    diaSemana: 5,
    aula: 3,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 148,
    turmaId: 5,
    diaSemana: 5,
    aula: 4,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 149,
    turmaId: 5,
    diaSemana: 5,
    aula: 5,
    professorId: 12,
    disciplinaId: 1
  },
  {
    id: 150,
    turmaId: 5,
    diaSemana: 5,
    aula: 6,
    professorId: 11,
    disciplinaId: 6
  },
  {
    id: 151,
    turmaId: 6,
    diaSemana: 1,
    aula: 1,
    professorId: 11,
    disciplinaId: 6
  },
  {
    id: 152,
    turmaId: 6,
    diaSemana: 1,
    aula: 2,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 153,
    turmaId: 6,
    diaSemana: 1,
    aula: 3,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 154,
    turmaId: 6,
    diaSemana: 1,
    aula: 4,
    professorId: 14,
    disciplinaId: 5
  },
  {
    id: 155,
    turmaId: 6,
    diaSemana: 1,
    aula: 5,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 156,
    turmaId: 6,
    diaSemana: 1,
    aula: 6,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 157,
    turmaId: 6,
    diaSemana: 2,
    aula: 1,
    professorId: 12,
    disciplinaId: 1
  },
  {
    id: 158,
    turmaId: 6,
    diaSemana: 2,
    aula: 2,
    professorId: 13,
    disciplinaId: 4
  },
  {
    id: 159,
    turmaId: 6,
    diaSemana: 2,
    aula: 3,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 160,
    turmaId: 6,
    diaSemana: 2,
    aula: 4,
    professorId: 6,
    disciplinaId: 5
  },
  {
    id: 161,
    turmaId: 6,
    diaSemana: 2,
    aula: 5,
    professorId: 11,
    disciplinaId: 6
  },
  {
    id: 162,
    turmaId: 6,
    diaSemana: 2,
    aula: 6,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 163,
    turmaId: 6,
    diaSemana: 3,
    aula: 1,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 164,
    turmaId: 6,
    diaSemana: 3,
    aula: 2,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 165,
    turmaId: 6,
    diaSemana: 3,
    aula: 3,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 166,
    turmaId: 6,
    diaSemana: 3,
    aula: 4,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 167,
    turmaId: 6,
    diaSemana: 3,
    aula: 5,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 168,
    turmaId: 6,
    diaSemana: 3,
    aula: 6,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 169,
    turmaId: 6,
    diaSemana: 4,
    aula: 1,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 170,
    turmaId: 6,
    diaSemana: 4,
    aula: 2,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 171,
    turmaId: 6,
    diaSemana: 4,
    aula: 3,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 172,
    turmaId: 6,
    diaSemana: 4,
    aula: 4,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 173,
    turmaId: 6,
    diaSemana: 4,
    aula: 5,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 174,
    turmaId: 6,
    diaSemana: 4,
    aula: 6,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 175,
    turmaId: 6,
    diaSemana: 5,
    aula: 1,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 176,
    turmaId: 6,
    diaSemana: 5,
    aula: 2,
    professorId: 9,
    disciplinaId: 16
  },
  {
    id: 177,
    turmaId: 6,
    diaSemana: 5,
    aula: 3,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 178,
    turmaId: 6,
    diaSemana: 5,
    aula: 4,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 179,
    turmaId: 6,
    diaSemana: 5,
    aula: 5,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 180,
    turmaId: 6,
    diaSemana: 5,
    aula: 6,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 181,
    turmaId: 7,
    diaSemana: 1,
    aula: 1,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 182,
    turmaId: 7,
    diaSemana: 1,
    aula: 2,
    professorId: 11,
    disciplinaId: 6
  },
  {
    id: 183,
    turmaId: 7,
    diaSemana: 1,
    aula: 3,
    professorId: 13,
    disciplinaId: 4
  },
  {
    id: 184,
    turmaId: 7,
    diaSemana: 1,
    aula: 4,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 185,
    turmaId: 7,
    diaSemana: 1,
    aula: 5,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 186,
    turmaId: 7,
    diaSemana: 1,
    aula: 6,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 187,
    turmaId: 7,
    diaSemana: 2,
    aula: 1,
    professorId: 6,
    disciplinaId: 5
  },
  {
    id: 188,
    turmaId: 7,
    diaSemana: 2,
    aula: 2,
    professorId: 12,
    disciplinaId: 1
  },
  {
    id: 189,
    turmaId: 7,
    diaSemana: 2,
    aula: 3,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 190,
    turmaId: 7,
    diaSemana: 2,
    aula: 4,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 191,
    turmaId: 7,
    diaSemana: 2,
    aula: 5,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 192,
    turmaId: 7,
    diaSemana: 2,
    aula: 6,
    professorId: 11,
    disciplinaId: 6
  },
  {
    id: 193,
    turmaId: 7,
    diaSemana: 3,
    aula: 1,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 194,
    turmaId: 7,
    diaSemana: 3,
    aula: 2,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 195,
    turmaId: 7,
    diaSemana: 3,
    aula: 3,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 196,
    turmaId: 7,
    diaSemana: 3,
    aula: 4,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 197,
    turmaId: 7,
    diaSemana: 3,
    aula: 5,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 198,
    turmaId: 7,
    diaSemana: 3,
    aula: 6,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 199,
    turmaId: 7,
    diaSemana: 4,
    aula: 1,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 200,
    turmaId: 7,
    diaSemana: 4,
    aula: 2,
    professorId: 8,
    disciplinaId: 7
  },
  {
    id: 201,
    turmaId: 7,
    diaSemana: 4,
    aula: 3,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 202,
    turmaId: 7,
    diaSemana: 4,
    aula: 4,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 203,
    turmaId: 7,
    diaSemana: 4,
    aula: 5,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 204,
    turmaId: 7,
    diaSemana: 4,
    aula: 6,
    professorId: 14,
    disciplinaId: 5
  },
  {
    id: 205,
    turmaId: 7,
    diaSemana: 5,
    aula: 1,
    professorId: 9,
    disciplinaId: 16
  },
  {
    id: 206,
    turmaId: 7,
    diaSemana: 5,
    aula: 2,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 207,
    turmaId: 7,
    diaSemana: 5,
    aula: 3,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 208,
    turmaId: 7,
    diaSemana: 5,
    aula: 4,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 209,
    turmaId: 7,
    diaSemana: 5,
    aula: 5,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 210,
    turmaId: 7,
    diaSemana: 5,
    aula: 6,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 211,
    turmaId: 8,
    diaSemana: 1,
    aula: 1,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 212,
    turmaId: 8,
    diaSemana: 1,
    aula: 2,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 213,
    turmaId: 8,
    diaSemana: 1,
    aula: 3,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 214,
    turmaId: 8,
    diaSemana: 1,
    aula: 4,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 215,
    turmaId: 8,
    diaSemana: 1,
    aula: 5,
    professorId: 19,
    disciplinaId: 6
  },
  {
    id: 216,
    turmaId: 8,
    diaSemana: 1,
    aula: 6,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 217,
    turmaId: 8,
    diaSemana: 2,
    aula: 1,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 218,
    turmaId: 8,
    diaSemana: 2,
    aula: 2,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 219,
    turmaId: 8,
    diaSemana: 2,
    aula: 3,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 220,
    turmaId: 8,
    diaSemana: 2,
    aula: 4,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 221,
    turmaId: 8,
    diaSemana: 2,
    aula: 5,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 222,
    turmaId: 8,
    diaSemana: 2,
    aula: 6,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 223,
    turmaId: 8,
    diaSemana: 3,
    aula: 1,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 224,
    turmaId: 8,
    diaSemana: 3,
    aula: 2,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 225,
    turmaId: 8,
    diaSemana: 3,
    aula: 3,
    professorId: 9,
    disciplinaId: 16
  },
  {
    id: 226,
    turmaId: 8,
    diaSemana: 3,
    aula: 4,
    professorId: 6,
    disciplinaId: 5
  },
  {
    id: 227,
    turmaId: 8,
    diaSemana: 3,
    aula: 5,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 228,
    turmaId: 8,
    diaSemana: 3,
    aula: 6,
    professorId: 19,
    disciplinaId: 6
  },
  {
    id: 229,
    turmaId: 8,
    diaSemana: 4,
    aula: 1,
    professorId: 13,
    disciplinaId: 4
  },
  {
    id: 230,
    turmaId: 8,
    diaSemana: 4,
    aula: 2,
    professorId: 12,
    disciplinaId: 1
  },
  {
    id: 231,
    turmaId: 8,
    diaSemana: 4,
    aula: 3,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 232,
    turmaId: 8,
    diaSemana: 4,
    aula: 4,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 233,
    turmaId: 8,
    diaSemana: 4,
    aula: 5,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 234,
    turmaId: 8,
    diaSemana: 4,
    aula: 6,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 235,
    turmaId: 8,
    diaSemana: 5,
    aula: 1,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 236,
    turmaId: 8,
    diaSemana: 5,
    aula: 2,
    professorId: 14,
    disciplinaId: 5
  },
  {
    id: 237,
    turmaId: 8,
    diaSemana: 5,
    aula: 3,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 238,
    turmaId: 8,
    diaSemana: 5,
    aula: 4,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 239,
    turmaId: 8,
    diaSemana: 5,
    aula: 5,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 240,
    turmaId: 8,
    diaSemana: 5,
    aula: 6,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 241,
    turmaId: 9,
    diaSemana: 1,
    aula: 1,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 242,
    turmaId: 9,
    diaSemana: 1,
    aula: 2,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 243,
    turmaId: 9,
    diaSemana: 1,
    aula: 3,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 244,
    turmaId: 9,
    diaSemana: 1,
    aula: 4,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 245,
    turmaId: 9,
    diaSemana: 1,
    aula: 5,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 246,
    turmaId: 9,
    diaSemana: 1,
    aula: 6,
    professorId: 19,
    disciplinaId: 6
  },
  {
    id: 247,
    turmaId: 9,
    diaSemana: 2,
    aula: 1,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 248,
    turmaId: 9,
    diaSemana: 2,
    aula: 2,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 249,
    turmaId: 9,
    diaSemana: 2,
    aula: 3,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 250,
    turmaId: 9,
    diaSemana: 2,
    aula: 4,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 251,
    turmaId: 9,
    diaSemana: 2,
    aula: 5,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 252,
    turmaId: 9,
    diaSemana: 2,
    aula: 6,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 253,
    turmaId: 9,
    diaSemana: 3,
    aula: 1,
    professorId: 9,
    disciplinaId: 16
  },
  {
    id: 254,
    turmaId: 9,
    diaSemana: 3,
    aula: 2,
    professorId: 14,
    disciplinaId: 5
  },
  {
    id: 255,
    turmaId: 9,
    diaSemana: 3,
    aula: 3,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 256,
    turmaId: 9,
    diaSemana: 3,
    aula: 4,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 257,
    turmaId: 9,
    diaSemana: 3,
    aula: 5,
    professorId: 19,
    disciplinaId: 6
  },
  {
    id: 258,
    turmaId: 9,
    diaSemana: 3,
    aula: 6,
    professorId: 2,
    disciplinaId: 13
  },
  {
    id: 259,
    turmaId: 9,
    diaSemana: 4,
    aula: 1,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 260,
    turmaId: 9,
    diaSemana: 4,
    aula: 2,
    professorId: 16,
    disciplinaId: 14
  },
  {
    id: 261,
    turmaId: 9,
    diaSemana: 4,
    aula: 3,
    professorId: 4,
    disciplinaId: 9
  },
  {
    id: 262,
    turmaId: 9,
    diaSemana: 4,
    aula: 4,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 263,
    turmaId: 9,
    diaSemana: 4,
    aula: 5,
    professorId: 12,
    disciplinaId: 1
  },
  {
    id: 264,
    turmaId: 9,
    diaSemana: 4,
    aula: 6,
    professorId: 6,
    disciplinaId: 5
  },
  {
    id: 265,
    turmaId: 9,
    diaSemana: 5,
    aula: 1,
    professorId: 13,
    disciplinaId: 4
  },
  {
    id: 266,
    turmaId: 9,
    diaSemana: 5,
    aula: 2,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 267,
    turmaId: 9,
    diaSemana: 5,
    aula: 3,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 268,
    turmaId: 9,
    diaSemana: 5,
    aula: 4,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 269,
    turmaId: 9,
    diaSemana: 5,
    aula: 5,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 270,
    turmaId: 9,
    diaSemana: 5,
    aula: 6,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 271,
    turmaId: 10,
    diaSemana: 1,
    aula: 1,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 272,
    turmaId: 10,
    diaSemana: 1,
    aula: 2,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 273,
    turmaId: 10,
    diaSemana: 1,
    aula: 3,
    professorId: 19,
    disciplinaId: 6
  },
  {
    id: 274,
    turmaId: 10,
    diaSemana: 1,
    aula: 4,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 275,
    turmaId: 10,
    diaSemana: 1,
    aula: 5,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 276,
    turmaId: 10,
    diaSemana: 1,
    aula: 6,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 277,
    turmaId: 10,
    diaSemana: 2,
    aula: 1,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 278,
    turmaId: 10,
    diaSemana: 2,
    aula: 2,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 279,
    turmaId: 10,
    diaSemana: 2,
    aula: 3,
    professorId: 21,
    disciplinaId: 13
  },
  {
    id: 280,
    turmaId: 10,
    diaSemana: 2,
    aula: 4,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 281,
    turmaId: 10,
    diaSemana: 2,
    aula: 5,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 282,
    turmaId: 10,
    diaSemana: 2,
    aula: 6,
    professorId: 9,
    disciplinaId: 11
  },
  {
    id: 283,
    turmaId: 10,
    diaSemana: 3,
    aula: 1,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 284,
    turmaId: 10,
    diaSemana: 3,
    aula: 2,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 285,
    turmaId: 10,
    diaSemana: 3,
    aula: 3,
    professorId: 19,
    disciplinaId: 6
  },
  {
    id: 286,
    turmaId: 10,
    diaSemana: 3,
    aula: 4,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 287,
    turmaId: 10,
    diaSemana: 3,
    aula: 5,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 288,
    turmaId: 10,
    diaSemana: 3,
    aula: 6,
    professorId: 21,
    disciplinaId: 13
  },
  {
    id: 289,
    turmaId: 10,
    diaSemana: 4,
    aula: 1,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 290,
    turmaId: 10,
    diaSemana: 4,
    aula: 2,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 291,
    turmaId: 10,
    diaSemana: 4,
    aula: 3,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 292,
    turmaId: 10,
    diaSemana: 4,
    aula: 4,
    professorId: 12,
    disciplinaId: 1
  },
  {
    id: 293,
    turmaId: 10,
    diaSemana: 4,
    aula: 5,
    professorId: 22,
    disciplinaId: 5
  },
  {
    id: 294,
    turmaId: 10,
    diaSemana: 4,
    aula: 6,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 295,
    turmaId: 10,
    diaSemana: 5,
    aula: 1,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 296,
    turmaId: 10,
    diaSemana: 5,
    aula: 2,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 297,
    turmaId: 10,
    diaSemana: 5,
    aula: 3,
    professorId: 23,
    disciplinaId: 4
  },
  {
    id: 298,
    turmaId: 10,
    diaSemana: 5,
    aula: 4,
    professorId: 9,
    disciplinaId: 16
  },
  {
    id: 299,
    turmaId: 10,
    diaSemana: 5,
    aula: 5,
    professorId: 21,
    disciplinaId: 13
  },
  {
    id: 300,
    turmaId: 10,
    diaSemana: 5,
    aula: 6,
    professorId: 21,
    disciplinaId: 13
  },
  {
    id: 301,
    turmaId: 11,
    diaSemana: 1,
    aula: 1,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 302,
    turmaId: 11,
    diaSemana: 1,
    aula: 2,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 303,
    turmaId: 11,
    diaSemana: 1,
    aula: 3,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 304,
    turmaId: 11,
    diaSemana: 1,
    aula: 4,
    professorId: 19,
    disciplinaId: 6
  },
  {
    id: 305,
    turmaId: 11,
    diaSemana: 1,
    aula: 5,
    professorId: 21,
    disciplinaId: 13
  },
  {
    id: 306,
    turmaId: 11,
    diaSemana: 1,
    aula: 6,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 307,
    turmaId: 11,
    diaSemana: 2,
    aula: 1,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 308,
    turmaId: 11,
    diaSemana: 2,
    aula: 2,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 309,
    turmaId: 11,
    diaSemana: 2,
    aula: 3,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 310,
    turmaId: 11,
    diaSemana: 2,
    aula: 4,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 311,
    turmaId: 11,
    diaSemana: 2,
    aula: 5,
    professorId: 9,
    disciplinaId: 11
  },
  {
    id: 312,
    turmaId: 11,
    diaSemana: 2,
    aula: 6,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 313,
    turmaId: 11,
    diaSemana: 3,
    aula: 1,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 314,
    turmaId: 11,
    diaSemana: 3,
    aula: 2,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 315,
    turmaId: 11,
    diaSemana: 3,
    aula: 3,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 316,
    turmaId: 11,
    diaSemana: 3,
    aula: 4,
    professorId: 19,
    disciplinaId: 6
  },
  {
    id: 317,
    turmaId: 11,
    diaSemana: 3,
    aula: 5,
    professorId: 9,
    disciplinaId: 16
  },
  {
    id: 318,
    turmaId: 11,
    diaSemana: 3,
    aula: 6,
    professorId: 23,
    disciplinaId: 4
  },
  {
    id: 319,
    turmaId: 11,
    diaSemana: 4,
    aula: 1,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 320,
    turmaId: 11,
    diaSemana: 4,
    aula: 2,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 321,
    turmaId: 11,
    diaSemana: 4,
    aula: 3,
    professorId: 21,
    disciplinaId: 13
  },
  {
    id: 322,
    turmaId: 11,
    diaSemana: 4,
    aula: 4,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 323,
    turmaId: 11,
    diaSemana: 4,
    aula: 5,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 324,
    turmaId: 11,
    diaSemana: 4,
    aula: 6,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 325,
    turmaId: 11,
    diaSemana: 5,
    aula: 1,
    professorId: 21,
    disciplinaId: 13
  },
  {
    id: 326,
    turmaId: 11,
    diaSemana: 5,
    aula: 2,
    professorId: 21,
    disciplinaId: 13
  },
  {
    id: 327,
    turmaId: 11,
    diaSemana: 5,
    aula: 3,
    professorId: 22,
    disciplinaId: 5
  },
  {
    id: 328,
    turmaId: 11,
    diaSemana: 5,
    aula: 4,
    professorId: 12,
    disciplinaId: 1
  },
  {
    id: 329,
    turmaId: 11,
    diaSemana: 5,
    aula: 5,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 330,
    turmaId: 11,
    diaSemana: 5,
    aula: 6,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 331,
    turmaId: 12,
    diaSemana: 1,
    aula: 1,
    professorId: 19,
    disciplinaId: 6
  },
  {
    id: 332,
    turmaId: 12,
    diaSemana: 1,
    aula: 2,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 333,
    turmaId: 12,
    diaSemana: 1,
    aula: 3,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 334,
    turmaId: 12,
    diaSemana: 1,
    aula: 4,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 335,
    turmaId: 12,
    diaSemana: 1,
    aula: 5,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 336,
    turmaId: 12,
    diaSemana: 1,
    aula: 6,
    professorId: 21,
    disciplinaId: 13
  },
  {
    id: 337,
    turmaId: 12,
    diaSemana: 2,
    aula: 1,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 338,
    turmaId: 12,
    diaSemana: 2,
    aula: 2,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 339,
    turmaId: 12,
    diaSemana: 2,
    aula: 3,
    professorId: 9,
    disciplinaId: 16
  },
  {
    id: 340,
    turmaId: 12,
    diaSemana: 2,
    aula: 4,
    professorId: 12,
    disciplinaId: 1
  },
  {
    id: 341,
    turmaId: 12,
    diaSemana: 2,
    aula: 5,
    professorId: 21,
    disciplinaId: 13
  },
  {
    id: 342,
    turmaId: 12,
    diaSemana: 2,
    aula: 6,
    professorId: 21,
    disciplinaId: 13
  },
  {
    id: 343,
    turmaId: 12,
    diaSemana: 3,
    aula: 1,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 344,
    turmaId: 12,
    diaSemana: 3,
    aula: 2,
    professorId: 19,
    disciplinaId: 6
  },
  {
    id: 345,
    turmaId: 12,
    diaSemana: 3,
    aula: 3,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 346,
    turmaId: 12,
    diaSemana: 3,
    aula: 4,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 347,
    turmaId: 12,
    diaSemana: 3,
    aula: 5,
    professorId: 21,
    disciplinaId: 13
  },
  {
    id: 348,
    turmaId: 12,
    diaSemana: 3,
    aula: 6,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 349,
    turmaId: 12,
    diaSemana: 4,
    aula: 1,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 350,
    turmaId: 12,
    diaSemana: 4,
    aula: 2,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 351,
    turmaId: 12,
    diaSemana: 4,
    aula: 3,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 352,
    turmaId: 12,
    diaSemana: 4,
    aula: 4,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 353,
    turmaId: 12,
    diaSemana: 4,
    aula: 5,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 354,
    turmaId: 12,
    diaSemana: 4,
    aula: 6,
    professorId: 23,
    disciplinaId: 4
  },
  {
    id: 355,
    turmaId: 12,
    diaSemana: 5,
    aula: 1,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 356,
    turmaId: 12,
    diaSemana: 5,
    aula: 2,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 357,
    turmaId: 12,
    diaSemana: 5,
    aula: 3,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 358,
    turmaId: 12,
    diaSemana: 5,
    aula: 4,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 359,
    turmaId: 12,
    diaSemana: 5,
    aula: 5,
    professorId: 9,
    disciplinaId: 11
  },
  {
    id: 360,
    turmaId: 12,
    diaSemana: 5,
    aula: 6,
    professorId: 22,
    disciplinaId: 5
  },
  {
    id: 361,
    turmaId: 13,
    diaSemana: 1,
    aula: 1,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 362,
    turmaId: 13,
    diaSemana: 1,
    aula: 2,
    professorId: 19,
    disciplinaId: 6
  },
  {
    id: 363,
    turmaId: 13,
    diaSemana: 1,
    aula: 3,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 364,
    turmaId: 13,
    diaSemana: 1,
    aula: 4,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 365,
    turmaId: 13,
    diaSemana: 1,
    aula: 5,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 366,
    turmaId: 13,
    diaSemana: 1,
    aula: 6,
    professorId: 9,
    disciplinaId: 16
  },
  {
    id: 367,
    turmaId: 13,
    diaSemana: 2,
    aula: 1,
    professorId: 21,
    disciplinaId: 13
  },
  {
    id: 368,
    turmaId: 13,
    diaSemana: 2,
    aula: 2,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 369,
    turmaId: 13,
    diaSemana: 2,
    aula: 3,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 370,
    turmaId: 13,
    diaSemana: 2,
    aula: 4,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 371,
    turmaId: 13,
    diaSemana: 2,
    aula: 5,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 372,
    turmaId: 13,
    diaSemana: 2,
    aula: 6,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 373,
    turmaId: 13,
    diaSemana: 3,
    aula: 1,
    professorId: 19,
    disciplinaId: 6
  },
  {
    id: 374,
    turmaId: 13,
    diaSemana: 3,
    aula: 2,
    professorId: 21,
    disciplinaId: 13
  },
  {
    id: 375,
    turmaId: 13,
    diaSemana: 3,
    aula: 3,
    professorId: 21,
    disciplinaId: 13
  },
  {
    id: 376,
    turmaId: 13,
    diaSemana: 3,
    aula: 4,
    professorId: 5,
    disciplinaId: 10
  },
  {
    id: 377,
    turmaId: 13,
    diaSemana: 3,
    aula: 5,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 378,
    turmaId: 13,
    diaSemana: 3,
    aula: 6,
    professorId: 9,
    disciplinaId: 11
  },
  {
    id: 379,
    turmaId: 13,
    diaSemana: 4,
    aula: 1,
    professorId: 17,
    disciplinaId: 3
  },
  {
    id: 380,
    turmaId: 13,
    diaSemana: 4,
    aula: 2,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 381,
    turmaId: 13,
    diaSemana: 4,
    aula: 3,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 382,
    turmaId: 13,
    diaSemana: 4,
    aula: 4,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 383,
    turmaId: 13,
    diaSemana: 4,
    aula: 5,
    professorId: 20,
    disciplinaId: 14
  },
  {
    id: 384,
    turmaId: 13,
    diaSemana: 4,
    aula: 6,
    professorId: 22,
    disciplinaId: 5
  },
  {
    id: 385,
    turmaId: 13,
    diaSemana: 5,
    aula: 1,
    professorId: 18,
    disciplinaId: 7
  },
  {
    id: 386,
    turmaId: 13,
    diaSemana: 5,
    aula: 2,
    professorId: 15,
    disciplinaId: 12
  },
  {
    id: 387,
    turmaId: 13,
    diaSemana: 5,
    aula: 3,
    professorId: 12,
    disciplinaId: 1
  },
  {
    id: 388,
    turmaId: 13,
    diaSemana: 5,
    aula: 4,
    professorId: 21,
    disciplinaId: 13
  },
  {
    id: 389,
    turmaId: 13,
    diaSemana: 5,
    aula: 5,
    professorId: 23,
    disciplinaId: 4
  },
  {
    id: 390,
    turmaId: 13,
    diaSemana: 5,
    aula: 6,
    professorId: 5,
    disciplinaId: 10
  },
];
