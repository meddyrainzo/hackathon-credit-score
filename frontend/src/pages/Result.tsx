import { useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import Page from './Page';
import { Title } from '../components/fonts';
import { Spacer } from '../components/layout';

function Result() {
  const { total } = useAppSelector((state) => state.resultsReducer);
  const [estimate, setEstimate] = useState(0);

  useEffect(() => {
    const edm = total.edm * 0.096;
    const scr = total.scr * 0.053;
    const con = total.con * 0.054;
    const sga = total.sga * 0.068;
    const atm = total.atm * 0.104;

    setEstimate(edm + scr + con + sga + atm + 600);
  }, [total]);
  return (
    <Page>
      <Title>Your final score is {estimate}</Title>
      <Spacer height={40} />
      {/* <BarChart /> */}
    </Page>
  );
}

export default Result;
