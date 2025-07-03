import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter.jsx";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <>
        <Router>
            <AppRouter />
        </Router>
        <ToastContainer position="bottom-right"  autoClose={2000} />
    </>
  )
}

export default App
