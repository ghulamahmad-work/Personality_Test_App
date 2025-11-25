import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QuestionsComponent() {
  const navigate = useNavigate();
  // Declaring array for the questions
  const questions = [
    {
      text: "Q) You're really busy at work and a colleague is telling you their life story and personal woes. You: ?",
      options: [
        "Don't dare to interrupt them",
        "Think it's more important to give them some of your time; work can wait",
        "Listen, but with only with half an ear",
        "Interrupt and explain that you are really busy at the moment",
      ],
    },
    {
      text: "Q) You've been sitting in the doctor's waiting room for more than 25 minutes. You ?",
      options: [
        "Look at your watch every two minutes",
        "Bubble with inner anger, but keep quiet",
        "Tell everyone waiting that the doctor is usually late.",
        "Complain in a loud voice, while tapping your foot impatiently",
      ],
    },
    {
      text: "Q) You're having an animated discussion with a colleague regarding a project that you're in charge of. You:? ",
      options: [
        "Don't dare contradict them",
        "Think that they are obviously right",
        "Defend your own point of view, tooth and nail",
        "Continuously interrupt your colleague",
      ],
    },
    {
      text: "Q) You're at a friend's birthday party where you don't know many people. You: ?",
      options: [
        "Stick with one or two people you already know and chat quietly",
        "Find a calm spot to observe rather than join the crowd",
        "Start conversations with new people and join group activities",
        "Get involved in games or help organize things to stay active",
      ],
    },
    {
      text: "Q) You are taking part in a guided tour of a museum. You're too far back, so don't really hear what the guide is saying. You: ?",
      options: [
        "Stay at the back and can't hear the guide properly",
        "Follow the group without question",
        "Make sure that everyone is able to hear properly",
        "Are right up the front, adding your own comments in a loud voice",
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  //array to store selected answers for each question
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  console.log("this is array" , answers )
  // this function will store selected option
  const selectingAnswer = (optionIndex) => {
    // A copy for answers array so i can update it safely
    const updated = [...answers];
    // array.with
    updated[currentQuestion] = optionIndex;
    setAnswers(updated);
  };
  // allows moving to next question unless it's a last question
  const nextButton = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  // allows moving back to previous question unless it's the first question
  const previousButton = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  // this function is for the final calculation of the result
  const calculateResult = () => {
    let score = 0;
    answers.forEach((ans) => {
      if (ans === 1 || ans === 2) score += 1;
    });
    return score >= 3 ? "INTROVERT" : "EXTROVERT";
  };
  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      const finalResult = calculateResult();
      // navigate to result page and pass result as URL param
      navigate(`/personality-test-result/${finalResult}`);
    } else {
      nextButton();
    }
  };

  const topics = [
    "(1) Work",
    "(2) Patience",
    "(3) Colleague",
    "(4) Participation",
    "(5) Sociability",
  ];

  return (
    <div className="main-container">
      {/* rendering topics */}
      <div className="question-number-bar">
        {topics.map((topic, index) => (
          <span
            key={index}
            className={currentQuestion === index ? "active-topic" : ""}
          >
            {topic}
          </span>
        ))}
        {/* line behind the topics */}
        <hr className="straight-line" />
      </div>

      <div className="question-and-options-container">
        <p>{questions[currentQuestion].text}</p>
        {/* rendering question and its options */}
        {questions[currentQuestion].options.map((option, index) => (
          <label key={index} className="option">
            <input
              type="radio"
              // answers array starts from null + 1 ensures first option is 1  not 0
              checked={answers[currentQuestion] === index + 1}
              onChange={() => selectingAnswer(index + 1)}
            />
            {option}
          </label>
        ))}

        <div className="button-container">
          <button
            className="previous-btn"
            onClick={previousButton}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          {/* disable the button if the answers value is null  */}
          <button
            className="next-btn"
            onClick={handleNext}
            disabled={answers[currentQuestion] === null}
          >
            {/* if the last question is displaying change the text of button from Next to Result  */}
            {currentQuestion === questions.length - 1 ? "Result" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
