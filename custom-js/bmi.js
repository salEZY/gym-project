
let calculateBtn = document.querySelector('.calculateBmi')


const bmi = () => {
  let selectGender = document.querySelector('#gender')
  let selectedValue = selectGender.options[selectGender.selectedIndex].value
  let weight = document.querySelector('#weight').value
  let height = document.querySelector('#height').value
  console.log(weight+" and "+height);
  

  if (weight !== null && height !== null) {
    let res = (weight / (height * height)) * 10000
    $('.result').html(`Gender: ${selectedValue}, BMI: ${res.toFixed(2)}`)
  }
}

calculateBtn.addEventListener('click', bmi)
