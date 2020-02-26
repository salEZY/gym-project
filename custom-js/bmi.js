let calculateBtn = document.querySelector('.calculateBmi')

const bmi = () => {
  let selectGender = document.querySelector('#gender')
  let selectedValue = selectGender.options[selectGender.selectedIndex].value
  let weight = document.querySelector('#weight').value
  let height = document.querySelector('#height').value

  if (weight !== null && height !== null) {
    let res = (weight / (height * height)) * 10000
    $('.result').html(`Gender: ${selectedValue}, Your Body Mass Index is ${res.toFixed(1)} which makes you: `+typeOfBMI(res))
  }
}

const typeOfBMI = (bmi) => {
  if (bmi > 35.0) {
    return 'Extremely Obese'
  }
  if (bmi > 30.0 && bmi < 34.9) {
    return 'Obese'
  }
  if (bmi > 25.0 && bmi < 29.9) {
    return 'Overweight'
  }
  if (bmi >18.5 && bmi < 24.9) {
    return 'Normal'
  }
  if (bmi < 18.5) {
    return 'Underweight'
  }
}

calculateBtn.addEventListener('click', bmi)
