import React, { useState } from 'react';
import './SubmitPage.css';

const Page1 = ({ onButtonClick }) => {
    return (
        
      <button class="glow-on-hover" type="button" onClick={onButtonClick}>Submit</button>
      );
};

export default Page1;
