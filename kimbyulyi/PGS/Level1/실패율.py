def solution(N, stages):
    answer = []
    user_tmp = {}
    users = len(stages)
    for i in range(1, N + 1):
        if users != 0:
            cnt = stages.count(i)
            user_tmp[i] = cnt / users
            users -= cnt
        else:
            user_tmp[i] = 0

    return sorted(user_tmp, key=lambda x: user_tmp[x], reverse=True)
