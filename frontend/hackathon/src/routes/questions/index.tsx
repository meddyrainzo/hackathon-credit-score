import { createFileRoute } from '@tanstack/react-router';
import Question from '../../pages/Question';

export const Route = createFileRoute('/questions/')({
  component: () => <Question />,
});
