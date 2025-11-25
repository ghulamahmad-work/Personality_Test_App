import { useParams, Link } from "react-router-dom";

export default function Result() {
  const { result } = useParams(); // getting result from URL

  const quotes = {
    INTROVERT: "Still waters run deep, and so do introverts' minds - Jenn Granneman",
    EXTROVERT: "Extroverts are more attuned to social rewards, so they are more likely to flash a smile for effect - Susan Cain.",
  };

  return (
    <div className="Home-page">
      <p>YOU'RE AN {result}</p>
      {/* it displays the quote for the result from URL */}
      <p className="quote">{quotes[result]}</p>
      <Link className="try-again" to="/">Try Again</Link>
    </div>
  );
}
