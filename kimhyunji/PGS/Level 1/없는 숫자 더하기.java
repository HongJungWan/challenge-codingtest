class Solution {
    public int solution(int[] numbers) {
        int answer = -1;
        int sum = 0;
        
        for(int i=0; i<numbers.length; i++) sum+=numbers[i];
        
        if((45-sum)>0) answer = 45-sum;
        
        return answer;
    }
}