class Main {
    public void DFS(int n) {
        if (n == 0) return;
        else {
            DFS(n / 2);
            System.out.print(n % 2);
        }
    }

    public void solution(int n) {
        DFS(n);
    }

    public static void main(String[] args) {
        Main T = new Main();
        T.solution(11);
    }

}
