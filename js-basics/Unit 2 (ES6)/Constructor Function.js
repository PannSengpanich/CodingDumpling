class SpaceShuttle {
  constructor(targetPlanet, targetPlanet2, targetPlanet3) {
    this.targetPlanet = targetPlanet;
    this.targetPlanet2 = targetPlanet2;
    this.targetPlanet3 = targetPlanet3;
  }
  takeOff() {
    console.log(
      "To " + this.targetPlanet + this.targetPlanet2 + this.targetPlanet3 + "!"
    );
  }
}
function SpaceShuttle_(targetPlanet, targetPlanet2, targetPlanet3) {
  this.targetPlanet = targetPlanet;
  this.targetPlanet2 = targetPlanet2;
  this.targetPlanet3 = targetPlanet3;
}

// Implicit constructor
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}
const zeus = new SpaceShuttle("Jupiter", "Moon", "Venus");
zeus.takeOff();
console.log(zeus);
zeus.takeOff();

const zeus_ = new SpaceShuttle_("Jupiter", "Moon", "Venus");
console.log(zeus_);

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
