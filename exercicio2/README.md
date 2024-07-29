# Descrição
O código desenvolvido tem como objetivo ordenar uma lista de palavras com base na frequência de um caractere específico fornecido. A ordenação é feita em ordem decrescente, ou seja, as palavras com maior frequência do caractere aparecem primeiro.

## Estrutura do Código
Função **ordenar_palavras_por_frequencia(palavras, caractere):** Esta função é o núcleo do código. Ela recebe uma lista de palavras e um caractere específico.
Função Interna **contar_caractere(palavra):** Conta a frequência de ocorrência do caractere (ignora maiúsculas e minúsculas) em uma palavra.
**Ordenação:** A lista de palavras é ordenada utilizando a função sorted(), que aplica a função contar_caractere como chave de ordenação. O argumento reverse=True garante que a ordenação seja em ordem decrescente.
A função **lower()** é um método de strings em Python que converte todos os caracteres alfabéticos de uma string para minúsculas. Isso é útil quando queremos realizar comparações ou contagens de caracteres de maneira insensível a maiúsculas e minúsculas.