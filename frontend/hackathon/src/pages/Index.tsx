import { Spacer } from '../components/layout';
import { Body, Subtitle, Title } from '../components/fonts';
import { Link } from '@tanstack/react-router';
import Page from './Page';

function Home() {
  return (
    <Page>
      <Title>Credit score estimator</Title>
      <Spacer />
      <Subtitle>
        Use this application to estimate what your credit score is
      </Subtitle>
      <Spacer height={40} />
      <Link to='/questions'>
        <Body>Get started</Body>
      </Link>
    </Page>
  );
}

export default Home;
