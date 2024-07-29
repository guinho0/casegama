# Desafio: Descreva possíveis melhorias no código
O algoritmo original tem complexidade de tempo **O(n^2)**, onde n é o número de elementos no array. Isso ocorre porque ele utiliza dois loops aninhados para verificar todos os pares possíveis de números no array, o que pode ser ineficiente para arrays grandes.

# Melhorias Propostas:
Uso de um **HashSet** para Armazenar Complementos:

Podemos usar um HashSet para armazenar os números que faltam para completar a soma com um número atual. Isso permite verificar se o complemento de um número (valor_soma - número atual) já está presente no conjunto em tempo O(1).
Ao iterar pelo array, para cada número, verificamos se o complemento necessário para atingir o valor da soma está no HashSet. Se estiver, encontramos um par. Se não estiver, adicionamos o número atual ao conjunto para futuras verificações.
# Impacto no Tempo de Execução:

A complexidade de tempo melhora para O(n) devido ao uso de um único loop e operações de inserção/consulta O(1) no HashSet.