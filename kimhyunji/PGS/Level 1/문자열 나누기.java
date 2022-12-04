import java.util.*;
class Solution {
    public int solution(String s) {
        int answer = 0; //정답
        char x = '0';   //문자열 첫번째 값(0으로 초기화)
        int cnt1 = 0;   //x와 같은 문자 개수
        int cnt2 = 0;   //x와 다른 문자 개수
        Queue<Character> q = new LinkedList<>();
        
        for(int i=0; i<s.length(); i++){ //문자열 큐에 모두 넣기
            q.add(s.charAt(i));
        }
        
        while(q.size()>1){ //q에 남은 값이 1개 이하면 멈춤
            if(x == '0') { //x에 값이 없음(0)
                x = q.poll(); //x = 현재 q의 첫번째 값
                cnt1++;//x와 같은 문자 개수 +1
            }
                
            if(x == q.poll()) cnt1++; //q의 다음 값이 x와 같으면 
            else cnt2++; //다르면
            
            if(cnt1 == cnt2){ //두 값이 같아지면
                answer++; //개수 증가
                x = '0';  //모든 값 초기화
                cnt1 = 0;
                cnt2 = 0;
            }
        }
        
        if(q.size() > 0) answer++; //큐에 남은 값이 있으면 answer+1
        
        return answer;
    }
}