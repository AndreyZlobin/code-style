import { UserInfo } from './UserInfo';

export const User = () => {
  const handleClick = () => {};

  return (
    <UserInfo
      title="title"
      userName="ivan"
      userEmail="ivan@ivan.com"
      onClickBtn={handleClick}
    />
  );
};
