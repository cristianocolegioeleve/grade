import { EstadoSistema } from '../types';
import { disciplinas, professores, turmas, horarios } from '../data/mockData';

const STORAGE_KEY = 'sistema-grade-horarios';

export class LocalStorageService {
  static salvarEstado(estado: EstadoSistema): void {
    try {
      const dadosParaSalvar = JSON.stringify(estado);
      localStorage.setItem(STORAGE_KEY, dadosParaSalvar);
      console.log('✅ Dados salvos no localStorage:', {
        disciplinas: estado.disciplinas.length,
        professores: estado.professores.length,
        turmas: estado.turmas.length,
        horarios: estado.horarios.length
      });
    } catch (error) {
      console.error('❌ Erro ao salvar no localStorage:', error);
    }
  }

  static carregarEstado(): EstadoSistema {
    try {
      const dadosSalvos = localStorage.getItem(STORAGE_KEY);
      if (dadosSalvos) {
        const estadoCarregado = JSON.parse(dadosSalvos);
        console.log('✅ Dados carregados do localStorage:', {
          disciplinas: estadoCarregado.disciplinas?.length || 0,
          professores: estadoCarregado.professores?.length || 0,
          turmas: estadoCarregado.turmas?.length || 0,
          horarios: estadoCarregado.horarios?.length || 0
        });
        return estadoCarregado;
      } else {
        console.log('ℹ️ Nenhum dado salvo encontrado, carregando dados iniciais');
      }
    } catch (error) {
      console.error('❌ Erro ao carregar do localStorage:', error);
    }
    
    // Retorna dados mockados se não houver dados salvos
    const estadoInicial = {
      disciplinas: disciplinas,
      professores: professores,
      turmas: turmas,
      horarios: horarios,
      conflitos: []
    };
    
    console.log('📦 Carregando dados iniciais:', {
      disciplinas: estadoInicial.disciplinas.length,
      professores: estadoInicial.professores.length,
      turmas: estadoInicial.turmas.length,
      horarios: estadoInicial.horarios.length
    });
    
    return estadoInicial;
  }

  static limparDados(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Erro ao limpar localStorage:', error);
    }
  }

  static exportarDados(): string {
    const estado = this.carregarEstado();
    return JSON.stringify(estado, null, 2);
  }

  static importarDados(dadosJson: string): boolean {
    try {
      const dados = JSON.parse(dadosJson);
      // Validação básica da estrutura
      if (dados.disciplinas && dados.professores && dados.turmas && dados.horarios) {
        this.salvarEstado(dados);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Erro ao importar dados:', error);
      return false;
    }
  }

  static testarLocalStorage(): boolean {
    try {
      const teste = 'teste-funcionamento';
      localStorage.setItem(teste, 'ok');
      const resultado = localStorage.getItem(teste);
      localStorage.removeItem(teste);
      
      const funcionando = resultado === 'ok';
      console.log(funcionando ? '✅ localStorage funcionando' : '❌ localStorage não funciona');
      return funcionando;
    } catch (error) {
      console.error('❌ localStorage não disponível:', error);
      return false;
    }
  }

  static obterEstatisticas(): { tamanho: number; itens: number } {
    try {
      const dadosSalvos = localStorage.getItem(STORAGE_KEY);
      const tamanho = dadosSalvos ? dadosSalvos.length : 0;
      const itens = localStorage.length;
      return { tamanho, itens };
    } catch (error) {
      console.error('Erro ao obter estatísticas:', error);
      return { tamanho: 0, itens: 0 };
    }
  }
}