import React, { useState } from 'react';
import SubmitPage from './components/Page1';
import GraphPage from './components/Page2';

const App = () => {
  const [showGraph, setShowGraph] = useState(false);

  const handleButtonClick = () => {
    setShowGraph(true);
  };

  return (
    <div>
      {!showGraph ? (
        <SubmitPage onButtonClick={handleButtonClick} />
      ) : (
        <GraphPage />
      )}
    </div>
  );
};

export default App;
