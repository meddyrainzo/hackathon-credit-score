import { useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import Page from './Page';
import { Title } from '../components/fonts';
import { Spacer } from '../components/layout';
import { Bar } from 'react-chartjs-2';

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
      <BarChart />
    </Page>
  );
}

export default Result;

function BarChart() {
  const { total } = useAppSelector((state) => state.resultsReducer);
  const data = {
    labels: ['EDM', 'SCR', 'CON', 'SGA', 'ATM'],
    datasets: [
      {
        label: 'Estimation result',
        data: [total.edm, total.scr, total.con, total.sga, total.atm], // 10 Red, 20 Green, 15 Blue, 25 Yellow
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Red
          'rgba(75, 192, 192, 0.6)', // Green
          'rgba(54, 162, 235, 0.6)', // Blue
          'rgba(255, 206, 86, 0.6)', // Yellow
          'rgba(225, 126, 86, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(225, 126, 86, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Configuration options for the bar chart
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div style={{ width: '600px', height: '400px', margin: 'auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
}
