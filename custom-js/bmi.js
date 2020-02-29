let calculateBtn = document.querySelector('.calculateBmi')

const bmi = (e) => {
  e.preventDefault()
  let selectGender = document.querySelector('#gender')
  let selectedValue = selectGender.options[selectGender.selectedIndex].value
  let weight = document.querySelector('#weight').value
  let height = document.querySelector('#height').value

  if (weight && height && selectedValue) {
    let res = (weight / (height * height)) * 10000
    $('.result').html(`Your BMI is ${res.toFixed(2)} which makes you: `+typeOfBMI(res))   
  }else{
    $('.result').html('Please fill the required fields!')
  }
}

const typeOfBMI = (bmi) => {
  if (bmi >= 35.00) {
    return 'Extremely Obese'
  }
  if (bmi >= 30.00 && bmi <= 34.99) {
    return 'Obese'
  }
  if (bmi >= 25.00 && bmi <= 29.99) {
    return 'Overweight'
  }
  if (bmi >= 18.50 && bmi <= 24.99) {
    return 'Healthy'
  }
  if (bmi < 18.50) {
    return 'Underweight'
  }
}

calculateBtn.addEventListener('click', bmi)
