import java.util.HashSet;

public class SomaPares {
    public static void main(String[] args) {
        int[] numeros = {1, 4, 5, 2, 7, 9, -1};
        int valor_soma = 6;
        encontrarPares(numeros, valor_soma);
    }

    public static void encontrarPares(int[] numeros, int valor_soma) {
        HashSet<Integer> set = new HashSet<>();
        for (int numero : numeros) {
            int complemento = valor_soma - numero;
            if (set.contains(complemento)) {
                System.out.println("Pares: (" + complemento + ", " + numero + ")");
            }
            set.add(numero);
        }
    }
}
