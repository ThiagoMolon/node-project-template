# Template - Frontend + Backend com Docker

Projeto template com **React + Vite** (frontend) e **Node.js + Express** (backend) containerizado com Docker Compose.

## 📋 Índice

- [Requisitos](#requisitos)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Como Executar](#como-executar)
- [Desenvolvimento](#desenvolvimento)
- [Portas](#portas)
- [Tecnologias](#tecnologias)
- [Solução de Problemas](#solução-de-problemas)

---

## 📦 Requisitos

- **Docker**: [Instalar Docker](https://docs.docker.com/install/)
- **Docker Compose**: [Instalar Docker Compose](https://docs.docker.com/compose/install/)
- **Node.js 22+** (se rodar localmente sem Docker)

---

## 📁 Estrutura do Projeto

```
template/
├── Backend/                    # API Node.js + Express
│   ├── Dockerfile
│   ├── index.js               # Ponto de entrada
│   ├── package.json
│   └── node_modules/
│
├── frontend/                  # Aplicação React + Vite
│   ├── Dockerfile
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── public/
│   └── src/
│       ├── components/        # Componentes reutilizáveis
│       ├── pages/             # Páginas da aplicação
│       ├── hooks/             # Custom hooks
│       ├── styles/            # Arquivos SCSS/CSS
│       │   ├── App.scss
│       │   └── index.scss
│       ├── utils/             # Funções utilitárias
│       ├── assets/            # Imagens, ícones, etc.
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── docker-compose.yml         # Configuração do Docker Compose
└── README.md
```

---

## 🚀 Instalação

### 1. Clone ou copie o projeto

```bash
cd template
```

### 2. Permissões Docker (Linux)

Se você estiver no Linux, adicione seu usuário ao grupo docker:

```bash
sudo usermod -aG docker $USER
```

Depois faça logout e login, ou execute:

```bash
newgrp docker
```

### 3. Configuração (Opcional)

Se precisar alterar portas ou variáveis de ambiente, edite o arquivo `docker-compose.yml`.

---

## ▶️ Como Executar

### Com Docker Compose (Recomendado)

#### Iniciar os serviços

```bash
docker-compose up
```

Ou com rebuild (se modificou Dockerfiles):

```bash
docker-compose up --build
```

#### Parar os serviços

```bash
docker-compose down
```

#### Ver logs

```bash
# Todos os serviços
docker-compose logs

# Apenas frontend
docker-compose logs frontend

# Apenas backend
docker-compose logs backend

# Seguindo em tempo real
docker-compose logs -f
```

---

## 💻 Desenvolvimento

### Estrutura de Pastas - Frontend

A pasta `src/` está organizada para melhor manutenibilidade:

- **`components/`** - Componentes React reutilizáveis
  ```jsx
  // Exemplo: src/components/Button.jsx
  function Button({ label }) {
    return <button>{label}</button>;
  }
  export default Button;
  ```

- **`pages/`** - Componentes de páginas
  ```jsx
  // Exemplo: src/pages/Home.jsx
  function Home() {
    return <h1>Página Inicial</h1>;
  }
  export default Home;
  ```

- **`hooks/`** - Custom hooks React
  ```jsx
  // Exemplo: src/hooks/useBackendStatus.js
  import { useState, useEffect } from 'react';
  
  export function useBackendStatus() {
    const [status, setStatus] = useState('');
    
    useEffect(() => {
      fetch('http://localhost:3001/api/status')
        .then(res => res.json())
        .then(data => setStatus(data.message))
        .catch(() => setStatus('Erro ao conectar'));
    }, []);
    
    return status;
  }
  ```

- **`styles/`** - Arquivos SCSS/CSS
  ```scss
  // Exemplo: src/styles/App.scss
  $primary-color: #007bff;
  
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }
  
  .button {
    background-color: $primary-color;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }
  ```

- **`utils/`** - Funções utilitárias
  ```js
  // Exemplo: src/utils/api.js
  export const API_URL = 'http://localhost:3001';
  
  export async function fetchStatus() {
    const response = await fetch(`${API_URL}/api/status`);
    return response.json();
  }
  ```

- **`assets/`** - Imagens, ícones, fontes

### Backend - Estrutura

O backend está em `Backend/index.js`. Exemplo básico:

```javascript
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Rota de status
app.get('/api/status', (req, res) => {
  res.json({ message: 'Backend rodando em http://localhost:3001' });
});

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
```

---

## 🔌 Portas

| Serviço | Porta | URL |
|---------|-------|-----|
| Frontend (Vite) | 5173 | http://localhost:5173 |
| Backend (Express) | 3001 | http://localhost:3001 |
| Debug Node.js | 9229 | ws://localhost:9229 |

---

## 🛠️ Tecnologias

### Frontend

- **React 18** - Biblioteca UI
- **Vite** - Build tool rápido
- **Sass/SCSS** - Pré-processador CSS
- **ESLint** - Linter de código

### Backend

- **Node.js 22** - Runtime JavaScript
- **Express 5** - Framework web
- **CORS** - Middleware para requisições cross-origin
- **Nodemon** - Auto-restart em desenvolvimento

### DevOps

- **Docker** - Containerização
- **Docker Compose** - Orquestração de containers

---

## 🔧 Customização

### Alterar Portas

Edite o arquivo `docker-compose.yml`:

```yaml
services:
  backend:
    ports:
      - "3002:3001"  # Mude de 3001 para 3002
  
  frontend:
    ports:
      - "5174:5173"  # Mude de 5173 para 5174
```

### Variáveis de Ambiente

Adicione um arquivo `.env` (criar na raiz):

```env
NODE_ENV=development
REACT_APP_API_URL=http://localhost:3001
```

E atualize o `docker-compose.yml` para usar:

```yaml
environment:
  - NODE_ENV=${NODE_ENV}
```

### Adicionar Dependências

#### Frontend

```bash
docker-compose exec frontend npm install <package-name>
```

Ou sem Docker:

```bash
cd frontend && npm install <package-name>
```

#### Backend

```bash
docker-compose exec backend npm install <package-name>
```

Ou sem Docker:

```bash
cd Backend && npm install <package-name>
```

---

## 🐛 Solução de Problemas

### Erro: "permission denied while trying to connect to the Docker daemon"

**Solução:**

```bash
sudo usermod -aG docker $USER
# Faça logout e login
```

Ou use `sudo` antes dos comandos:

```bash
sudo docker-compose up
```

### Erro: "unable to prepare context: path not found"

**Cause:** Caminhos incorretos no `docker-compose.yml`

**Solução:** Verifique se os caminhos dos Dockerfiles estão corretos:

```yaml
services:
  backend:
    build: ./Backend    # Deve existir essa pasta
  frontend:
    build: ./frontend   # Deve existir essa pasta
```

### Erro: "bind address already in use"

**Cause:** Porta já está em uso

**Solução:** Mude as portas no `docker-compose.yml` ou mate o processo:

```bash
# Linux/Mac
lsof -i :5173
kill -9 <PID>

# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### Frontend não compila com Vite

**Requisito:** Node.js 20.19+ ou 22.12+

```bash
# Verifique a versão
node --version

# No Dockerfile, atualize:
FROM node:22-alpine  # ou superior
```

### Hot-reload não funciona

Adicione ao `docker-compose.yml`:

```yaml
environment:
  - CHOKIDAR_USEPOLLING=true  # Para Windows/WSL2
```

---

## 📝 Próximos Passos

- [ ] Adicionar autenticação (JWT)
- [ ] Configurar banco de dados (MongoDB/PostgreSQL)
- [ ] Setup de testes (Jest, Vitest)
- [ ] CI/CD (GitHub Actions)
- [ ] Variáveis de ambiente (.env)
- [ ] Rotas dinâmicas (React Router)
- [ ] Gerenciamento de estado (Context API/Redux)

---

## 📄 Licença

Projeto aberto e livre para uso.

---

## ❓ Dúvidas?

Se tiver dúvidas, verifique os logs:

```bash
docker-compose logs -f
```

Ou consulte a documentação oficial:
- [Docker Compose Docs](https://docs.docker.com/compose/)
- [Vite Docs](https://vitejs.dev/)
- [Express Docs](https://expressjs.com/)