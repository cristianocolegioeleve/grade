import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff, RefreshCw, Server, AlertTriangle } from 'lucide-react';
import { useSistema } from '../../context/SistemaContext';
import { apiService } from '../../services/apiService';

export function StatusConexaoAPI() {
  const { testarConexaoAPI, carregarDados, carregando, erro } = useSistema();
  const [statusConexao, setStatusConexao] = useState<'conectado' | 'desconectado' | 'testando'>('testando');
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
  const [ultimoTeste, setUltimoTeste] = useState<Date>(new Date());

  const testarConexao = async () => {
    setStatusConexao('testando');
    try {
      const conectado = await testarConexaoAPI();
      setStatusConexao(conectado ? 'conectado' : 'desconectado');
      setUltimoTeste(new Date());
    } catch (error) {
      setStatusConexao('desconectado');
      setUltimoTeste(new Date());
    }
  };

  const recarregarDados = async () => {
    await carregarDados();
    await testarConexao();
  };

  // Testar conexão ao carregar componente
  useEffect(() => {
    testarConexao();
  }, []);

  // Testar conexão automaticamente a cada 60 segundos
  useEffect(() => {
    const interval = setInterval(testarConexao, 60000);
    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = () => {
    switch (statusConexao) {
      case 'conectado':
        return <Wifi className="w-4 h-4 text-green-500" />;
      case 'desconectado':
        return <WifiOff className="w-4 h-4 text-red-500" />;
      case 'testando':
        return <RefreshCw className="w-4 h-4 text-yellow-500 animate-spin" />;
    }
  };

  const getStatusColor = () => {
    switch (statusConexao) {
      case 'conectado':
        return 'bg-green-100 border-green-300 text-green-800';
      case 'desconectado':
        return 'bg-red-100 border-red-300 text-red-800';
      case 'testando':
        return 'bg-yellow-100 border-yellow-300 text-yellow-800';
    }
  };

  const getStatusText = () => {
    switch (statusConexao) {
      case 'conectado':
        return 'API Conectada';
      case 'desconectado':
        return 'API Desconectada';
      case 'testando':
        return 'Testando...';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Botão principal */}
      <button
        onClick={() => setMostrarDetalhes(!mostrarDetalhes)}
        className={`px-3 py-2 rounded-lg border shadow-lg transition-all duration-200 flex items-center gap-2 ${getStatusColor()}`}
      >
        {getStatusIcon()}
        <span className="text-sm font-medium">{getStatusText()}</span>
      </button>

      {/* Painel de detalhes */}
      {mostrarDetalhes && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-80 z-50">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Status da API</h3>
              </div>
              <button
                onClick={() => setMostrarDetalhes(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {/* Status atual */}
            <div className={`p-3 rounded-lg border ${getStatusColor()}`}>
              <div className="flex items-center gap-2 mb-2">
                {getStatusIcon()}
                <span className="font-medium">{getStatusText()}</span>
              </div>
              <p className="text-xs">
                Último teste: {ultimoTeste.toLocaleTimeString()}
              </p>
            </div>

            {/* Informações da API */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">URL da API:</span>
                <span className="font-mono text-xs">{apiService.getBaseUrl()}</span>
              </div>
              
              {carregando && (
                <div className="flex items-center gap-2 text-blue-600">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Carregando dados...</span>
                </div>
              )}
              
              {erro && (
                <div className="flex items-center gap-2 text-red-600">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-xs">{erro}</span>
                </div>
              )}
            </div>

            {/* Ações */}
            <div className="flex gap-2">
              <button
                onClick={testarConexao}
                disabled={statusConexao === 'testando'}
                className="flex-1 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 flex items-center justify-center gap-2 text-sm"
              >
                <RefreshCw className={`w-4 h-4 ${statusConexao === 'testando' ? 'animate-spin' : ''}`} />
                Testar
              </button>
              
              <button
                onClick={recarregarDados}
                disabled={carregando || statusConexao === 'desconectado'}
                className="flex-1 px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 flex items-center justify-center gap-2 text-sm"
              >
                <RefreshCw className={`w-4 h-4 ${carregando ? 'animate-spin' : ''}`} />
                Recarregar
              </button>
            </div>

            {/* Dicas */}
            <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
              <p className="font-medium mb-1">💡 Dicas:</p>
              <ul className="space-y-1">
                <li>• Verifique se o backend está rodando</li>
                <li>• URL padrão: http://localhost:3001</li>
                <li>• Teste automático a cada 60 segundos</li>
              </ul>
            </div>

            {statusConexao === 'desconectado' && (
              <div className="bg-red-50 border border-red-200 rounded p-3">
                <div className="flex items-center gap-2 text-red-700 mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="font-medium">Problema de Conexão</span>
                </div>
                <p className="text-xs text-red-600 mb-2">
                  Não foi possível conectar com a API. Verifique se:
                </p>
                <ul className="text-xs text-red-600 space-y-1">
                  <li>• O servidor backend está rodando</li>
                  <li>• A URL da API está correta</li>
                  <li>• Não há problemas de rede</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
