import java.util.HashMap;
import java.util.Scanner;

class Main {
    public String solution(String str1, String str2) {
        String answer = "NO";

        HashMap<Character, Integer> hm1 = new HashMap<>();
        HashMap<Character, Integer> hm2 = new HashMap<>();

        char[] ch1 = str1.toCharArray();
        char[] ch2 = str2.toCharArray();

        for (char c1 : ch1) hm1.put(c1, hm1.getOrDefault(c1, 0) + 1);
        for (char c2 : ch2) hm2.put(c2, hm2.getOrDefault(c2, 0) + 1);

        if (hm1.equals(hm2)) answer = "YES";

        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        Scanner kb = new Scanner(System.in);

        String str1 = kb.next();
        String str2 = kb.next();

        System.out.println(T.solution(str1, str2));
    }

}