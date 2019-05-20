// You will have a list of rationals in the form
// lst = [ [numer_1, denom_1] , ... , [numer_n, denom_n] ]
// or

// lst = [ (numer_1, denom_1) , ... , (numer_n, denom_n) ]
// where all numbers are positive integers. You have to produce their sum N / D in an irreducible form: this means that N and D have only 1 as a common divisor.

// Return the result in the form:
// [N, D] in Ruby, Crystal, Python, Clojure, JS, CS, PHP, Julia

// If the result is an integer (D evenly divides N) return:
// an integer in Ruby, Crystal, Elixir, Clojure, Python, JS, CS, PHP, R, Julia

// If the input list is empty, return
// nil/None/null/Nothing

// solution
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const sumFracts = l => {
  if (!l.length) return null;
  var [n, d] = l.reduce(([a, x], [b, y]) => [a * y + b * x, x * y]);
  var g = gcd(n, d);
  return g === d ? n / d : [n / g, d / g];
};

/// Alternative solution
function sumFracts(l) {
  if (l.length == 0) return null;
  var n = l[0][1];
  for (var i = 1; i < l.length; ++i) {
    var k = n;
    while (k % n != 0 || k % l[i][1] != 0) k++;
    n = k;
  }
  var ch = 0;
  for (var i = 0; i < l.length; ++i) ch += (l[i][0] * n) / l[i][1];
  if (ch % n == 0) return ch / k;
  for (var j = Math.min(ch, n); j >= 1; j--)
    if (ch % j == 0 && n % j == 0) {
      ch /= j;
      n /= j;
      break;
    }
  return [ch, n];
}
