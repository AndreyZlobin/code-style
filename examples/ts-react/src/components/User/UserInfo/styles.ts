import { styled } from '@self/ui';
import { Grid, Typography } from '@self/ui';

export const UserInfoWrapper = styled(Grid)`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-family: Ubuntu, serif;

  border: none;
  border-radius: ${({ theme }) => theme.shape.small};
  cursor: pointer;
`;

export const UserInfoTitle = styled(Typography)`
  text-align: center;
`;
