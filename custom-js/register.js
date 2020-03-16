let submit = document.querySelector('.register-btn')

const submitForm = () => {
  let firstName = $('#name').val()
  let lastName = $('#last-name').val()
  let email = $('#email').val()
  let mobile = $('#mobile').val()

  // Validacija da li su polja prazna i regExp za mail i da su phone i email unique

  member = new Member(firstName, lastName, email, mobile)
  member2 = new Member(firstName, lastName, email, mobile)
}
submit.addEventListener('click', submitForm)