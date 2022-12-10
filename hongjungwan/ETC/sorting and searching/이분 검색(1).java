import java.util.Arrays;
import java.util.Scanner;

class Main {
    public int solution(int n, int k, int[] arr) {
        int answer = 0;

        Arrays.sort(arr);

        for (int i = 0; i < n; i++) {
            answer++;
            if (arr[i] == k) break;
        }

        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        Scanner kb = new Scanner(System.in);

        int n = kb.nextInt();
        int k = kb.nextInt();

        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = kb.nextInt();
        }

        System.out.println(T.solution(n, k, arr));
    }

}
