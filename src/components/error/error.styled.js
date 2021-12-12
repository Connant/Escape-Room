import styled from 'styled-components';

export const Error = styled.div`
  display: block;
  width: 100%;
  padding-top: 5%;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 200%;
  color: ${({ theme }) => theme.color.tangerine};
`;
