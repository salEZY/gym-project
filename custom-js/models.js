class Member {
  static count = 0;
  // Uzeti id poslednjeg membera iz localstorage kad se ucita app
  constructor(firstName, lastName, email, phone) {
    this.id = this.getId();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
  }

  getId() {
    Member.count++;
    return Member.count;
  }
}