import { List } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </List>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
