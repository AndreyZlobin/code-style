import { FunctionComponent, ReactNode } from 'react';

import { getIndicatorName } from './utils';
import { IndicatorWrapper } from './styles';

type Props = {
  isShowFooter: boolean;
  footer: ReactNode | FunctionComponent;
};

export const Indicator = ({ isShowFooter, footer }: Props) => (
  <IndicatorWrapper>
    <>
      {getIndicatorName()}
      {isShowFooter && footer}
    </>
  </IndicatorWrapper>
);
