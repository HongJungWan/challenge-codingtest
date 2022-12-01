import java.util.Arrays;
class Solution {
    public int[] solution(int k, int[] score) {
        int[] answer = new int[k];
        int[] result = new int[score.length];
        
        for(int i=0; i<k; i++) answer[i] = 2000; //answer초기화
        
        for(int i=0; i<score.length; i++){
            if(i<k){ //k보다 작을 때
                answer[i] = score[i]; //모든 값 넣기
                Arrays.sort(answer);  //오름차순 정리
                result[i] = answer[0]; //가장 작은 값 저장
            }
            else{ //k보다 클 때
                if(score[i]>answer[0]){ //명예의 전당의 제일 작은 값보다 크면
                    answer[0] = score[i]; //값 추가
                    Arrays.sort(answer);  //오름차순 정리
                }
                result[i] = answer[0]; //가장 작은 값 저장
            }
        }
        
        return result;
    }
}