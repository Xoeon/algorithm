function solution(bridge_length, weight, truck_weights) {
  let sec = 0;
  let bridge = Array(bridge_length).fill(0);
  let bridgeWeight = 0;

  while (truck_weights.length > 0 || bridgeWeight > 0) {
    const exitingTruck = bridge.shift();
    bridgeWeight -= exitingTruck;

    if (truck_weights.length > 0 && bridgeWeight + truck_weights[0] <= weight) {
      const newTruck = truck_weights.shift();
      bridge.push(newTruck);
      bridgeWeight += newTruck;
    } else {
      bridge.push(0);
    }

    sec++;
  }

  return sec;
}
