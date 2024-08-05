import styled from 'styled-components';

export const StyledHomepage = styled.div`
  height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;

  div.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  div.content p {
    font-size: 60px;
    font-style: italic;
  }

  div.content a {
    font-size: 45px;
    border-radius: 15px;
    padding: 10px 20px;
    border: 1px solid black;
    text-decoration: none;
    color: black;
    background-color: lightblue;
    transition: 0.5s;
  }

  div.content a:hover {
    background-color: rgb(215, 239, 247);
  }
`;
