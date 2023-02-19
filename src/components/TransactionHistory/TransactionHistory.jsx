import {
  TableTransaction,
  TabletHead,
  TableTr,
  HeadName,
  TableBody,
  BodyTr,
  BodyInfo,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <TableTransaction>
      <TabletHead>
        <TableTr>
          <HeadName>Type</HeadName>
          <HeadName>Amount</HeadName>
          <HeadName>Currency</HeadName>
        </TableTr>
      </TabletHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <BodyTr key={id}>
            <BodyInfo>{type}</BodyInfo>
            <BodyInfo>{amount}</BodyInfo>
            <BodyInfo>{currency}</BodyInfo>
          </BodyTr>
        ))}
      </TableBody>
    </TableTransaction>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
