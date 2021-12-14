function distanceFromHqInBlocks(num) {
    if (num <= 42) {
        return 42 - num;
    } else {
        return num - 42;
    }
}

function distanceFromHqInFeet(num) {
  const blocks = distanceFromHqInBlocks(num);
  return blocks * 264;
}

function distanceTravelledInFeet(num1, num2) {
    if (num2 > num1) {
        return ((num2 - num1)*264);
    } else {
        return ((num1 - num2)*264);
    }
}

function calculatesFarePrice(num1, num2) {
    if (num2 > num1) {
        const travelledFeet = ((num2 - num1)*264) - 400;
        if (travelledFeet < 0) {
            return 0;
        } else if (travelledFeet > 2100) {
            return 'cannot travel that far'
        } else if (travelledFeet > 1600) {
            return 25;
        } {
            return travelledFeet * 0.02;
        }
    } else {
        const travelledFeet = ((num1 - num2)*264) - 400;
        if (travelledFeet < 0) {
            return 0;
        } else if (travelledFeet > 2100) {
            return 'cannot travel that far'
        } else if (travelledFeet > 1600) {
            return 25;
        } {
            return travelledFeet * 0.02;
        }
    }
}
