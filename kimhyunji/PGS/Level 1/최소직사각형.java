import java.lang.Math;
class Solution {
    public int solution(int[][] sizes) {
        int answer = 0;
        int mMax = 0;
        int hMax = 0;
        
        for(int i=0; i<sizes.length; i++){ //큰값을 0열, 작은값을 1열
            if(sizes[i][1] > sizes[i][0]){
                int tmp = sizes[i][0];
                sizes[i][0] = sizes[i][1];
                sizes[i][1] = tmp;
            }
        }
        
        for(int i=0; i<sizes.length; i++){ //0열의 최대값, 1열의 최대값
            if(sizes[i][0] > mMax) mMax = sizes[i][0];
            if(sizes[i][1] > hMax) hMax = sizes[i][1];
        }
        
        answer = mMax*hMax;
        
        return answer;
    }
}