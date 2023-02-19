import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 500px;
  margin: 20px auto;
  border: 1px solid gray;
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: black;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  width: calc(100% / 5);
  height: 90px;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-shadow: 1px 1px 2px black;
  font-size: 25px;
  background-color: ${() =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`};
`;

export const Label = styled.span`
  font-size: 19px;
  margin-bottom: 10px;
`;

export const Percentage = styled.span``;
