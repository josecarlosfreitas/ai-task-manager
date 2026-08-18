# Decisões Arquiteturais

## ADR-001 — Escopo do Projeto

### Status
Aceito

### Decisão

O projeto é um sistema simples de gerenciamento de tarefas.

O escopo inicial inclui:

- Criar tarefas
- Ler tarefas
- Atualizar tarefas
- Excluir tarefas

### Restrições

- O projeto deve permanecer simples.
- Novas funcionalidades exigem aprovação explícita.

### Consequências

- Os agentes não devem expandir o escopo do produto sem aprovação explícita.

## ADR-002 — Framework de testes

### Status

Aprovada

### Decisão

Utilizar o test runner nativo do Node.js para os testes automatizados.

### Motivo

O projeto é deliberadamente simples e não possui necessidade de um framework externo de testes neste momento.

A utilização do recurso nativo evita uma dependência adicional e mantém o projeto alinhado ao princípio de simplicidade.

### Consequências

- Não será necessário instalar Jest, Vitest ou outro framework.
- Os testes utilizarão as APIs nativas de testes do Node.js.
- A estratégia poderá ser revisada futuramente caso a complexidade dos testes aumente.

## ADR-003 — Regras de validação e comportamento do CRUD

### Status

Aprovada

### Decisão

O CRUD não terá regras de validação personalizadas além das restrições já definidas pelos tipos do domínio.

Não serão definidos limites de tamanho para `title` ou `description`.

Não será utilizada biblioteca externa de validação.

A operação de atualização será parcial. Somente os campos fornecidos serão alterados; os demais permanecerão com seus valores atuais.

Quando uma tarefa não for encontrada:

- `findById` retorna `null`;
- `update` retorna `null`;
- `delete` retorna `false`.

### Consequências

- O projeto permanece simples.
- Não serão necessárias exceções customizadas para tarefas inexistentes.
- O `createdAt` não pode ser alterado durante uma atualização.
- O `id` não pode ser alterado durante uma atualização.