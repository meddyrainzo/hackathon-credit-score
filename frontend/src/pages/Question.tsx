import { useEffect, useState } from 'react';
import Page from './Page';
import { Body, Info, Subtitle, Title } from '../components/fonts';
import { quizQuestions } from '../data/data';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import styled from 'styled-components';
import { Spacer } from '../components/layout';
import { Card } from '../components/card';
import {
  answerAtm,
  answerCon,
  answerEdm,
  answerScr,
  answerSga,
} from '../reducers/results.reducer';
import { Answer } from '../model/question';
import Button from '../components/Button';
import { Link } from '@tanstack/react-router';

function Question() {
  const edmQuestions = quizQuestions[0];
  const scrQuestions = quizQuestions[1];
  const conQuestions = quizQuestions[2];
  const sgaQuestions = quizQuestions[3];
  const atmQuestions = quizQuestions[4];

  const dispatch = useAppDispatch();
  const { atmAnswers, conAnswers, edmAnswers, scrAnswers, sgaAnswers } =
    useAppSelector((state) => state.resultsReducer);

  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentCategoryQuestion, setCurrentCategoryQuestion] = useState(0);
  const [edmComplete, setEdmComplete] = useState(false);
  const [scrComplete, setScrComplete] = useState(false);
  const [conComplete, setConComplete] = useState(false);
  const [sgaComplete, setSgaComplete] = useState(false);
  const [atmComplete, setAtmComplete] = useState(false);
  const [showFinishButton, setShowFinishButton] = useState(false);
  const [showPreviousButton, setShowPreviousButton] = useState(false);

  const answerQuestion = (answer: Answer) => {
    if (!showPreviousButton) {
      setShowPreviousButton(true);
    }
    const category = quizQuestions[currentCategory];
    switch (category.Category) {
      case 'EDM':
        dispatch(
          answerEdm({
            questionNumber: currentCategoryQuestion,
            selectedAnswer: answer,
          })
        );
        break;
      case 'SCR':
        dispatch(
          answerScr({
            questionNumber: currentCategoryQuestion,
            selectedAnswer: answer,
          })
        );
        break;
      case 'CON':
        dispatch(
          answerCon({
            questionNumber: currentCategoryQuestion,
            selectedAnswer: answer,
          })
        );
        break;
      case 'SGA':
        dispatch(
          answerSga({
            questionNumber: currentCategoryQuestion,
            selectedAnswer: answer,
          })
        );
        break;
      case 'ATM':
        dispatch(
          answerAtm({
            questionNumber: currentCategoryQuestion,
            selectedAnswer: answer,
          })
        );
        break;
    }
    const questionNumber = currentCategoryQuestion + 1;
    setCurrentCategoryQuestion(questionNumber);
    if (category.Questions.length - currentCategoryQuestion === 1) {
      if (currentCategory === 4) {
        // Finished the quiz
        setShowFinishButton(true);
      } else {
        if (showFinishButton) {
          setShowFinishButton(false);
        }
        setCurrentCategory(currentCategory + 1);
        setCurrentCategoryQuestion(0);
      }
    }
  };

  const handlePreviousClick = () => {
    if (currentCategory === 0 && currentCategoryQuestion === 0) {
      setShowPreviousButton(false);
      return;
    }
    if (currentCategoryQuestion === 0) {
      const newCategory = currentCategory - 1;
      const newCatQuestions = quizQuestions[newCategory].Questions;
      const catQuestion = newCatQuestions.length - 1;
      setCurrentCategory((prev) => prev - 1);
      setCurrentCategoryQuestion(catQuestion);
    } else {
      setCurrentCategoryQuestion((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setEdmComplete(edmAnswers.length === edmQuestions.Questions.length);
    setScrComplete(scrAnswers.length === scrQuestions.Questions.length);
    setConComplete(conAnswers.length === conQuestions.Questions.length);
    setSgaComplete(sgaAnswers.length === sgaQuestions.Questions.length);
    setAtmComplete(atmAnswers.length === atmQuestions.Questions.length);
  }, [
    atmAnswers,
    atmQuestions.Questions.length,
    conAnswers,
    conQuestions.Questions.length,
    edmAnswers,
    edmQuestions.Questions.length,
    scrAnswers,
    scrQuestions.Questions.length,
    sgaAnswers,
    sgaQuestions.Questions.length,
  ]);

  const renderAnswers = () => {
    return quizQuestions[currentCategory].Questions[
      currentCategoryQuestion
    ]?.Answers.map((ans, index) => (
      <Card
        width='fit-content'
        isHoverable
        key={`k-${index}`}
        onClick={() => answerQuestion(ans)}
      >
        <Body>{ans.value}</Body>
      </Card>
    ));
  };

  return (
    <>
      <Page>
        <Title> Take the quiz below</Title>
        <Spacer height={12} />
        <Subtitle>Completion status</Subtitle>
        <StatusWrapper>
          <Card selected={edmComplete}>Edm</Card>
          <Card selected={scrComplete}>Scr</Card>
          <Card selected={conComplete}>Con</Card>
          <Card selected={sgaComplete}>Sga</Card>
          <Card selected={atmComplete}>Atm</Card>
        </StatusWrapper>
        <Spacer height={32} />
        {quizQuestions[currentCategory].Questions[currentCategoryQuestion] ? (
          <>
            <Subtitle>
              {quizQuestions[currentCategory].Title} - Question{' '}
              {currentCategoryQuestion + 1}
            </Subtitle>
            <Info>
              {
                quizQuestions[currentCategory].Questions[
                  currentCategoryQuestion
                ]?.Question
              }
            </Info>
          </>
        ) : (
          <>
            <Subtitle>
              Quiz completed! Please click on finish to get your estimated score
              🎉🎉
            </Subtitle>
          </>
        )}

        <Spacer height={16} />
        <AnswersWrapper>{renderAnswers()}</AnswersWrapper>
      </Page>
      <Spacer height={12} />
      {showPreviousButton && (
        <Button onClick={handlePreviousClick} style={{ float: 'left' }}>
          Previous
        </Button>
      )}
      {showFinishButton && (
        <Link to='/result' style={{ float: 'right' }}>
          Finish
        </Link>
      )}
    </>
  );
}

export default Question;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const AnswersWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
