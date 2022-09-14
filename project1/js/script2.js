const sumSquareDifference = (number) => {
   let counter = 1;
   let sqCounter = 0;
   let squareCounter = 0;


   while (counter <= number) {
      sqCounter += counter ** 2;
      squareCounter += counter;
      counter += 1;
   }
   return (squareCounter ** 2) - sqCounter;
}


console.log(sumSquareDifference(42));