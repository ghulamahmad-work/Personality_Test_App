# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

  const handleSelectAnswer = (option) => {
    const updated = [...answers];
    updated[currentQuestion] = option;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1)
      setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div>
     
      <p>{questions[currentQuestion].text}</p>
      {questions[currentQuestion].options.map((option, idx) => (
        <div key={idx}>
          <input
            type="radio"
            checked={answers[currentQuestion] === option}
            onChange={() => handleSelectAnswer(option)}
          />
          {option}
        </div>
      ))}

      <div>
        <button onClick={handlePrevious} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestion === questions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );