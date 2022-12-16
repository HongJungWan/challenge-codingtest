import java.util.*;
class Solution {
    public int[] solution(String s) {
        int[] answer = new int[s.length()]; //정답
        ArrayList<Character> list = new ArrayList<>(); //읽은 문자 저장

        for(int i=0; i<s.length(); i++){ //앞에서부터 s 한글자씩 읽기
            if(list.contains(s.charAt(i))){ //해당 글자가 리스트에 있으면
                answer[i] = list.size() - list.indexOf(s.charAt(i)); //본인위치-글자위치
                list.set(list.indexOf(s.charAt(i)), ' '); //중복된 앞 문자는 공백 처리
            }
            else answer[i] = -1; //글자가 리스트에 없으면 -1

            list.add(s.charAt(i)); //읽은 글자는 리스트에 추가
        }

        return answer;
    }
}