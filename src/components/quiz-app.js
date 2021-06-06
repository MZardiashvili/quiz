import React, { useState } from 'react';
import Quiz from './quiz';
import ErrorMessage from '../utils/error-message';
import LoadingSpinner from '../utils/loading';
import useGetTriviaData from '../hooks/get-trivia-data';
import '../css/start.css';

function QuizApp() {
  const [selectedCategory, setSelectedCategory] = useState(9);
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
  const [isLoading, errorMessage, data] = useGetTriviaData(
    selectedCategory,
    selectedDifficulty
  );

  let contents;
  if (isLoading) {
    contents = <LoadingSpinner />;
  } else if (errorMessage !== '') {
    contents = <ErrorMessage> {errorMessage} </ErrorMessage>;
  } else {
    contents = <Quiz triviaData={data} />;
  }

  return <div>{contents}</div>;
}

export default QuizApp;
