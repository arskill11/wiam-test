import styled from 'styled-components';

export const StyledPage = styled.div`
  padding-top: 50px;
  height: 86vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;

  h2 {
    font-size: 40px;
  }

  &.blur {
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 500px;

  .buttons {
    display: flex;
    gap: 25px;
  }

  div.input {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  div.input label {
    font-size: 25px;
    font-weight: bold;
  }

  div.values {
    display: flex;
    justify-content: space-between;
  }

  div.values p {
    font-size: 20px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
  border-radius: 8px;
  font-size: 20px;
  border: 2px solid black;
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 2px solid black;
  font-size: 20px;
`;

export const FormButton = styled.button`
  padding: 10px 30px;
  font-size: 30px;
  border-radius: 15px;
  background-color: rgb(184, 244, 184);
  border: 1px solid black;
  cursor: pointer;
`;

export const RedFormButton = styled(FormButton)`
  background-color: rgb(247, 170, 170);
`;
