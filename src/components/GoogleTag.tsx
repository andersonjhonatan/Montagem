"use client";
import { useEffect } from 'react';

const GoogleTagManager = () => {
  useEffect(() => {
    // Cria o script tag de forma dinâmica
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-404119033";
    document.head.appendChild(script);

    // Adiciona o restante do código de configuração
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-404119033');
    `;
    document.head.appendChild(inlineScript);

    // Limpeza: remove os scripts ao desmontar o componente
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(inlineScript);
    };
  }, []);

  return null;
};

export default GoogleTagManager;
