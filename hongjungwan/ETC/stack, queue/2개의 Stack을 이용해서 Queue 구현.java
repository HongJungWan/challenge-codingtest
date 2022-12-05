import java.util.Stack;

class Qstack {
    Stack<Integer> inStack;
    Stack<Integer> outStack;

    public Qstack() {
        inStack = new Stack<>();
        outStack = new Stack<>();
    }

    public void enqueue(int a) {
        inStack.push(a);
    }

    public int dequeue() {
        int result = -1;

        if (outStack.isEmpty()) {
            while (!inStack.isEmpty()) {
                outStack.push(inStack.pop());
            }
            result = outStack.pop();
        }

        if (!outStack.isEmpty()) {
            while (!outStack.isEmpty()) {
                inStack.push(outStack.pop());
            }
        }

        return result;
    }
}