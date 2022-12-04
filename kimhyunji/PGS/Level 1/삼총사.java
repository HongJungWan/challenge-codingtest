class Solution {
    public int solution(int[] number) {
        int answer = 0;
        int[] n = new int[3]; //세 명의 학생번호
        
        for(int i=0; i<number.length; i++){
            n[0] = number[i]; //첫번째 학생
            for(int j=i+1; j<number.length; j++){
                n[1] = number[j]; //두번째 학생
                for(int k = j+1; k<number.length; k++){
                    n[2] = number[k]; //세번째 학생
                    if(n[0] + n[1] + n[2] == 0) answer++; //값이 0이면
                }
            }
        }
        return answer;
    }
}