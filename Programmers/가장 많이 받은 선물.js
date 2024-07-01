const solution = (friends, gifts) => {
  // 주고받은 선물 집계
  const giftCounts = {};
  // 전체 선물 집계
  const totalCounts = {};

  // 전체 선물, 주고받은 선물(from whom) 객체 생성
  friends.forEach((friend) => {
    giftCounts[friend] = {};
    totalCounts[friend] = { given: 0, received: 0 };

    friends.forEach((otherFriend) => {
      if (friend !== otherFriend) {
        giftCounts[friend][otherFriend] = { given: 0, received: 0 };
      }
    });
  });

  // 전체 선물, 주고받은 선물 집계
  gifts.forEach((gift) => {
    const [giver, receiver] = gift.split(" ");
    if (giftCounts[giver]) totalCounts[giver].given++;
    if (giftCounts[giver][receiver]) giftCounts[giver][receiver].given++;

    if (giftCounts[receiver]) totalCounts[receiver].received++;
    if (giftCounts[receiver][giver]) giftCounts[receiver][giver].received++;
  });

  const result = {};

  friends.forEach((friend) => {
    result[friend] = 0;

    friends.forEach((otherFriend) => {
      if (friend !== otherFriend) {
        const given = giftCounts[friend][otherFriend]?.given || 0;
        const received = giftCounts[friend][otherFriend]?.received || 0;

        if (given > received) result[friend]++;
        else if (given === received || (given === 0 && received === 0)) {
          const friendGiftIndex =
            totalCounts[friend].given - totalCounts[friend].received;
          const otherFriendGiftIndex =
            totalCounts[otherFriend].given - totalCounts[otherFriend].received;

          if (friendGiftIndex > otherFriendGiftIndex) result[friend]++;
          else if (friendGiftIndex === otherFriendGiftIndex)
            result[friend] += 0;
        }
      }
    });
  });

  return Math.max(...Object.values(result));
};
