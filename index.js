class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  //calculate  each value using this.radius and pi
  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  //accept values for each calculation
  //calculate the radius based on the input value and set
  // this.radius

  set diameter(diameter) {
    return (this.radius = diameter / 2);
  }

  set circumference(circumference) {
    return (this.radius = circumference / (Math.PI * 2));
  }

  //   set area() {}
}
