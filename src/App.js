import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import QuizApp from './components/quiz-app';
import './index.css';
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/quiz">Quiz</Link> |
        <Link to="/about">About</Link> | <Link to="/demo">Demo</Link>
      </nav>

      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
          <p>this is the home page</p>
        </Route>
        <Route path="/quiz" exact>
          <QuizApp />
        </Route>
        <Route path="/about" exact>
          <h1>About</h1>
          <p>this is the about page</p>
        </Route>
        <Route path="/demo" exact>
          <h1>Demo</h1>
          <p>this is the demo page</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="container">
//         <QuizApp />
//       </div>
//     </BrowserRouter>
//   );
// }

export default App;
