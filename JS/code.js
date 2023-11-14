function displayMiddleNumber(numbers) {
    const length = numbers.length;
  
    if (length % 2 === 0) {
      // If the array has an even number of elements, return the two middle numbers
      const middleIndex1 = length / 2 - 1;
      const middleIndex2 = length / 2;
      console.log(`Two middle numbers: ${numbers[middleIndex1]}, ${numbers[middleIndex2]}`);
    } else {
      // If the array has an odd number of elements, return the middle number
      const middleIndex = Math.floor(length / 2);
      console.log(`Middle number: ${numbers[middleIndex]}`);
    }
  }
  
  // Example usage with the provided array
  let numbers = [12, 18, 11, 5, 8, 2];
  displayMiddleNumber(numbers);