// Serviço de API para comunicação com o backend
import { Disciplina, Professor, Turma, Horario, EstadoSistema } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

class ApiService {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Erro na requisição ${endpoint}:`, error);
      throw error;
    }
  }

  // ================== DADOS GERAIS ==================
  
  async carregarTodosDados(): Promise<EstadoSistema> {
    return this.request<EstadoSistema>('/dados');
  }

  async importarDados(dados: EstadoSistema): Promise<{ success: boolean; message: string }> {
    return this.request('/importar', {
      method: 'POST',
      body: JSON.stringify(dados),
    });
  }

  async exportarDados(): Promise<EstadoSistema> {
    return this.request<EstadoSistema>('/exportar');
  }

  async resetarSistema(): Promise<{ success: boolean; message: string }> {
    return this.request('/resetar', {
      method: 'DELETE',
    });
  }

  // ================== DISCIPLINAS ==================
  
  async listarDisciplinas(): Promise<Disciplina[]> {
    return this.request<Disciplina[]>('/disciplinas');
  }

  async criarDisciplina(disciplina: Omit<Disciplina, 'id'>): Promise<Disciplina> {
    return this.request<Disciplina>('/disciplinas', {
      method: 'POST',
      body: JSON.stringify(disciplina),
    });
  }

  async atualizarDisciplina(id: number, disciplina: Partial<Disciplina>): Promise<Disciplina> {
    return this.request<Disciplina>(`/disciplinas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(disciplina),
    });
  }

  async removerDisciplina(id: number): Promise<{ success: boolean }> {
    return this.request<{ success: boolean }>(`/disciplinas/${id}`, {
      method: 'DELETE',
    });
  }

  // ================== PROFESSORES ==================
  
  async listarProfessores(): Promise<Professor[]> {
    return this.request<Professor[]>('/professores');
  }

  async criarProfessor(professor: Omit<Professor, 'id'>): Promise<Professor> {
    return this.request<Professor>('/professores', {
      method: 'POST',
      body: JSON.stringify(professor),
    });
  }

  async atualizarProfessor(id: number, professor: Partial<Professor>): Promise<Professor> {
    return this.request<Professor>(`/professores/${id}`, {
      method: 'PUT',
      body: JSON.stringify(professor),
    });
  }

  async removerProfessor(id: number): Promise<{ success: boolean }> {
    return this.request<{ success: boolean }>(`/professores/${id}`, {
      method: 'DELETE',
    });
  }

  // ================== TURMAS ==================
  
  async listarTurmas(): Promise<Turma[]> {
    return this.request<Turma[]>('/turmas');
  }

  async criarTurma(turma: Omit<Turma, 'id'>): Promise<Turma> {
    return this.request<Turma>('/turmas', {
      method: 'POST',
      body: JSON.stringify(turma),
    });
  }

  async atualizarTurma(id: number, turma: Partial<Turma>): Promise<Turma> {
    return this.request<Turma>(`/turmas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(turma),
    });
  }

  async removerTurma(id: number): Promise<{ success: boolean }> {
    return this.request<{ success: boolean }>(`/turmas/${id}`, {
      method: 'DELETE',
    });
  }

  // ================== HORÁRIOS ==================
  
  async listarHorarios(): Promise<Horario[]> {
    return this.request<Horario[]>('/horarios');
  }

  async criarHorario(horario: Omit<Horario, 'id'>): Promise<Horario> {
    return this.request<Horario>('/horarios', {
      method: 'POST',
      body: JSON.stringify(horario),
    });
  }

  async atualizarHorario(id: number, horario: Partial<Horario>): Promise<Horario> {
    return this.request<Horario>(`/horarios/${id}`, {
      method: 'PUT',
      body: JSON.stringify(horario),
    });
  }

  async removerHorario(id: number): Promise<{ success: boolean }> {
    return this.request<{ success: boolean }>(`/horarios/${id}`, {
      method: 'DELETE',
    });
  }

  // ================== UTILITÁRIOS ==================
  
  async testarConexao(): Promise<boolean> {
    try {
      await this.request('/dados');
      return true;
    } catch (error) {
      console.error('Erro ao testar conexão com API:', error);
      return false;
    }
  }

  getBaseUrl(): string {
    return API_BASE_URL;
  }
}

// Exportar instância única
export const apiService = new ApiService();
export default apiService;