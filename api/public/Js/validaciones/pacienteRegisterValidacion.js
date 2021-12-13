const first_name = document.querySelector("#firstname");
const last_name = document.querySelector("#lastname");
const doc = document.querySelector("#doc");
const birth_date = document.querySelector("#birth_date");
const email = document.querySelector("#email");
const re_email = document.querySelector("#reEmail");
const password = document.querySelector("#password");
const re_password = document.querySelector("#rePassword");
const term = document.querySelector("#term");

const errorList = document.querySelector("#errors");

const requiredInputs = [
  first_name,
  last_name,
  doc,
  birth_date,
  email,
  re_email,
  password,
  re_password,
  term,
];

first_name.focus();

const form = document.querySelector("#formul form");

form.addEventListener("submit", (event) => {
  const errors = formIsInvalid();
  if (errors.length > 0) {
    console.log("Formulario es invalido!");
    event.preventDefault();

    errorList.classList.remove("hidden");

    errorList.innerHTML = "";
    for (const error of errors) {
      errorList.innerHTML += `<li>${error}</li>`;
    }
  } else {
    errorList.classList.add("hidden");
    errorList.innerHTML = "";
  }
});

function formIsInvalid() {
  let errors = [];

  errors.push(validateInput(first_name, isEmpty, "Se debe completar el Nombre"));
  errors.push(
    validateInput(last_name, isEmpty, "Se debe completar el Apellido")
  );
  errors.push(
    validateInput(doc, isEmpty, "Se debe completar el Número de Documento")
  );
  errors.push(
    validateInput(birth_date, isEmpty, "Se debe completar la fecha de cumpleaños")
  );
  errors.push(
    validateInput(email, isEmpty, "Se debe ingresar el mail de contacto")
  );

  errors.push(
    validateInput(re_email, isEmpty, "Se debe corroborar el mail de contacto")
  );

  errors.push(
    validateInput(password, isEmpty, "Se debe ingresar una password")
  );

  errors.push(
    validateInput(re_password, isEmpty, "Se debe corroborar una password")
  );

  console.log(errors);

  return errors.filter((msg) => msg != null);
}

function isEmpty(input) {
  return input.value.trim() == "";
}

function validateInput(input, validationFunction, message) {
  if (validationFunction(input)) {
    input.classList.add("campo-invalido");
    return message;
  } else {
    input.classList.remove("campo-invalido");
    input.classList.add("campo-valido");
    return null;
  }
}