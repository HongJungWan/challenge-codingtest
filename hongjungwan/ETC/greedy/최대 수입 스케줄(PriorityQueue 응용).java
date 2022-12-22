import java.util.ArrayList;
import java.util.Collections;
import java.util.PriorityQueue;
import java.util.Scanner;

class Lecture implements Comparable<Lecture> {
    public int money;
    public int time;

    Lecture(int money, int time) {
        this.money = money;
        this.time = time;
    }

    @Override
    public int compareTo(Lecture ob) {
        return ob.time - this.time;
    }

}

class Main {
    static int n, max = Integer.MIN_VALUE;

    public int solution(ArrayList<Lecture> arr) {
        int answer = 0;
        PriorityQueue<Integer> priorityQ = new PriorityQueue<>(Collections.reverseOrder()); // 제일 큰 값을 우선순위

        Collections.sort(arr);

        int j = 0;
        for (int i = max; i >= 1; i--) {
            for (; j < n; j++) {
                if (arr.get(j).time < i) break;
                priorityQ.offer(arr.get(j).money);
            }

            if (!priorityQ.isEmpty()) answer += priorityQ.poll();
        }

        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        Scanner kb = new Scanner(System.in);
        ArrayList<Lecture> arr = new ArrayList<>();

        n = kb.nextInt();

        for (int i = 0; i < n; i++) {
            int m = kb.nextInt();
            int d = kb.nextInt();

            arr.add(new Lecture(m, d));

            if (d > max) max = d;
        }

        System.out.println(T.solution(arr));
    }

}