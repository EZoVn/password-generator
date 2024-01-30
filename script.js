const inputPassword = document.getElementById('password');
const btnGenerate = document.getElementById('btnGenerate');

function copyPassword() {
  navigator.clipboard.writeText(inputPassword.value)
    .then(() => {
      console.log('Copied password to clipboard');
    })
    .catch(err => {
      console.error('Could not copy password: ', err);
    });
}

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

function createPassword() {
  const characters = chooseCharacter();
  const lenght = document.getElementById('lenght').value;
  let password = '';
  let charactersLength = characters.length;
  for (let i = 0; i < lenght; i++) {
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  inputPassword.value = password;
  return inputPassword.value;
}

btnGenerate.addEventListener('click', createPassword);

function chooseCharacter() {
  const options = {
    'uppercase': upperCase,
    'lowercase': lowerCase,
    'numbers': numbers,
    'symbols': symbols
  };
  let characters = '';
  for (let option in options) {
    if (document.getElementById(option).checked) {
      characters += options[option];
    }
  }
  return characters;
};