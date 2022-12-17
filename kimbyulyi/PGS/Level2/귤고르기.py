from collections import Counter


def solution(k, tangerine):
    answer = 0
    sum = 0
    cnt = []
    # 빈도수에 따라 정렬
    count = Counter(tangerine).most_common()

    for t in count:
        sum += t[1]
        answer += 1
        if sum >= k:
            return answer
    return answer