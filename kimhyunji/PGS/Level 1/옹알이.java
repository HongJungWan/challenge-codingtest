class Solution {
    public int solution(String[] babbling) {
        int answer = 0;
        String[] b = {"aya", "ye", "woo", "ma"};
        
        for(int i=0; i<babbling.length; i++){ //babbling 개수 만큼
            for(int j=0; j<4; j++){ //4개의 문자열과 비교
                if(babbling[i].contains(b[j]) //j번째 문자열을 가지고
                  && !babbling[i].contains(b[j]+b[j])){ //j번째 문자열이 연속되지 않을 때
                      babbling[i] = babbling[i].replace(b[j], "0"); //해당 문자열 -> "0"
                }
            }
            
            babbling[i] = babbling[i].replace("0", ""); //0을 모두 지움
            
            //글자가 모두 지워졌으면(모두 발음 가능하면) answer 증가
            if(babbling[i].length() == 0) answer++;
        }
        return answer;
    }
}