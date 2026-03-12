import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./Layout/App"
import MainView from "./views/MainView"
import ViakableView from "./views/ViakableView"
import ProfescoreView from "./views/ProfescoreView"
import UanlView from "./views/UanlView"
import ScrollToTop from "./components/ScrollToTop"

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route>
          <Route path="/" element={<App />}>
            <Route element={<MainView />} index />
              <Route path="/experiencia/viakable" element={<ViakableView />} />
              <Route path="/experiencia/profescore" element={<ProfescoreView />} />
              <Route path="/experiencia/uanl" element={<UanlView />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
