import { useState, useEffect } from 'react';

export function useLocalStorage(key, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const itemGuardado = localStorage.getItem(key);
      return itemGuardado ? JSON.parse(itemGuardado) : valorInicial;
    } catch (error) {
      console.error('Error leyendo localStorage:', error);
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(valor));
    } catch (error) {
      console.error('Error guardando en localStorage:', error);
    }
  }, [key, valor]);

  return [valor, setValor];
}