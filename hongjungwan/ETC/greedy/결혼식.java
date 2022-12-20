import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

class Time implements Comparable<Time> {
    public int time;
    public char state;

    Time(int time, char state) {
        this.time = time;
        this.state = state;
    }

    @Override
    public int compareTo(Time ob) {
        if (this.time == ob.time) return this.state - ob.state;
        else return this.time - ob.time;
    }

}

class Main {
    public int solution(ArrayList<Time> arr) {
        int answer = Integer.MIN_VALUE;
        int cnt = 0;

        Collections.sort(arr);

        for (Time ob : arr) {
            if (ob.state == 's') cnt++;
            else cnt--;

            answer = Math.max(answer, cnt);
        }

        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        Scanner kb = new Scanner(System.in);
        ArrayList<Time> arr = new ArrayList<>();

        int n = kb.nextInt();

        for (int i = 0; i < n; i++) {
            int s = kb.nextInt();
            int e = kb.nextInt();

            arr.add(new Time(s, 's'));
            arr.add(new Time(e, 'e'));
        }

        System.out.println(T.solution(arr));
    }

}