import java.util.LinkedList;
import java.util.Queue;

class StackQ {
    Queue<Integer> mainQueue;
    Queue<Integer> tempQueue;

    public StackQ() {
        mainQueue = new LinkedList<>();
        tempQueue = new LinkedList<>();
    }

    public void push(int a) {
        mainQueue.offer(a);
    }

    public int pop() {
        int result = -1;

        if (mainQueue.isEmpty()) {
            return -1;
        }

        while (mainQueue.size() != 1) {
            tempQueue.offer(mainQueue.poll());
        }
        result = mainQueue.poll();

        if (!tempQueue.isEmpty()) {
            while (!tempQueue.isEmpty()) {
                mainQueue.offer(tempQueue.poll());
            }
        }

        return result;
    }
}