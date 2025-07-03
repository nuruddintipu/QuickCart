import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter.jsx";

function App() {
  return (
    <>
        <Router>
            <AppRouter />
        </Router>
    </>
  )
}

export default App
