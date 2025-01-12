import { Counter } from "./features/counter/Counter";
import WeatherContainer from "./features/weather/Wearger";

function App() {


  return (
    <main className="container">
      <Counter />
      <WeatherContainer />
    </main>
  );
}

export default App;
