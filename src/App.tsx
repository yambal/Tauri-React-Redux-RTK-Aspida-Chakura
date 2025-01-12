
import { Counter } from "./features/counter/Counter";
import WeatherContainer from "./features/weather/Wearger";

import { Notification } from "./features/notification/Notification";

function App() {

  return (
    <main className="container">
      <Counter />
      <Notification />
      <WeatherContainer />
    </main>
  );
}

export default App;
