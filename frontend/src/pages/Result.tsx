import { useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import Page from './Page';
import { Title } from '../components/fonts';
import { Spacer } from '../components/layout';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Title as ChartTitle,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';
import { quizQuestions } from '../data/data';

type ChartData = {
  label: string;
  data: number[];
  backgroundColor: string;
};

type Series = {
  labels: string[];
  datasets: ChartData[];
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Category results',
    },
  },
};

function Result() {
  const { total } = useAppSelector((state) => state.resultsReducer);
  const [estimate, setEstimate] = useState(0);
  const [chartData, setChartData] = useState<Series | undefined>(undefined);

  useEffect(() => {
    const edm = total.edm * 0.096;
    const scr = total.scr * 0.053;
    const con = total.con * 0.054;
    const sga = total.sga * 0.068;
    const atm = total.atm * 0.104;

    setEstimate(edm + scr + con + sga + atm + 600);
    setChartData({
      labels: quizQuestions.map((q) => q.Category),
      datasets: [
        {
          label: 'Scores',
          data: [total.edm, total.scr, total.con, total.sga, total.atm],
          backgroundColor: '#756bd1',
        },
      ],
    });
  }, [total]);

  return (
    <Page>
      <Title>Your final score is {estimate}</Title>
      <Spacer height={40} />
      {chartData && <Bar data={chartData} options={options} />}
    </Page>
  );
}

export default Result;
