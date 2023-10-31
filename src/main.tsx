import React from 'react';
import ReactDOM from 'react-dom/client';
import { Resume } from './resume/Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { themeClass } from './styles.css';

const rootElement = document.getElementById('root') as HTMLElement;
rootElement?.classList.add(themeClass);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
