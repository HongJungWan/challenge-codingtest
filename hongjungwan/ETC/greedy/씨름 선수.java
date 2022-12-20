import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

class Body implements Comparable<Body> {
    public int h, w;

    Body(int h, int w) {
        this.h = h;
        this.w = w;
    }

    @Override
    public int compareTo(Body o) {
        return o.h - this.h;
    }

}

class Main {
    public int solution(ArrayList<Body> arr, int n) {
        int cnt = 0;
        int max = Integer.MIN_VALUE;

        Collections.sort(arr);

        for (Body ob : arr) {
            if (ob.w > max) {
                max = ob.w;
                cnt++;
            }
        }

        return cnt;
    }

    public static void main(String[] args) {
        Main T = new Main();
        Scanner kb = new Scanner(System.in);
        ArrayList<Body> arr = new ArrayList<>();

        int n = kb.nextInt();

        for (int i = 0; i < n; i++) {
            int h = kb.nextInt();
            int w = kb.nextInt();

            arr.add(new Body(h, w));
        }

        System.out.println(T.solution(arr, n));
    }

}