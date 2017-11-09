describe('BMI_UI - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
    $('#mySelect').trigger('Metric System');
    $('#weight').val('90');
    $('#height').val('186');
    $('#calculate').trigger('click');
  });

  it("selects a method to calculate", function() {
    expect($('#mySelect').attr()).toBe('Metric System');
  });

  it("displays BMI Value", function() {
    expect($('#display_value').text()).toBe('Your BMI is 26.01');
  });

  it("display BMI Message", function() {
    expect($('#display_message').text()).toBe('and you are Overweight');
  });
});
