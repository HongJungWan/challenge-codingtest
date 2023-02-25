
//프로그래머스 숫자 카드 나누기
class Solution {
    public static int solution(int[] arrayA, int[] arrayB) {
        int answer = 0;

        int gcdA = getResult(arrayA);
        int gcdB = getResult(arrayB);

        // 조건 만족여부 체크
        int resultA = check(gcdA, arrayB);
        int resultB = check(gcdB, arrayA);

        //조건을 만족하는 정수가 없는 경우
        if (resultA == 0 && resultB == 0) {
            return 0;
        }
        answer = Math.max(resultA, resultB);
        return answer;
    }

    //조건 만족 여부 체크
    public static int check(int gcd, int[] arr) {
        for (int a : arr) {
            if (a % gcd == 0) {
                return 0;
            }
        }
        return gcd;
    }

    //배열의 원소들의 최대공약수 구하기
    public static int getResult(int[] arr) {
        int result = arr[0];
        for (int i = 1; i < arr.length; i++) {
            result = getGCD(result, arr[i]);
        }
        return result;
    }

    // 최대공약수 구하기(유클리드 호제법)
    public static int getGCD(int num1, int num2) {
        if (num1 % num2 == 0) {
            return num2;
        }
        return getGCD(num2, num1 % num2);
    }

    public static void main(String[] args) {
        int[] arr1 = {10, 13};
        int[] arr2 = {5, 17};

        System.out.println(solution(arr1, arr2));

    }
}