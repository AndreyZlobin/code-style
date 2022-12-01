import { Grid, Typography } from '@self/ui';

import { Indicator } from '../Indicator';

import { getUserFullInfo } from './utils';
import { useUserList } from './hooks';
import { UserInfoTitle, UserInfoWrapper } from './styles';
import { UserStatus } from './enums';

type Props = {
  title: string;
  userName: string;
  userEmail: string;
  onClickBtn: () => void;
};

const UserInfo = ({ title, userName, userEmail, onClickBtn }: Props) => {
  const list = useUserList();

  return (
    <UserInfoWrapper templateColumns="1fr 1fr" spacing={2}>
      <Grid column="1 / -1">
        <UserInfoTitle variant="h3">{title}</UserInfoTitle>
      </Grid>
      <Typography>{userName}</Typography>
      <Typography>{userEmail}</Typography>
      <Typography>{UserStatus.default}</Typography>
      <Typography>
        {getUserFullInfo({ email: userEmail, name: userName })}
      </Typography>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Indicator isShowFooter footer={<footer>footer</footer>} />
      <button onClick={onClickBtn}>btn</button>
    </UserInfoWrapper>
  );
};

export default UserInfo;
