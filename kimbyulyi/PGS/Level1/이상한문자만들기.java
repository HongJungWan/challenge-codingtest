package PGS.Level1;

public class StrangeString {

    public static StringBuilder solution(String s) {

        StringBuilder answer = new StringBuilder();
        String[] tmp = s.split(""); //문자열 배열로 변경
        int cnt = 0;

        for (String string : tmp) {
            //새로운 단어가 시작될 때마다 cnt를 0으로
            cnt = string.contains(" ") ? 0 : cnt + 1;
            answer.append(cnt % 2 == 1 ? string.toUpperCase() : string.toLowerCase()) ;
        }
        return answer;
    }

    public static void main(String[] args) {
        String s = "try hello world";
        System.out.println(solution(s));
    }
}
