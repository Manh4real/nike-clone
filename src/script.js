import { SIGN_UP, SIGN_IN } from "./constants";

const patterns = {
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  phone: /[0-9]+/,
  postalCode: /[0-9]+/,
  name: /^(?!\s*$).+$/,
  address: /^(?!\s*$).+$/,
  birth: /./,
  country: /./,
};

class Validation {
  constructor(type) {
    this.type = type;
    this.validateName = this.validateName.bind(this);
    this.validateLastName = this.validateLastName.bind(this);
    this.validateFirstName = this.validateFirstName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateCountry = this.validateCountry.bind(this);
    this.validateBirthday = this.validateBirthday.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validatePhone = this.validatePhone.bind(this);
    this.validateCheckbox = this.validateCheckbox.bind(this);
    this.validateRadios = this.validateRadios.bind(this);
    this.validateKeepSignIn = this.validateKeepSignIn.bind(this);
    this.validateAddress = this.validateAddress.bind(this);
    this.validatePostal = this.validatePostal.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  validateEmail(email) {
    return this.validate(email, "email", "Please enter a valid email!");
  }
  validateName(name, type, mes) {
    return this.validate(name, type, `Please enter your ${mes}!`, true, "name");
  }
  validateLastName(name) {
    return this.validateName(name, "lastName", "last name");
  }
  validateFirstName(name) {
    return this.validateName(name, "firstName", "first name");
  }
  validateAddress(address) {
    return this.validate(address, "address", "");
  }
  validateBirthday(date) {
    return this.validate(date, "birth", "Please choose your birthday!");
  }
  validatePassword(password) {
    return this.validate(
      password,
      "password",
      "At least 8 characters includes letters and numbers!"
    );
  }
  validatePhone(phone) {
    return this.validate(
      phone,
      "phone",
      "Please enter phone number with only numbers!"
    );
  }
  validatePostal(code) {
    return this.validate(code, "postalCode", "Please enter your postal code.");
  }
  validateCountry(country) {
    return this.validate(
      country,
      "country",
      "Please choose your country!",
      false,
      null,
      true
    );
  }
  validateCheckbox(checked) {
    return this.validate(checked, "withEmail", null, null, null, true);
  }
  validateRadios(checkedValue, name) {
    return this.validate(
      { [name]: checkedValue },
      "checked",
      null,
      null,
      null,
      true
    );
  }
  validateKeepSignIn(c) {
    return this.validate(c, "isKeepinSignIn", null, null, null, true);
  }
  isEmpty(value) {
    return value !== "" || value;
  }

  isAllValid() {
    switch (this.type) {
      case SIGN_IN:
        return this.email?.isValid && this.password?.isValid;
      case SIGN_UP:
        return (
          this.email?.isValid &&
          this.password?.isValid &&
          this.firstName?.isValid &&
          this.lastName?.isValid &&
          this.birth?.isValid &&
          this.country?.isValid
        );
      case "ship":
        return (
          this.email?.isValid &&
          this.phone?.isValid &&
          this.firstName?.isValid &&
          this.lastName?.isValid
        );
      case "pickup-method":
        return this.postalCode?.isValid;
      default:
        return new Error("Validation...");
    }
  }

  validate(value, type, errorMes, multiple = false, mutual, always = false) {
    const PATTERN = !multiple ? patterns[type] : patterns[mutual];
    const check = always || PATTERN?.test(value);
    this[type] = { [type]: value, isValid: check };

    return !check && <AlertMessage mes={errorMes} />;
  }

  getAll() {
    switch (this.type) {
      case SIGN_UP:
        return {
          email: this.email?.email,
          password: this.password?.password,
          name: {
            firstName: this.firstName?.firstName,
            lastName: this.lastName?.lastName,
          },
          birthday: this.birth?.birth,
          country: this.country?.country,
          withEmail: this.withEmail?.withEmail,
        };
      case SIGN_IN:
        return {
          email: this.get("email"),
          password: this.get("password"),
          isKeepinSignIn: this.get("isKeepinSignIn"),
        };
      case "ship":
        return {
          email: this.email?.email,
          phone: this.phone?.phone,
          name: {
            firstName: this.firstName?.firstName,
            lastName: this.lastName?.lastName,
          },
          checked: this.checked?.checked,
        };
      case "pickup-method":
        return {
          postalCode: this.postalCode?.postalCode,
        };
      default:
        throw new Error("Validation's getAll");
    }
  }
  get(value) {
    // Rebundant
    return this[value] && this[value][value];
  }
}

const AlertMessage = ({ mes }) => {
  return <div className="invalid-message">{mes}</div>;
};

export const ID = function () {
  return "_" + Math.random().toString(36).slice(2, 9);
};

export const stringifyDate = function (
  date,
  includesDate = true,
  noAbb = false
) {
  const wd = date.getDay();
  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();

  if (includesDate && !noAbb)
    return `${WEEKDAYS[wd]}, ${MONTHS[m].slice(0, 3)} ${d}`;
  if (!includesDate && noAbb) return `${MONTHS[m]} ${y}`;
};
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octocber",
  "November",
  "December",
];

export { Validation };
export { SIGN_IN, SIGN_UP };
