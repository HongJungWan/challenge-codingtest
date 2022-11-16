import java.util.Scanner;

public class Main {

    public int solution(String str, char ch) {
        int answer = 0;
        char[] temp = str.toLowerCase().toCharArray();
        ch = Character.toLowerCase(ch);

        for (char c : temp) {
            if (c == ch) answer++;
        }

        return answer;
    }

    public static void main(String[] args) {
        Main t = new Main();
        Scanner scanner = new Scanner(System.in);
        String str = scanner.next();
        char ch = scanner.next().charAt(0);
        System.out.println(t.solution(str, ch));
    }

}