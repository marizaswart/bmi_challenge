function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
}
Person.prototype.calculate_bmi = function(method) {
  //this.bmiValue = 26.01;
  //this.bmiMessage = 'Overweight';
  calculator = new BMICalculator();
  calculator.body_bmi(this, method);
};
