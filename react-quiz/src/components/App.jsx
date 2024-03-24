  import DateCounter from "./DateCounter";
  import React, { useEffect, useReducer } from "react";
  import Header from "./Header";
  import Loader from "./Loader";
  import Error from "./Error";
  import Question from "./Question";
  import NextButton from "./NextButton";
  import Progress from "./Progress";
  import StartScreen from "./StartScreen";
  import Main from "./Main";
  import FinishScreen from "./FinishScreen";
  import Footer from "./Footer";
  import Timer from "./Timer";
  const initialState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    secondsRemaining: null,
  };
  function reducer(state, action) {
    switch (action.type) {
      case "dataRecieved":
        return { ...state, questions: action.payload, status: "ready" };
      case "dataFailed":
        return { ...state, status: "error" };
      case "start":
        const SEC_PER_QUESTION=30;
        return { ...state, status: "active",secondsRemaining:state.questions.length * SEC_PER_QUESTION };
      case "newAnswer":
        const question = state.questions.at(state.index);
        return {
          ...state,
          answer: action.payload,
          points:
            action.payload === question.correctOption
              ? state.points + question.points
              : state.points,
        };
      case "nextQuestion":
        return {
          ...state,
          index: state.index + 1,
          answer: null,
        };
      case "finish":
        const highScore = 0;
        return {
          ...state,
          status: "finished",
          highScore:
            state.highScore > state.points ? state.highScore : state.points,
        };
      case "restart":
        return {
          ...initialState,
          questions: state.questions,
          status: "ready",
        };
      case "tick":
        return {
          ...state,
          secondsRemaining: state.secondsRemaining - 1,status: state.secondsRemaining===0? 'finished':state.status,
        };

      default:
        throw new Error("Unknown action");
    }
  }
  export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { questions, status, index, answer, points, highScore,secondsRemaining } = state;
    const numQuestions = questions.length;
    const maxPoints = questions.reduce((prev, curr) => prev + curr.points, 0);
    useEffect(function () {
      fetch("http://localhost:9000/questionss")
        .then((res) => res.json())
        .then((data) => dispatch({ type: "dataRecieved", payload: data }))
        .catch((err) => dispatch({ type: "dataFailed" }));
    }, []);

    return (
      <div className="app">
        <Header />
        <Main>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && (
            <StartScreen dispatch={dispatch} numQuestions={numQuestions} />
          )}
          {status === "active" && (
            <>
              <Progress
                index={index}
                numQuestions={numQuestions}
                maxPoints={maxPoints}
                points={points}
                answer={answer}
              />
              <Question
                answer={answer}
                dispatch={dispatch}
                question={questions[index]}
              />
              <Footer>
                <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
                <NextButton
                  index={index}
                  numQuestions={numQuestions}
                  answer={answer}
                  dispatch={dispatch}
                />
              </Footer>
            </>
          )}
          {status === "finished" && (
            <FinishScreen
              points={points}
              maxPoints={maxPoints}
              highScore={highScore}
              dispatch={dispatch}
            />
          )}
        </Main>
      </div>
    );
  }
