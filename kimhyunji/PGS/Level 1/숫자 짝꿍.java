import java.lang.Math;
class Solution {
    public String solution(String X, String Y) {
        String answer = "";

        for(int i=9; i>=0; i--){ //9~0까지 탐색
            String s = Integer.toString(i); //int형을 String으로
            if(X.contains(s) && Y.contains(s)){ //X와 Y가 모두 숫자를 포함하고 있으면
                //X와 Y 공통으로 가진 개수
                int cnt = Math.min(X.length() - X.replace(s, "").length(),
                                  Y.length() - Y.replace(s, "").length());
                
                //answer에 아무것도  없고, i가 0이면, 답은 0
                if(answer.length() == 0 && i == 0) {
                    answer = "0";
                    break;
                }
                
                //answer에 공통 값 반복해서 입력
                answer = answer.format("%s%s", answer, s.repeat(cnt));
            }
        }
        
        //공통된 답이 아무것도 없으면 -1
        if(answer.length() == 0) answer = "-1";
        return answer;
    }
}