import classes from "../src/App.module.scss";
import Layout from "./components/Layout/Layout";
import Quiz from "./components/Quiz/Quiz";

function App() {
    return (
      <div className="App">
          <Layout>
              <Quiz/>
          </Layout>
      </div>
    );
}

export default App;
