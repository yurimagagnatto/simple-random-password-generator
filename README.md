# Simple Random Password Generator

A simple random password generator.

## Install

### npm

`npm install --save simple-random-password-generator`

### Yarn

`yarn add simple-random-password-generator`

## Use

```js
const password = require('simple-random-password-generator');
const myPassword = password();
console.log(myPassword);
```

## Options

```js
const myPassword = password({
  // length of string (int, default: 8)
  length: 32,

  // activate letters (boolean, default: true)
  letters: true,

  // activate numbers (boolean, default: true)
  numbers: true,

  // activate special characters (boolean, default: true)
  specialCharacters: true,

  // if specialCharacters is true,
  // config the list of special characters (string, default: '!@#$%&*')
  listSpecialCharacters: '!@#$%&*', // if specialCharacters is true
  
  // if letters is true, config the letter case

  // activate uppercase (boolean, default: true)
  uppercase: true,
  // activate lowercase (boolean, default: true)
  lowercase: true,

  // if informed, the password will be created only with these characters
  // (string, default: '')
  customCharacters: ''
});
```

## Author

Yuri Magagnatto | 
GitHub: [yurimagagnatto](https://github.com/yurimagagnatto) | 
Website: [WebTutorial](https://www.webtutorial.com.br/)
