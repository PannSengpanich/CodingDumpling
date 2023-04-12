const Pann = {
  name: "Pann",
  age: 21,
  Gender: "male",
  score: {
    Q1: 10,
    Q2: 9,
    Q3: 8,
  },
};

const {
  name,
  Gender: GeNdEr,
  score: { Q1: firstscore },
} = Pann;
console.log(name, GeNdEr, firstscore);

const [a, b, , , c] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b, c);
const [d, e, ...arr] = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d"];
console.log(d, e, arr);

const data = {
  name: "Pann",
  age: 21,
  nationality: "Thai",
  location: "Bangkok",
};

const profileUpdate = ({ name, age, nationality, location }) => {
  console.log(name, age, nationality, location);
};

profileUpdate(data);
