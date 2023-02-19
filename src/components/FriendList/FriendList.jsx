import { List, Item, Status, Avatar, Name } from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item key={id}>
          <Status status={isOnline} />
          <Avatar src={avatar} alt={name} />
          <Name>{name}</Name>
        </Item>
      ))}
    </List>
  );
};
