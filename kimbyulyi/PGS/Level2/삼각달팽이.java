//프로그래머스 삼각 달팽이
class Solution {
    public static int[] solution(int n) {
        int[][] arr = new int[n][n];

        int x = -1; //처음엔 무조건 아래쪽을 향하므로 -1로 초기화
        int y = 0;
        int num = 1;

        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                if (i % 3 == 0) { // 아래쪽을 향하는 경우
                    x++;
                } else if (i % 3 == 1) { // 오른쪽을 향하는 경우
                    y++;
                } else if (i % 3 == 2){ // 대각선 위쪽을 향하는 경우
                    x--;
                    y--;
                }
                arr[x][y] = num++;
            }
        }

        int[] answer = new int[n * (n + 1) / 2]; // 삼각형의 크기
        int idx = 0;
        for (int[] a : arr) {
            for (int b : a) {
                if (b == 0) break;  //값이 0인 경우 제외해주기
                answer[idx++] = b;
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        int[] arr = solution(4);
        for (int a : arr) {
            System.out.println(a);
        }
    }
