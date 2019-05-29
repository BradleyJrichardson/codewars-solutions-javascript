const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for (let i = 0; i < companies.length; i++) {
  console.table(companies[i]);
}
// -----------------------------------------------------------
//! forEach
companies.forEach((company, index, companies) => {
  console.table(company.name);
});

// -----------------------------------------------------------
//! filter
const canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}

const canDrink = ages.filter(age => {
  if (age >= 21) {
    return true;
  }
});
const canDrinkSmaller = ages.filter(age => age >= 21);
console.log(canDrink);
console.log(canDrinkSmaller);

const retailCompanies = companies.filter(company => {
  if (company.category === "Retail") {
    return true;
  }
});
let result = retailCompanies;
console.log(typeof result);
console.table(result);

const retailCompaniesSmaller = companies.filter(
  company => company.category === "Retail"
);
console.table(retailCompaniesSmaller);
// so when using filter it using the condition and when we return true it puts that into an array.
// get 80s companies

const companies80s = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);
console.table(companies80s);

const lasted10 = companies.filter(company => company.end - company.start > 10);
console.table(lasted10);

// -----------------------------------------------------------
// ! map
// create array of company names
const names = companies.map(company => company.name);
console.table(names);
// mapping creating a new array using a function can be quite a powerful thing

// woah you can link .maps together to do some really cool things
const ageSquared = ages.map(age => Math.log10(age)).map(age => age * 2);
console.table(ageSquared);

// -----------------------------------------------------------
//! sort
// witht he sort function we want to return a 1 or a negative -1 depending on the condition. it uses something like bubble sort and when it returns a 1 it is moved to the right or alternatively when it is allocated a -1 it is moved to the left
const sortedCompanies = companies.sort((c1, c2) => {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
result = sortedCompanies;
console.log(typeof result);
console.table(result);

const sortedCompaniesShoter = companies.sort((a, b) => {
  a.start > b.start ? 1 : -1;
});

console.table(sortedCompaniesShoter);
const sortAges = ages.sort((a, b) => {
  a - b;
});
console.table(ages);

// -----------------------------------------------------------
// ! reduce

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
const ageSum = ages.reduce((total, age) => {
  return total + age;
}, 0);
console.log(ageSum);

const getTotalYears = companies.reduce((total, company) => {
  return total + (company.end - company.start);
}, 0);
console.log(getTotalYears);

// -----------------------------------------------------------
//! combining methods

const combine = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log(combine);
