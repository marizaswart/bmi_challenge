function selector(obj) {
  var selection = document.getElementById('my-select').value;
  document.addEventListener("onchange", BMICalculator);
}

function BMICalculator() {

}

BMICalculator.prototype.body_bmi = function(obj, method) {
    var weight = obj.weight;
    var height = obj.height;
    if (weight > 0 && height > 0) {
        if (method == 'metric') {
          var finalBmi = weight / (height / 100 * height / 100);
          obj.bmiValue = parseFloat(finalBmi.toFixed(2));
        } else {
          var finalBmiImp = (weight * 703) / (height * height);
            obj.bmiValue = parseFloat(finalBmiImp.toFixed(2));
          }
        setBMIMessage(obj);
      }
    };

    function setBMIMessage(obj) {
      if (obj.bmiValue < 18.5) {
        obj.bmiMessage = "Underweight";
      }
      if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
        obj.bmiMessage = "Normal";
      }
      if (obj.bmiValue > 25 && obj.bmiValue < 30) {
        obj.bmiMessage = "Overweight";
      }
      if (obj.bmiValue > 30) {
        obj.bmiMessage = "Obese";
      }
    }
