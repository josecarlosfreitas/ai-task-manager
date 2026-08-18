# CRUD de Tarefas

## Objetivo

Implementar as operações básicas de CRUD para tarefas.

## Operações Exigidas

### Criar (Create)

Criar uma tarefa com:

- título (`title`)
- descrição (`description`)
- prioridade (`priority`)

O sistema gera:

- id
- status
- data de criação (`createdAt`)

### Ler (Read)

O sistema deve permitir:

- buscar todas as tarefas;
- buscar uma tarefa por id.

### Atualizar (Update)

O sistema deve permitir atualizar:

- título (`title`)
- descrição (`description`)
- status
- prioridade (`priority`)

### Excluir (Delete)

O sistema deve permitir excluir uma tarefa por id.

## Valores Padrão Iniciais

Novas tarefas devem começar com:

- status: A FAZER (`TODO`)

## Restrições

- Não adicione funcionalidades fora desta especificação.
- Não adicione dependências externas.
- Não crie uma API HTTP.
- Não adicione persistência em banco de dados.
- Não adicione histórico de tarefas ou versionamento.

## Validação

As seguintes regras de validação estão intencionalmente indefinidas.

Não invente regras de validação sem aprovação.

## Testes

Testes automatizados são obrigatórios.

O framework de testes ainda não está definido.