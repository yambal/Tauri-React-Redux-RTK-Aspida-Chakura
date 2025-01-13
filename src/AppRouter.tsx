import { Routes, Route } from "react-router"
import { SamplePage } from "./pages/samples/SamplePage"
import { CounterPage } from "./pages/samples/CounterPage"
import { SampleLayout } from "./layouts/SampleLayout"
import { Layout } from "./layouts/Layout"
import { WeatherPage } from "./pages/samples/WeatherPage"
import { IndexPage } from "./pages/IndexPage"
import { OsPage } from "./pages/samples/OsPage"

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="samples">
          <Route element={<SampleLayout />}>
            <Route index element={<SamplePage />} />
            <Route path="counter" element={<CounterPage />} />
            <Route path="weather" element={<WeatherPage />} />
            <Route path="os" element={<OsPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRouter
