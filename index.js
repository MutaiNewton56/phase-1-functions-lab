// Code your solution in this file!

// Function to calculate distance from Scuber's headquarters in blocks
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}

// Function to calculate distance from Scuber's headquarters in feet
function distanceFromHqInFeet(pickupLocation) {
  const blockLengthInFeet = 264;
  return distanceFromHqInBlocks(pickupLocation) * blockLengthInFeet;
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(startBlock, endBlock) {
  const blockLengthInFeet = 264;
  return Math.abs(endBlock - startBlock) * blockLengthInFeet;
}
// Function to calculate fare price
function calculatesFarePrice(startBlock, endBlock) {
  const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);

  if (distanceInFeet <= 400) {
      return 0; // First 400 feet are free
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      // Calculate fare for distance between 400 and 2000 feet
      return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      // Flat fare for distance between 2000 and 2500 feet
      return 25;
  } else {
      // Distance over 2500 feet
      return 'cannot travel that far';
  }
}


console.log(distanceFromHqInBlocks(50)); // Output: 8
console.log(distanceFromHqInFeet(50)); // Output: 2112 (8 * 264)
console.log(distanceTravelledInFeet(34, 38)); // Output: 1056 ((38-34) * 264)

console.log(calculatesFarePrice(34, 38)); // Output: 2.56 (1056 * 0.02)
console.log(calculatesFarePrice(34, 42)); // Output: 25 (Flat fare for 8 blocks)
console.log(calculatesFarePrice(34, 50)); // Output: 'cannot travel that far'