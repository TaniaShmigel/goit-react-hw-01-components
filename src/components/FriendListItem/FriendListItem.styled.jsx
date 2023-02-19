import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  gap: 20px;
  width: 400px;
  border: 1px solid gray;
  border-radius: 4px;
  box-shadow: 10px 5px 5px gray;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    return status ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  width: 52px;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: bold;
`;
