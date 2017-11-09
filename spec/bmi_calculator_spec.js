describe("selector", function() {
  var selection;

  beforeEach(function() {
    selection = (this.selection = "Metric System");
  });
  
  it("selects a measure method", function() {
    expect($('mySelect').val("Metric System"));
  });
});

describe("BMICalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });
});
