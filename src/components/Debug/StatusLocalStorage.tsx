import React, { useState, useEffect } from 'react';
import { LocalStorageService } from '../../services/localStorage';
import { useSistema } from '../../context/SistemaContext';
import { Info, AlertCircle, CheckCircle, Download, Upload } from 'lucide-react';

export function StatusLocalStorage() {
  const { estado } = useSistema();
  const [stats, setStats] = useState({ tamanho: 0, itens: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateStats = () => {
      setStats(LocalStorageService.obterEstatisticas());
    };
    
    updateStats();
    const interval = setInterval(updateStats, 2000); // Atualiza a cada 2 segundos
    
    return () => clearInterval(interval);
  }, [estado]);

  const handleExportar = () => {
    const dados = LocalStorageService.exportarDados();
    const blob = new Blob([dados], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup-sistema-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dados = e.target?.result as string;
        if (LocalStorageService.importarDados(dados)) {
          alert('Dados importados com sucesso! Recarregue a página.');
        } else {
          alert('Erro ao importar dados. Verifique o arquivo.');
        }
      };
      reader.readAsText(file);
    }
  };

  const formatTamanho = (bytes: number) => {
    if (bytes < 1024) return `${bytes} bytes`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        title="Status do Sistema"
      >
        <Info className="h-5 w-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Status do Sistema</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>

      <div className="space-y-3">
        {/* Status do localStorage */}
        <div className="flex items-center space-x-2">
          {LocalStorageService.testarLocalStorage() ? (
            <CheckCircle className="h-4 w-4 text-green-600" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-600" />
          )}
          <span className="text-xs text-gray-600">
            localStorage {LocalStorageService.testarLocalStorage() ? 'funcionando' : 'com problema'}
          </span>
        </div>

        {/* Estatísticas */}
        <div className="text-xs text-gray-600 space-y-1">
          <div>Disciplinas: {estado.disciplinas.length}</div>
          <div>Professores: {estado.professores.length}</div>
          <div>Turmas: {estado.turmas.length}</div>
          <div>Horários: {estado.horarios.length}</div>
          <div>Tamanho: {formatTamanho(stats.tamanho)}</div>
        </div>

        {/* Ações */}
        <div className="flex space-x-2">
          <button
            onClick={handleExportar}
            className="flex items-center space-x-1 px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
          >
            <Download className="h-3 w-3" />
            <span>Backup</span>
          </button>
          
          <label className="flex items-center space-x-1 px-2 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors cursor-pointer">
            <Upload className="h-3 w-3" />
            <span>Importar</span>
            <input
              type="file"
              accept=".json"
              onChange={handleImportar}
              className="hidden"
            />
          </label>
        </div>

        {/* Botão de reset */}
        <button
          onClick={() => {
            if (window.confirm('Isso irá limpar todos os dados! Tem certeza?')) {
              LocalStorageService.limparDados();
              window.location.reload();
            }
          }}
          className="w-full text-xs px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
        >
          Resetar Sistema
        </button>
      </div>
    </div>
  );
}
