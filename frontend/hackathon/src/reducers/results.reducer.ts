import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Answer } from '../model/question';

type CategoryResults = {
  questionNumber: number;
  selectedAnswer: Answer;
};

interface ResultState {
  edmAnswers: CategoryResults[];
  scrAnswers: CategoryResults[];
  conAnswers: CategoryResults[];
  sgaAnswers: CategoryResults[];
  atmAnswers: CategoryResults[];
  total: {
    edm: number;
    scr: number;
    con: number;
    sga: number;
    atm: number;
  };
}

const initialState: ResultState = {
  edmAnswers: [],
  scrAnswers: [],
  conAnswers: [],
  sgaAnswers: [],
  atmAnswers: [],
  total: {
    edm: 0,
    scr: 0,
    con: 0,
    sga: 0,
    atm: 0,
  },
};

const processAnswer = (
  currentAnswers: CategoryResults[],
  newAnswer: CategoryResults
): { answers: CategoryResults[]; total: number } => {
  const oldAnswers = currentAnswers.filter(
    (a) => a.questionNumber !== newAnswer.questionNumber
  );
  oldAnswers.push(newAnswer);
  const answerTotal = oldAnswers.reduce((prev, curr) => {
    return prev + +curr.selectedAnswer.weights;
  }, 0);
  return { answers: oldAnswers, total: answerTotal };
};

const resultSlice = createSlice({
  name: 'resultSlice',
  initialState,
  reducers: {
    answerEdm: (state, action: PayloadAction<CategoryResults>) => {
      const { answers, total } = processAnswer(
        state.edmAnswers,
        action.payload
      );
      state.edmAnswers = answers;
      state.total = { ...state.total, edm: total };
    },
    answerScr: (state, action: PayloadAction<CategoryResults>) => {
      const { answers, total } = processAnswer(
        state.scrAnswers,
        action.payload
      );
      state.scrAnswers = answers;
      state.total = { ...state.total, scr: total };
    },
    answerCon: (state, action: PayloadAction<CategoryResults>) => {
      const { answers, total } = processAnswer(
        state.conAnswers,
        action.payload
      );
      state.conAnswers = answers;
      state.total = { ...state.total, con: total };
    },
    answerSga: (state, action: PayloadAction<CategoryResults>) => {
      const { answers, total } = processAnswer(
        state.sgaAnswers,
        action.payload
      );
      state.sgaAnswers = answers;
      state.total = { ...state.total, sga: total };
    },
    answerAtm: (state, action: PayloadAction<CategoryResults>) => {
      const { answers, total } = processAnswer(
        state.atmAnswers,
        action.payload
      );
      state.atmAnswers = answers;
      state.total = { ...state.total, atm: total };
    },
  },
});

export const { answerAtm, answerCon, answerEdm, answerScr, answerSga } =
  resultSlice.actions;

export default resultSlice.reducer;
