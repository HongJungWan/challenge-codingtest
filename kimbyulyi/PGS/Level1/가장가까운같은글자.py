def solution(s):
    answer = [0] * len(s)
    for i in range(len(s)):
        tmp = s[0:i]
        if s[i] in tmp:
            answer[i] = i - tmp.rfind(s[i])
            print(answer[i])
        else:
            answer[i] = -1

    return answer

s = "banana"
print(solution(s))