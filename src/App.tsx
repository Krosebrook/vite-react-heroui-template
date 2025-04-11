import { Route, Routes } from "react-router-dom";

import { CookieConsentProvider } from "./contexts/cookie-consent-context";
import { CookieConsent } from "./components/cookie-consent";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";

function App() {
  return (
    <CookieConsentProvider>
      <CookieConsent />
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<DocsPage />} path="/docs" />
        <Route element={<PricingPage />} path="/pricing" />
        <Route element={<BlogPage />} path="/blog" />
        <Route element={<AboutPage />} path="/about" />
      </Routes>
    </CookieConsentProvider>
  );
}

export default App;
