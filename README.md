# Automação de Formulário e Login com Cypress e Faker

Este projeto contém scripts de automação desenvolvidos em **Cypress** para validar os fluxos de **cadastro de usuário** e **login** em uma aplicação web.  
Os testes utilizam a biblioteca **@faker-js/faker** para geração dinâmica de dados e seguem boas práticas de automação e validação de interface.

---

## 1. Objetivo

Automatizar os principais fluxos funcionais de cadastro e autenticação, garantindo:
- Validação de campos obrigatórios e restrições de dados.
- Comportamento correto da interface e mensagens de retorno.
- Registro de evidências por meio de screenshots.
- Execução integrada em pipelines de CI/CD.

---

## 2. Estrutura do Projeto

cypress/
├── e2e/
│ ├── formulario.cy.js # Automação do formulário de cadastro
│ ├── login.cy.js # Automação do login
│
├── fixtures/
│ └── tela.png # Imagem utilizada para upload no formulário
│
└── support/
└── commands.js # Comandos auxiliares (opcional)

yaml
Copy code

---

## 3. Tecnologias Utilizadas

- **Cypress** – Framework de testes end-to-end.  
- **Node.js** – Ambiente de execução.  
- **@faker-js/faker** – Geração dinâmica de dados (nomes, e-mails, etc).  
- **JavaScript (ES6)** – Linguagem de implementação.

### Instalação e Execução

```bash
# Clonar o repositório
git clone https://github.com/seuusuario/nome-do-repositorio.git

# Acessar o diretório
cd nome-do-repositorio

# Instalar dependências
npm install

# Executar o Cypress
npx cypress open
4. Formulário de Cadastro (formulario.cy.js)
Fluxo automatizado de preenchimento e submissão do formulário de cadastro.

Campos Validados
Campo	Tipo	Validação
Nome Completo	Texto	Obrigatório, até 255 caracteres
E-mail	Texto	Obrigatório, formato válido
Senha	Texto	Obrigatório
Confirmação de Senha	Texto	Igual à senha
Data de Nascimento	Data	Obrigatório
Gênero	Radio	Obrigatório
Telefone	Texto	Padrão (XX) XXXXX-XXXX
País	Select	Obrigatório
Estado	Select	Exibido se país = Brasil
Foto de Perfil	Upload	Formato PNG/JPG até 2MB
Termos de Uso	Checkbox	Obrigatório

Validações Executadas
Exibição do título “Cadastro de Usuário”.

Preenchimento dinâmico de dados válidos.

Upload de arquivo com sucesso.

Exibição da mensagem final: “Cadastro realizado com sucesso!”.

Geração de screenshot (formulario-cadastrado-com-sucesso.png).

5. Login (login.cy.js)
Fluxo automatizado de autenticação de usuário.

Etapas Validadas
Inserção de e-mail e senha válidos.

Acesso via botão “Acessar”.

Mensagem final: “Login realizado com sucesso! Redirecionando...”.

Captura de evidência (formulario-acessado-com-sucesso.png).

6. Boas Práticas Aplicadas
Sanitização de strings com .normalize() para remover acentuação e caracteres inválidos.

Uso de delays simulando digitação humana nos campos .type().

Validação de visibilidade e conteúdo textual antes de interagir com elementos.

Screenshots automáticas para evidência de sucesso.

Tempo de espera controlado (cy.wait()) apenas quando necessário.

7. Resultados Esperados
Ao executar os testes:

O formulário é preenchido corretamente com dados válidos.

O sistema confirma o cadastro e exibe mensagem de sucesso.

O login é realizado e a mensagem de redirecionamento é exibida.

Screenshots são armazenadas em cypress/screenshots/.

8. Autor
Paula
Gerente de Área QA | Especialista em Testes Manuais e Automatizados | DevSecOps
📧 contato: seuemail@exemplo.com

9. Tags
#Cypress #AutomacaoDeTestes #QA #QualityAssurance #DevSecOps #JavaScript #Faker #TestesE2E #WebTesting #AutomacaoWeb #GitHub
