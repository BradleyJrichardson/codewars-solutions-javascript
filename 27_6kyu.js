// Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount. The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). Therefor the dictionary returned should contain exactly 4 key/value pairs.

// Notes:

// If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
// If a float is passed into the function, its value should be be rounded down, and the resulting dictionary should never contain fractions of a coin.
// Examples
// loose_change(56)    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
// loose_change(-435)  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
// loose_change(4.935) ==>  {'Nickels':

// Pennies (1¢)
// Nickels (5¢)
// Dimes (10¢)
// Quarters (25¢)
// using the math.floor method to round down to the nearest integar
const looseChange = cents => {
  const quarter = 25;
  const dime = 10;
  const nickel = 5;
  const pennie = 1;

  dictionary = {
    Nickels: 0,
    Pennies: 0,
    Dimes: 0,
    Quarters: 0
  };

  if (cents < 0) {
    return dictionary;
  } else {
    let roundedCents = Math.floor(cents);

    const quarters = Math.floor(roundedCents / quarter);
    roundedCents = roundedCents - quarters * quarter;
    const dimes = Math.floor(roundedCents / dime);
    roundedCents = roundedCents - dimes * dime;
    const nickels = Math.floor(roundedCents / nickel);
    roundedCents = roundedCents - nickels * nickel;
    const pennies = Math.floor(roundedCents / pennie);
    roundedCents = roundedCents - pennies * pennie;

    dictionary.Nickels = nickels;
    dictionary.Pennies = pennies;
    dictionary.Dimes = dimes;
    dictionary.Quarters = quarters;
    return dictionary;
  }
};

console.log(looseChange(94));
