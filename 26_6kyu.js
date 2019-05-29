function isPrime(number) {
  if (number <= 1) return false;

  // The check for the number 2 and 3
  if (number <= 3) return true;

  if (number % 2 == 0 || number % 3 == 0) return false;

  for (var i = 5; i * i <= number; i = i + 6) {
    if (number % i == 0 || number % (i + 2) == 0) return false;
  }

  return true;
}
// ---------------------------------------------

//
function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i == 0) return false;
  return num >= 2;
}
// ---------------------------------------------

//
function isPrime(num) {
  var prime = true;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
    }
  }
  return num < 2 ? false : prime;
}
