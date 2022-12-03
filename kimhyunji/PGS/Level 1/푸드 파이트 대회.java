class Solution {
    public String solution(int[] food) {
        String answer = "";
        int n = 0; //입력 위치
        StringBuffer str = new StringBuffer("");
        
        for(int i=0; i<food.length; i++){
            for(int j=0; j<(food[i]/2); j++){
                str.insert(n, String.valueOf(i));
                str.insert(n, String.valueOf(i));
                n++;
            }
        }
        
        str.insert(n, "0");
        answer = str.toString();
        
        return answer;
    }
}