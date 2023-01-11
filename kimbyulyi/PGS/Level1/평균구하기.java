package PGS.Level1;

import java.util.Arrays;

public class Avg {
    public static double solution(int[] arr) {
        double answer = 0;
        answer = Arrays.stream(arr).average().orElse(0);
        return answer;
    }

    public static void main(String[] args) {
        int[] arr = {1,2,3,4};
        System.out.println(solution(arr));
    }
}
