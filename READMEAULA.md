SOBRE O TRABALHO
=================

O objetivo é criar uma aplicação que possui a função de inserir dados em uma lista. No meu caso a lista tem que ser sobre países.

================

## Funcionalidades

- **Adicionar Lugar**: Permite adicionar novos lugares à lista.
- **Editar Lugar**: Permite editar lugares existentes.
- **Remover Lugar**: Permite remover lugares da lista.

## Hooks Utilizados

- **useState**:
  - Lugares: Armazena a lista de lugares.
  - newJogo: Armazena o valor do novo lugar a ser adicionado ou editado.
  - isEditing: Indica se o usuário está editando um lugar existente.
  - currentIndex: Armazena o índice do lugar que está sendo editado.

- **useCallback**:
  - addJogo: Função para adicionar ou salvar um lugar.
  - removeJogo: Função para remover um lugar.
  - editJogo: Função para preparar a edição de um lugar.
