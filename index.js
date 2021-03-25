module.exports = (data) => {

  if (data === undefined) {
    data = {};
  }

  let length = data.length === undefined ? 8 : parseInt(data.length);
  if (length < 1) {
    length = 8;
  }

  const letters = data.letters === undefined ? true : !!data.letters;
  const numbers = data.numbers === undefined ? true : !!data.numbers;
  const specialCharacters = data.specialCharacters === undefined ? true : !!data.specialCharacters;
  const uppercase = data.uppercase === undefined ? true : !!data.uppercase;
  const lowercase = data.lowercase === undefined ? true : !!data.lowercase;
  
  const listSpecialCharacters = data.listSpecialCharacters === undefined ? '!@#$%&*' : String(data.listSpecialCharacters);
  const customCharacters = data.customCharacters === undefined ? '' : String(data.customCharacters);

  let characters = '';

  if (customCharacters === '') {
    if (letters) {
      if (uppercase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      }
      if (lowercase) {
        characters += 'abcdefghijklmnopqrstuvwxyz';
      }
    }
  
    if (numbers) {
      characters += '0123456789';
    }
  
    if (specialCharacters) {
      characters += listSpecialCharacters;
    }
  } else {
    characters = customCharacters;
  }

  if (characters === '') {
    characters = '0';
  }

  let uniqueCharacters = characters
    .split('')
    .filter(function(item, pos, self) {
      return self.indexOf(item) === pos;
    })
    .join('');
  
  let result = '';
  for (let i = 0; i < length; i++) {
    result += uniqueCharacters.charAt(Math.floor(Math.random() * uniqueCharacters.length));
  }
  return result;
}