import java.util.*;
class Solution {
    public int[] solution(int N, int[] stages) {
        int[] answer = new int[N];

        double[] nStageCnt = new double[N+1];

        for(int i=0; i<stages.length; i++) {
            if(stages[i] < N+1) {
                nStageCnt[stages[i]]++; //각 스테이지에 도달했지만 깨지 못한 인원
            }
        }

        ArrayList<Double> fail = new ArrayList<>();

        int inx = 0;

        for(int i=1; i<=N; i++){
            int stageCnt = stages.length - inx;
            inx += nStageCnt[i];
            if(nStageCnt[i] == 0){ //도달한 인원이 없으면 실패율은 0
                fail.add(0.0);
                nStageCnt[i] = 0.0;
                continue;
            }
            fail.add((double)nStageCnt[i] / stageCnt);
            nStageCnt[i] = (double)nStageCnt[i] / stageCnt;
        }

        Collections.sort(fail, Collections.reverseOrder());

        for(int i=0; i<N; i++){
            for(int j=1; j<=N; j++){
                if(fail.get(i) == nStageCnt[j]){
                    answer[i] = j;
                    nStageCnt[j] = -1;
                    break;
                }
            }
        }

        return answer;
    }
}