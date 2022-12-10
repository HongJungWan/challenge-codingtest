import java.util.Arrays;
import java.util.Scanner;

class Main {
    public int solution(int n, int m, int[] arr) {
        int answer = 0, lt = 0, rt = n - 1;

        Arrays.sort(arr);
        
        while (lt <= rt) {
            int mid = (lt + rt) / 2;

            if (arr[mid] == m) {
                answer = mid + 1;
                break;
            }

            if (arr[mid] > m) rt = mid - 1;
            else lt = mid + 1;
        }

        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        Scanner kb = new Scanner(System.in);

        int n = kb.nextInt();
        int m = kb.nextInt();

        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = kb.nextInt();

        System.out.println(T.solution(n, m, arr));
    }

}