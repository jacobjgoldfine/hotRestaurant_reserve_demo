class Reserve {
  constructor(name, phoneNum, email, id) {
    this.name = name;
    this.phoneNum = phoneNum;
    this.email = email;
    this.id = id;
  }
  getName() {
    return this.name;
  }

  getPhoneNum() {
    return this.phoneNum;
  }

  getEmail() {
    return this.email;
  }
  getId() {
    return this.id;
  }
}

module.exports = Reserve;
