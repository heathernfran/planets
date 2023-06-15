import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import type { Interaction } from 'scheduler/tracing';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Profiler
      id={'App'}
      onRender={function (
        id: string,
        phase: 'mount' | 'update',
        actualDuration: number,
        baseDuration: number,
        startTime: number,
        commitTime: number,
        interactions: Set<Interaction>
      ): void {
        console.log({ phase, actualDuration });
      }}
    >
      <App />
    </Profiler>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
