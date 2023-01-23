let a = /Pann/;
let b = "Pann Sengpanich human Human 6338136621 P pa paa paaa";
let c = /pann/;
let d = /dog|cat|human|/; // or
let e = /pann/i; // ignore case
let f = /human/;
let g = /human/gi; // repeat the same character
let h1 = /Pa./; //wildcard (match any one character)
let h2 = /Pa/;
let i = /bad|bed|bid|bod|bud/; // = /b[aeiou]d/
let j = /a|b|c|d|e|1|2|3|4|5/; // = /[a-e1-5]/
let k = /[^aeiou^0-9]/gi; //not included vowels and 0-9
let l = /Pa+/gi; //find a one or more than 1 time in a row
let m = /Pa*/gi; //find 0 one or more than 0 time in a row

let o = /S[a-z]*n/; //greedy matching
let p = /S[a-z]*?n/; //lazy matching
let q1 = /^6338136621/; //search for the beginning
let q2 = /6338136621$/; //search for the ending
let r = /\w/gi; // = /[A-Za-z0-9_]/
let s = /\W/gi; // = /[^A-Za-z0-9_]/ (negate)
let t = /\d/; //= /[0-9]/
let u = /\D/; // = /[^0-9]/
let v = /\s/; // = /[ \r\t\f\n\v]/
let w = /\S/; // = /[^ \r\t\f\n\v]/
let x1 = /Oh{3} no/; // = /Ohhh no/
let x2 = /Oh{3,6} no/; // = /Ohhh no|Ohhhh no|Ohhhhh no|Ohhhhhh no/
let x3 = /Oh{3,} no/; // = no upper limit
let y = /favou?rite/; // = /favorite|favourite/
let z1 = /q(?=u)/; //postive lookahead
let z2 = /q(?!u)/; //negatie lookahead

//Capture Group
let A = /P(umpki|engui)n/; // = /Pumpkin|Penguin/
let B = /(test)(\s)\1\2\1/g; // will match "test test test"    (test)=\1 (\s)=\2

console.log(a.test(b), c.test(b), d.test(b), e.test(b));
console.log("-------------------------------------------");
console.log(b.match(a), b.match(f), b.match(g)); //match = opposite of test
console.log("-------------------------------------------");
console.log(b.match(h1), b.match(h2));
console.log("-------------------------------------------");
console.log(b.match(k));
console.log("-------------------------------------------");
console.log(b.match(l), b.match(m));
console.log("-------------------------------------------");
console.log(b.match(o), b.match(p));
console.log("-------------------------------------------");
console.log(b.match(q1), b.match(q2));
console.log("-------------------------------------------");
console.log(b.match(r), b.match(s));

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]./gi;
console.log(quoteSample.match(vowelRegex));
console.log("-------------------------------------------");

/* 
Username checking
1.Can only use alpha-numeric characters (A-Z,a-z,0-9)
2.The only numbers in the username have to be at the end. There can be zero or more of them at the end. 
  Username cannot start with the number.
3.Username letters can be lowercase and uppercase.
4.Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/;

console.log("one two three".replace(/(\w+)\s(\w+)\s(\w+)/, "$3 $2 $1")); //$1='one' $2='two' $3='three'

console.log("   Pann Sengpanich       ".trim());
