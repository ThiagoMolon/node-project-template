# React + Vite

## Resumo

Este repositório é um template mínimo para iniciar projetos React usando Vite. Fornece uma configuração pronta para desenvolvimento com HMR (Hot Module Replacement), regras básicas de ESLint e suporte aos plugins oficiais para React em Vite. É uma base leve para começar aplicações React modernas — pode ser estendida com TypeScript, regras de lint mais avançadas e otimizações de build (por exemplo, React Compiler) conforme necessário.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).
