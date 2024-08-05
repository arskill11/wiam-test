export const validateName = (name: string) => {
  const isCorrect = /^[А-Яа-яЁёa-zA-Z]+$/.test(name);

  if (isCorrect) {
    return true;
  } else {
    return 'Имя и Фамилия могут содержать только буквенные символы';
  }
};

export const validatePhone = (phone: string) => {
  const correctPhone = phone.replaceAll(' ', '');

  if (correctPhone.length === 10) {
    return true;
  } else {
    return 'Телефон должен состоять из 10 цифр';
  }
};

export const validateGender = (gender: string) => {
  if (gender === 'мужской' || gender === 'женский') {
    return true;
  } else {
    return 'Это обязательное поле';
  }
};
