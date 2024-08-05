import { SEND_FORM_URL } from './constants';

const sendUserData = async (firstName: string, lastName: string) => {
  return await fetch(SEND_FORM_URL, {
    method: 'POST',
    body: JSON.stringify({
      title: `${firstName}  ${lastName}`,
    }),
  });
};

export default sendUserData;
