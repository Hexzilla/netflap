import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => props.direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;
`;

export const Pane = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;
`;

export const SubTitle = styled.h2`
  font-size: 1.625rem;
  font-weight: normal;
  line-height: normal;
`;

export const Image = styled.img`
  height: 398px;
`;
