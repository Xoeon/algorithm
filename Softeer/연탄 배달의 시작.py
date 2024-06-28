def merry_christmas():
    # 전체 마을 수
    number = int(input())

    # 마을 간 거리 정보 저장
    location = list(map(int, input().split()))
    distances = [location[i+1] - location[i] for i in range(number - 1)]

    # 최단 거리 찾기
    lowest_distance = min(distances)

    # distances 리스트에서 lowest_distance 값이 몇 번 등장하는지 카운트
    count = distances.count(lowest_distance)

    print(count)

# input:
# 5
# 1 3 5 8 10
merry_christmas()