def ordenar_palavras_por_frequencia(palavras, caractere):
    # Função para contar a frequência de um caractere em uma palavra
    def contar_caractere(palavra):
        return palavra.lower().count(caractere.lower())
    
    # Ordenar a lista de palavras com base na frequência do caractere, de forma decrescente
    palavras_ordenadas = sorted(palavras, key=contar_caractere, reverse=True)
    
    return palavras_ordenadas

# Exemplo de entrada
palavras = ["Gama", "Matematica", "Vestibular", "IA",]
caractere = 'a'

# Chamada da função e saída dos resultados
resultado = ordenar_palavras_por_frequencia(palavras, caractere)
print(resultado)
