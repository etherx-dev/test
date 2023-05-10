import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop1440LightMode1 from "./pages/Desktop1440LightMode1";
import FrameComponent from "./pages/FrameComponent";
import Desktop1440LightMode from "./pages/Desktop1440LightMode";
import FrameComponent1 from "./pages/FrameComponent1";
import Tablet11LightMode from "./pages/Tablet11LightMode";
import DesktopHEADER05 from "./pages/DesktopHEADER05";
import LandingPage from "./pages/LandingPage";
import AppLandingPage from "./pages/AppLandingPage";
import Desktop1440DarkMode from "./pages/Desktop1440DarkMode";
import FUSEDark from "./pages/FUSEDark";
import Tablet11DarkMode from "./pages/Tablet11DarkMode";
import Mobile from "./pages/Mobile";
import Android360LightMode from "./pages/Android360LightMode";
import ExportToCodeErrorsDelete from "./pages/ExportToCodeErrorsDelete";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-14":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-1440-lightmode":
        title = "";
        metaDescription = "";
        break;
      case "/frame-26":
        title = "";
        metaDescription = "";
        break;
      case "/tablet-11lightmode":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-header-05":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/app-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-1440-darkmode":
        title = "";
        metaDescription = "";
        break;
      case "/fusedark":
        title = "";
        metaDescription = "";
        break;
      case "/tablet-11darkmode":
        title = "";
        metaDescription = "";
        break;
      case "/mobile":
        title = "";
        metaDescription = "";
        break;
      case "/android-360-lightmode":
        title = "";
        metaDescription = "";
        break;
      case "/export-to-code-errors-delete-me-anytime":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop1440LightMode1 />} />
      <Route path="/frame-14" element={<FrameComponent />} />
      <Route
        path="/desktop-1440-lightmode"
        element={<Desktop1440LightMode />}
      />
      <Route path="/frame-26" element={<FrameComponent1 />} />
      <Route path="/tablet-11lightmode" element={<Tablet11LightMode />} />
      <Route path="/desktop-header-05" element={<DesktopHEADER05 />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/app-landing-page" element={<AppLandingPage />} />
      <Route path="/desktop-1440-darkmode" element={<Desktop1440DarkMode />} />
      <Route path="/fusedark" element={<FUSEDark />} />
      <Route path="/tablet-11darkmode" element={<Tablet11DarkMode />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/android-360-lightmode" element={<Android360LightMode />} />
      <Route
        path="/export-to-code-errors-delete-me-anytime"
        element={<ExportToCodeErrorsDelete />}
      />
    </Routes>
  );
}
export default App;
