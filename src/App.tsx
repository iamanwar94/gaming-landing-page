import "./App.css";
import { Snowfall } from "react-snowfall";
import LinkCards from "./components/LinkCards/LinkCards";

function App() {
  return (
    <div className="background-container">
      <div className="background-image"></div>
      <div className="overlay"></div>
      <div className="content">
        <Snowfall snowflakeCount={40} wind={[1, 0.5]} radius={[0.5, 1]} />

        <h1>Your Logo Here</h1>
        <LinkCards />
      </div>
    </div>
  );
}

export default App;
