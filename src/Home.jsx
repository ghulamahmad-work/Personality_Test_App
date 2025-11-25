import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div className="Home-page">
        <p>Are you introvert or Extrovert ?</p>
        <Link to="/personality-test-main">Let's Evaluate</Link>
      </div>
    </div>
  );
}
