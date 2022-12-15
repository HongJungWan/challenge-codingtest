function solution(n) {
    var answer = 0;

    if ( n <= 3000) {
        for (i = 0; i <= n; i++) {
            if (n % i == 0) {
                answer += i;
            }
            else {
                answer += 0;
            }
        }  
    }
    return answer;
}