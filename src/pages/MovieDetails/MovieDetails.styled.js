import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.main`
  padding: 48px 16px;
  max-width: 1240px;
  margin: 0 auto;
`;

export const ButtonGoBack = styled(Link)`
  display: inline-block;
  padding: 6px 16px;
  border: none;
  border-radius: 5px;
  background-color: #dc1818;
  color: #000000;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  margin-bottom: 16px;

  :hover,
  :focus {
    background-color: #dc1818;
    color: #ffffff;
  }
`;

export const MovieBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-bottom: 32px;
  @media (min-width: 480px) {
    grid-template-columns: 200px 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 300px 1fr;
  }
`;

export const Img = styled.img`
  border-radius: 5px;
`;

export const MovieTitle = styled.h1`
  margin-bottom: 16px;
`;

export const Rating = styled.p`
  display: inline-block;
  margin-bottom: 16px;
  background-color: #dc1818;
  color: #ffffff;
  padding: 2px 6px;
  border-radius: 5px;
`;

export const Overview = styled.h2`
  margin-bottom: 16px;
`;

export const OverviewInfo = styled.p`
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  margin-bottom: 16px;
`;

export const LinkItem = styled(Link)`
  color: #000000;
  display: inline-block;
  margin-bottom: 16px;

  :hover,
  :focus {
    color: #dc1818;
  }
`;

export const Error = styled.p`
  padding: 32px 16px;
  font-size: 32px;
  text-align: center;
  color: #dc1818;
`;
