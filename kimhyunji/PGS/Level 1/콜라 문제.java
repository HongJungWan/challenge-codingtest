class Solution {
    public int solution(int a, int b, int n) {
        int answer = 0;
        
        while(n>=a){ //콜라가 마트 조건보다 많을 때
            int k = n%a; //마트에 바꾸고 남은 콜라
            n = (int)(n/a)*b; //빈병을 b개의 콜라병으로 바꾸기
            
            answer += n; //바꾼 콜라병 수 더하기
             
            n += k; //남아있던 콜라 더하기
        }
        
        return answer;
    }
}