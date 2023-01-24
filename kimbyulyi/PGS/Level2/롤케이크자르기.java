import java.util.HashMap;
import java.util.HashSet;

class Solution {
    public static int solution(int[] topping) {
        int answer = 0;
        HashSet<Integer> older = new HashSet<>();
        HashMap<Integer, Integer> younger = new HashMap<>();

        older.add(topping[0]);
        for (int i = 1; i < topping.length; i++) {
            int number = topping[i];
            younger.put(number, younger.getOrDefault(number, 0) + 1);
        }

        for (int i = 1; i < topping.length; i++) {
            int number = topping[i];
            older.add(number);
            younger.put(number, younger.getOrDefault(number, 0) - 1);
            if (younger.get(number) == 0) {
                younger.remove(number);
            }
            if (older.size() == younger.size()) {
                answer++;
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        int[] topping = {1, 2, 1, 3, 1, 4, 1, 2};
        System.out.println(solution(topping));
    }
}