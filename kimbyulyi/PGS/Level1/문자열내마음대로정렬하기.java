import java.util.*;

class Solution {
    public static String[] solution(String[] strings, int n) {
        ArrayList<String> arr = new ArrayList<>();

        for (String string : strings) {
	    // 비교할 문자를 각 문자열 맨 앞에 붙여주기
            arr.add("" + string.charAt(n) + string);
        }
        Collections.sort(arr);  //오름차순 정렬

        String[] answer = new String[arr.size()];
        for (int i = 0; i < answer.length; i++) {
            answer[i] = arr.get(i).substring(1);
            System.out.println(answer[i]);
        }
        return answer;
    }
}