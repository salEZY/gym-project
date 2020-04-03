let submit = document.querySelector('.register-btn')
let result = document.querySelector('#result')

const validateEmail = (email) => {
  let regex = /\S+@\S+\.\S+/;
  return regex.test(email)
}

const submitForm = (e) => {
  let allUsers = []
  let counter = localStorage.getItem('counter');
  counter++;
  e.preventDefault()
  let firstName = $('#name').val()
  let lastName = $('#last-name').val()
  let email = $('#email').val()
  let mobile = $('#mobile').val()

  // Validacija da li su polja prazna 
  if (firstName == '' || lastName == '' || email == '' || mobile == '') {
    result.textContent = 'Niste uneli sva potrebna polja!'
    return
  }
  // regExp za mail 
  if (!validateEmail(email)) {
    result.textContent = 'Niste uneli validan mail!'
    return
  }
  // // Validacija phone i email unique
  // if (condition) {
    
  // }

  const member = new Member(firstName, lastName, email, mobile)
  allUsers.push(member)
  localStorage.setItem(`user: ${counter}`, JSON.stringify(allUsers))
  localStorage.setItem('counter', counter);
  console.log(users)
  
}
submit.addEventListener('click', submitForm)