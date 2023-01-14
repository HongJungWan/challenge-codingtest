/**
 * 풀이 시간 : 7분
 */
class 문자열_나누기 {
    public int solution(String s) {
        int answer = 0;
        char temp = ' ';
        int[] x = new int[2];   // [0] : same, [1] : different
        char[] array = s.toCharArray();
        for (char c : array) {
            if (x[0] == 0) {
                x[0]++;
                answer++;
                temp = c;
                continue;
            }
            if (temp == c) {
                x[0]++;
            } else {
                x[1]++;
            }
            if (x[0] == x[1]) {
                x = new int[2];
            }
        }
        return answer;
    }
}