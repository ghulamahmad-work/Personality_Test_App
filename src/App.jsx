import Home from "./Home";
import QuestionsComponent from "./Questions";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Result from "./Result";
const router = createBrowserRouter([
  // first page component
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  // 2nd page component
  {
    path: "/personality-test-main",
    element: (
      <div>
        <QuestionsComponent />
      </div>
    ),
  },
  // 3rd page componenet
  {
    path: "/personality-test-result/:result",
    element: (
      <div>
        <Result />
      </div>
    ),
  },
]);

function App() {
  return (
    // routing
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
