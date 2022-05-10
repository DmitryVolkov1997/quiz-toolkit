import {Route, Routes} from "react-router-dom";
import classes from "../src/App.module.scss";
import Layout from "./components/Layout/Layout";
import Quiz from "./components/Quiz/Quiz";
import Auth from "./components/Auth/Auth";
import QuizCreator from "./components/QuizCreator/QuizCreator";
import QuizList from "./components/QuizList/QuizList";

function App() {
    return (
      <div className="App">
          <Layout>
              <Routes>
                  <Route path="/auth" element={<Auth/>}/>
                  <Route path="/quiz-creator" element={<QuizCreator/>}/>
                  <Route path="/quiz/:id" element={<Quiz/>}/>
                  <Route path="/" element={<QuizList/>}/>
              </Routes>
          </Layout>
      </div>
    );
}

export default App;
