import java.util.*;
class Solution {
    public String solution(String[] survey, int[] choices) {
        String answer = "";
        Map<Character, Integer> map = new HashMap<>();
        
        for(int i=0; i<survey.length; i++){ //질문 돌리기
            if(choices[i]<4){ //선택한 값이 4보다 작으면
                char c = survey[i].charAt(0); //첫번째 문자
                map.put(c, map.getOrDefault(c, 0) + 4 - choices[i]); //값 증가
            }
            else{ //선택한 값이 4보다 크면
                char c = survey[i].charAt(1); //두번째 문자
                map.put(c, map.getOrDefault(c, 0) + choices[i] - 4); //값증가
            }
        }
        
        //4개 지표 생성
        if(map.getOrDefault('R', 0) >= map.getOrDefault('T', 0)) answer+="R";
        else answer+="T";
        if(map.getOrDefault('C', 0) >= map.getOrDefault('F', 0)) answer+="C";
        else answer+="F";
        if(map.getOrDefault('J', 0) >= map.getOrDefault('M', 0)) answer+="J";
        else answer+="M";
        if(map.getOrDefault('A', 0) >= map.getOrDefault('N', 0)) answer+="A";
        else answer+="N";
        
        return answer;
    }
}