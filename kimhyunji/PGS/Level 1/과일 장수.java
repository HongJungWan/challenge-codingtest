import java.util.Arrays;
class Solution {
    public int solution(int k, int m, int[] score) {
        int answer = 0;
        int length = score.length;
        
        Arrays.sort(score); //오름차순
        
        for(int i=length-m; i>=0; i-=m){
            answer+=(score[i]*m);
        }
        return answer;
    }
}