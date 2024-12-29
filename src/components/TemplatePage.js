// src/components/TemplatePage.js
import React from 'react';

const TemplatePage = ({ template }) => {
  return (
    <div>
      <h1>{template}</h1>
      <p>This page corresponds to the {template}</p>
    </div>
  );
};

export default TemplatePage;
