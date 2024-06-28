def result():
    number = int(input())
    
    # 가장 남쪽의 역을 저장할 변수 초기화
    southmost_station = None
    
    for _ in range(number):
        x, y = map(int, input().split())
        
        # 가장 남쪽의 역을 찾기 위한 조건
        if southmost_station is None or y < southmost_station[1]:
            southmost_station = (x, y)

    # 결과 출력
    if southmost_station:
        print(f"{southmost_station[0]} {southmost_station[1]}")

# input:
# 4
# 10 5
# 6 -3
# 3 2
# 4 2
result()