import java.util.Scanner;

public class Main {

    public String solution(String str) {
        String answer = "";
        char[] ch = str.toCharArray();

        for (char c : ch) {
            if (Character.isLowerCase(c)) answer += Character.toUpperCase(c);
            else answer += Character.toLowerCase(c);
        }

        return answer;
    }

    public static void main(String[] args) {
        Main t = new Main();
        Scanner scanner = new Scanner(System.in);
        String str = scanner.next();
        System.out.println(t.solution(str));
    }

}