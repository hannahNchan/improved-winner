/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Amplify } from "aws-amplify";
import { BrowserRouter } from 'react-router-dom';

import outputs from "../amplify_outputs.json";
import { basePath } from './context/constants';
import awsmobile from './aws-exports.ts';

Amplify.configure({ ...outputs, ...awsmobile });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basePath}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
