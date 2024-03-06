import { PropsWithChildren } from 'react';
import { Card } from '../components/card';
import styled from 'styled-components';
import { Spacer } from '../components/layout';

function Page({ children }: PropsWithChildren) {
  return (
    <Card>
      <Spacer />
      <PageWrapper>{children}</PageWrapper>
    </Card>
  );
}

export default Page;

const PageWrapper = styled.div`
  width: 100%;
`;
