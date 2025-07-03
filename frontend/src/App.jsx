import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter.jsx";
import {ToastContainer} from "react-toastify";
import './App.css';

function App() {
  return (
    <>
        <Router>
            <div className="app-container">
                <AppRouter />
            </div>
        </Router>
        <ToastContainer position="bottom-right"  autoClose={2000} />
    </>
  )
}

export default App
