import java.util.Arrays;

/**
 * 풀이 시간 : 4분
 */
public class 최댓값과_최솟값 {
    private static int getMax(int[] array) {
        return array[array.length - 1];
    }

    private static int getMin(int[] array) {
        return array[0];
    }

    public StringBuilder solution(String s) {
        StringBuilder answer = new StringBuilder();
        int[] array = Arrays.stream(s.split(" ")).mapToInt(Integer::parseInt).sorted().toArray();
        answer.append(getMin(array)).append(" ").append(getMax(array));
        return answer;
    }
}