describe("BMICalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    calculator.body_bmi(person, 'metric');
    expect(person.bmiValue).toEqual(26.01);
  });
});
