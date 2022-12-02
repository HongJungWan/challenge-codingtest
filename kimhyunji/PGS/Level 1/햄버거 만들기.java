import java.util.*;
class Solution {
    public int solution(int[] ingredient) {
        int answer = 0;
        Stack<Integer> s = new Stack<Integer>();
        
        for(int i : ingredient){
            s.push(i); //스택에 값 추가
            
            if(s.size()>=4){ //스택에 4개 이상 들어있을 때
                //1231순서대로 들어있으면
                if(s.get(s.size()-4) == 1 && s.get(s.size()-3) == 2
                  && s.get(s.size()-2) == 3 && s.get(s.size()-1) == 1){
                    
                    answer++; //완성된 개수 추가
                    s.pop();s.pop();s.pop();s.pop();//값 빼기
                }
            }
        }
        return answer;
    }
}