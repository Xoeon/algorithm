def highest_price():
    # 배낭에 담을 수 있는 최대 양과 보석의 수 저장
    limit, number = map(int, input().split())
    options = []

    # 각 보석의 양과 가격을 options 리스트에 추가
    for _ in range(number):
        jewelry_amount, jewelry_price = map(int, input().split())
        options.append((jewelry_amount, jewelry_price))

    # 가격을 기준으로 내림차순 정렬
    options.sort(key=lambda x: x[1], reverse=True)

    # 배낭에 들은 보석의 총 무게와 가격
    total_amount = 0
    total_price = 0

    # 정렬된 보석 리스트를 순회하며 한도 내에서 최대한 비싼 보석을 선택
    for amount, price in options:
        if total_amount + amount <= limit:
            total_amount += amount
            total_price += amount * price
        else:
            remaining_amount = limit - total_amount
            total_price += remaining_amount * price
            break

    print(total_price)

highest_price()
