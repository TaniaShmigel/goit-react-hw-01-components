import styled from '@emotion/styled';

export const TableTransaction = styled.table`
  width: 900px;
  margin: 50px auto 0;
  padding: 0;
`;

export const TabletHead = styled.thead``;

export const TableTr = styled.tr``;

export const HeadName = styled.th`
  width: calc(100% / 3);
  height: 65px;
  background-color: #00c8ffed;
  color: #fff;
  margin: 0;
`;

export const TableBody = styled.tbody``;

export const BodyTr = styled.tr`
  height: 45px;
  &:nth-of-type(2n) {
    background-color: #b7e9eba4;
  }
`;


export const BodyInfo = styled.td`
  text-align: center;
  width: calc(100% / 3);
`;
