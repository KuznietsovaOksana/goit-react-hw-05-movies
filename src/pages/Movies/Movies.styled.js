import styled from 'styled-components';

export const Box = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 48px 16px;
  color: #ffffff;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-color: #dc1818;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  outline: none;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 16px;
  padding-right: 16px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
