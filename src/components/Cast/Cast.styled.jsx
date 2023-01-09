import styled from 'styled-components';

export const List = styled.ul`
  justify-content: center;
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Item = styled.li`
  margin-bottom: 16px;
  background-size: cover;
  max-width: 150px;
`;

export const Img = styled.img`
  border-radius: 5px;
  width: 150px;
  height: 225px;
`;

export const Text = styled.p`
  font-size: 14px;
`;
