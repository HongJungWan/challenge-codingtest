class Main {
    static int[] fibo;

    public int DFS(int n) {
        if (fibo[n] > 0) return fibo[n];
        if (n == 1) return fibo[n] = 1;
        else if (n == 2) return fibo[n] = 1;
        else return fibo[n] = DFS(n - 2) + DFS(n - 1);
    }

    public static void main(String[] args) {
        Main T = new Main();

        int n = 10;
        fibo = new int[n + 1];

        T.DFS(n);

        for (int i = 1; i <= n; i++) System.out.print(fibo[i] + " ");
    }

}