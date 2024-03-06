import Subtitle from '../components/fonts/Subtitle';
import Title from '../components/fonts/Title';
import { PageCenter, Spacer } from '../components/layout';

function NotFound() {
  return (
    <PageCenter>
      <Title>404 not found</Title>
      <Spacer />
      <Subtitle>You may have drifted too far into the abyss</Subtitle>
    </PageCenter>
  );
}

export default NotFound;
