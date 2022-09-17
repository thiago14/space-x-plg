import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import AxiosAdapter from './infra/http/AxiosAdapter';
import LaunchService from './service/LaunchService';

const httpClient = new AxiosAdapter();
const baseUrl = 'http://localhost:3000';
const launchService = new LaunchService(httpClient, baseUrl);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App launchService={launchService} />
  </React.StrictMode>
)
