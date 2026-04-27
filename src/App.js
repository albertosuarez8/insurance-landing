import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Landing from "./pages/Landing";
import QuoteResult from "./pages/QuoteResult";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/homeowners" element={<Landing />} />
          <Route path="/quote-result" element={<QuoteResult />} />
          <Route path="/homeowners/quote-result" element={<QuoteResult />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
