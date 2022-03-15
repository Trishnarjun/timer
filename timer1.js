let userInput = process.argv;
userInput.sort((a, b) => a - b).splice(0,2);
const userInputmapped = userInput.map(x => Number(x));
console.log(userInputmapped);
for (let i = 0; i <= userInput.length; i++) {
  if (userInputmapped[i] >= 0) {
    setTimeout(() => {process.stdout.write('\x07')}, userInputmapped[i] * 1000);
  }
}