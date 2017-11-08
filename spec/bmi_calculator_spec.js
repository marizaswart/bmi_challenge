describe("BMICalculator", function() {
  var calculator;
  var person;
  var selector;

  beforeEach(function() {
    selector = (this.selection = "Metric System");
    person = new Person({weight: 90, height: 186});
    calculator = new BMICalculator();
  });
  it("selects the method the user wants to use", function() {
    expect(selection.mySelect).toEqual("Metric System");
  });

  it("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });
});
