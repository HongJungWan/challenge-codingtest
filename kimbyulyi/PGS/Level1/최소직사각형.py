def solution(sizes):
    answer = 0
    for i in range(len(sizes)):
        x, y = sizes[i]
        if x < y:
            sizes[i] = [y, x]

    x_arr = [j[0] for j in sizes]
    y_arr = [k[1] for k in sizes]

    answer = max(x_arr) * max(y_arr)
    return answer