import java.lang.Math;
class Solution {
    public int solution(int number, int limit, int power) {
        int answer = 0;
        
        for(int i=1; i<=number; i++){
            int cnt = 0;
            for(int j=1; j<=Math.sqrt(i); j++){ //약수의 개수(무게) 구하기
                 if(i%j == 0){
                     if(j*j == i) cnt++; //제곱근이면 +1
                     else cnt+=2; //아니면 +2
                 }
            }
            
            if(cnt > limit) cnt = power; //제한무게보다 크면 power
            
            answer+=cnt; //모든 값 더하기
        }
        
        return answer;
    }
}