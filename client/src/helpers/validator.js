export class Validator {
  constructor(data, setter) {
    this.formData = data;
    this.setFormData = setter;
  }

  username() {
    let data = { ...this.formData };
    let { username } = data;

    if (username.value.length < 3) {
      username.valid = false;
    } else {
      username.valid = true;
    }
    this.setFormData({ ...data });
  }

  email() {
    let data = { ...this.formData };
    let { email } = data;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      email.valid = false;
    } else {
      email.valid = true;
    }
    this.setFormData({ ...data });
  }

  password() {
    let data = { ...this.formData };
    let { password } = data;

    if (password.value.length < 6) {
      password.valid = false;
    } else {
      password.valid = true;
    }
    this.setFormData({ ...data });
  }

  passwordConfirm() {
    let data = { ...this.formData };
    let { password, passwordConfirm } = data;

    if (password.value !== passwordConfirm.value || password.value.length < 6) {
      passwordConfirm.valid = false;
    } else {
      passwordConfirm.valid = true;
    }
    this.setFormData({ ...data });
  }

  
  checkTaskAnswer(rightAnswer) {
    let data = { ...this.formData };
    let { answer } = data;

    if (+answer.value !== +rightAnswer) {
      answer.valid = false;
    } else {
      answer.valid = true;
    }
    this.setFormData({ ...data });
  }
}
