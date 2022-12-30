import java.util.PriorityQueue;
import java.util.Scanner;

public class Main {
    public int solution(PriorityQueue<Integer> pq) {
        int answer = 0, dataOne = 0, dataTwo = 0;

        while (pq.size() != 1) {
            dataOne = pq.remove();
            dataTwo = pq.remove();

            answer += dataOne + dataTwo;
            pq.add(dataOne + dataTwo);
        }

        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        Scanner sc = new Scanner(System.in);
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        int n = sc.nextInt();

        for (int i = 0; i < n; i++) {
            int data = sc.nextInt();
            pq.add(data);
        }

        System.out.println(T.solution(pq));
    }

}