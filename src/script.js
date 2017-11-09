$(document).ready(function() {
  $('#calculate').click(function() {
    var w = parseFloat($('#weight').val());
    var h = parseFloat($('#height').val());
    var method = $('#my-select').val();
    var person = new Person({weight: w, height: h});
    person.calculate_bmi(method);
    $('#display_value').html('Your BMI is ' + person.bmiValue);
    $('#display_message').html('and you are ' + person.bmiMessage);
  });
});
