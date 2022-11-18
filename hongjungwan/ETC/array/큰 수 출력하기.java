import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public ArrayList<Integer> solution(int n, int[] num) {
        ArrayList<Integer> answer = new ArrayList<>();
        answer.add(num[0]);

        for (int i = 1; i < n; i++) {
            if (num[i - 1] < num[i]) answer.add(num[i]);
        }

        return answer;
    }

    public static void main(String[] args) {
        Main t = new Main();
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        int[] num = new int[n];

        for (int i = 0; i < n; i++) {
            num[i] = scanner.nextInt();
        }

        for (int x : t.solution(n, num)) {
            System.out.print(x + " ");
        }
    }

}