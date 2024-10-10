import React from "react";
import Header from "./components/Header/Header.tsx";
import Timeline from "./components/Timeline/Timeline.tsx";
import './app.scss';

function App() {
  
  return (
    <div className="app-wrapper">
      <Header />
      <Timeline />
    </div>
  );
}

export default App;
