# 🧪 Automação de Testes E2E com Cypress - Projeto Automacao-Test

## 🎯 Visão Geral do Projeto

Este projeto é um portfólio de automação de testes End-to-End (E2E) desenvolvido com **Cypress**, focado em validar os fluxos de **Cadastro de Usuário** e **Login** em uma aplicação web. O projeto demonstra a aplicação de boas práticas de desenvolvimento de testes, incluindo o uso do padrão **Page Object Model (POM)** e a geração de dados dinâmicos com o **Faker.js**.

O objetivo é apresentar um conjunto de testes robustos que garantem a funcionalidade e a qualidade da interface do usuário, além de servir como um *showcase* de habilidades em automação de testes web.

## 🛠️ Tecnologias e Ferramentas Utilizadas

| Tecnologia/Ferramenta | Versão | Descrição |
| :--- | :--- | :--- |
| **Cypress** | `^14.0.1` | Framework de testes E2E moderno e rápido. |
| **@faker-js/faker** | `^10.1.0` | Biblioteca para geração de dados de teste dinâmicos e realistas. |
| **JavaScript** | ES6+ | Linguagem de programação principal para escrita dos testes. |
| **Node.js** | - | Ambiente de execução para o Cypress e gerenciamento de pacotes. |
| **Page Object Model (POM)** | - | Padrão de design para organização e manutenção do código de teste. |

## ⚙️ Estrutura do Projeto

A organização do projeto segue a convenção do Cypress, com a adição de uma camada de abstração para o Page Object Model, garantindo modularidade e fácil manutenção:

```
automacao-test-project/
├── cypress/
│   ├── e2e/             # Arquivos de especificação dos testes (Test Specs)
│   │   ├── formulario.cy.js     # Teste de fluxo de Cadastro
│   │   └── login.cy.js          # Teste de fluxo de Login
│   ├── fixtures/        # Dados estáticos externos (ex: massas de teste, arquivos de upload)
│   │   └── tela.png
│   ├── pages/           # Implementação do Page Object Model (POM)
│   │   ├── formulario.js        # Page Object para o Formulário de Cadastro
│   │   └── login.js             # Page Object para a Tela de Login
│   └── support/         # Comandos customizados e configurações globais
│       ├── commands.js
│       └── e2e.js
├── node_modules/        # Dependências do projeto
├── package.json         # Metadados e scripts do projeto
└── README_PORTFOLIO.md  # Este arquivo
```

## 💡 Destaques da Automação e Boas Práticas

O projeto incorpora diversas boas práticas de automação, conforme identificado na análise do código:

| Boa Prática | Descrição | Benefício |
| :--- | :--- | :--- |
| **Page Object Model (POM)** | Abstração da interface do usuário em classes dedicadas (`formulario.js`, `login.js`). | Alta manutenibilidade e código de teste limpo e legível. |
| **Geração de Dados Dinâmicos** | Uso do `@faker-js/faker` para preencher formulários. | Testes mais robustos, evitando dependência de dados estáticos e colisões. |
| **Simulação de Interação Humana** | Uso de `.type()` com *delays* para simular digitação humana. | Maior fidelidade ao comportamento real do usuário e prevenção de falhas por sincronização. |
| **Validação de Evidências** | Geração de *screenshots* automáticas em caso de sucesso ou falha. | Prova de execução e facilidade na análise de *bugs*. |
| **Sanitização de Dados** | Aplicação de `.normalize()` para remover acentuação e caracteres especiais. | Aumento da cobertura de testes e tratamento de dados não-ASCII. |

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e executar os testes em sua máquina local.

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado em sua máquina.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/AnaPaula-Soares/Automacao-Test.git
    cd Automacao-Test
    ```

2.  Instale as dependências do projeto:
    ```bash
    npm install
    ```

### Execução dos Testes

O Cypress oferece duas formas principais de execução: via interface gráfica (Test Runner) e via linha de comando (Headless).

#### 1. Execução via Test Runner (Interface Gráfica)

Este método é ideal para desenvolvimento e *debugging*.

```bash
npm run cypress:open
```

Ao executar o comando, o Test Runner do Cypress será aberto. Selecione os arquivos `formulario.cy.js` e `login.cy.js` para iniciar a execução interativa.

#### 2. Execução via Linha de Comando (Headless)

Este método é recomendado para integração contínua (CI) e execução rápida.

O script padrão de execução via linha de comando pode ser adicionado ao `package.json` para facilitar:

```json
"scripts": {
  "cypress:run": "cypress run"
}
```

Com o script acima, você pode executar:

```bash
npm run cypress:run
```

## 📈 Resultados e Artefatos

Após a execução dos testes, o Cypress gera artefatos importantes para análise:

*   **Screenshots:** Capturas de tela são salvas automaticamente em `cypress/screenshots/` em caso de falha no teste.
*   **Vídeos:** Um vídeo da execução de cada especificação de teste é gravado por padrão e salvo em `cypress/videos/`.

## 🧑‍💻 Autor

**Ana Paula Soares**

GitHub https://github.com/AnaPaula-Soares 
LinkedIn (https://www.linkedin.com/in/anapaulacostasoares/
---
*Este README foi gerado para fins de portfólio, destacando as boas práticas de automação de testes e a robustez dos cenários implementados.*


ao vivo

