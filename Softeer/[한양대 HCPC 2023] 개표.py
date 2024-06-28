def vote():
    # 후보의 수
    number = int(input())

    # 후보 투표 결과
    result = [None] * number

    for i in range(number):
        # 개표 수 할당
        result[i] = int(input())
        
        pluses = '++++ ' * (result[i] // 5)
        pipes = '|' * (result[i] % 5)
        
        print(pluses + pipes)

# input: 3 12 1 5
vote()