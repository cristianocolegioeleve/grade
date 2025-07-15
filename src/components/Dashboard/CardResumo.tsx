import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardResumoProps {
  titulo: string;
  valor: number;
  icone: LucideIcon;
  cor: 'blue' | 'green' | 'purple' | 'orange' | 'red';
}

const coresMap = {
  blue: {
    fundo: 'bg-blue-50',
    icone: 'text-blue-600',
    valor: 'text-blue-900'
  },
  green: {
    fundo: 'bg-green-50',
    icone: 'text-green-600',
    valor: 'text-green-900'
  },
  purple: {
    fundo: 'bg-purple-50',
    icone: 'text-purple-600',
    valor: 'text-purple-900'
  },
  orange: {
    fundo: 'bg-orange-50',
    icone: 'text-orange-600',
    valor: 'text-orange-900'
  },
  red: {
    fundo: 'bg-red-50',
    icone: 'text-red-600',
    valor: 'text-red-900'
  }
};

export function CardResumo({ titulo, valor, icone: Icone, cor }: CardResumoProps) {
  const cores = coresMap[cor];
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-600">{titulo}</p>
          <p className={`text-3xl font-bold ${cores.valor}`}>{valor}</p>
        </div>
        
        <div className={`p-3 rounded-lg ${cores.fundo}`}>
          <Icone className={`h-8 w-8 ${cores.icone}`} />
        </div>
      </div>
    </div>
  );
}