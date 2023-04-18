import React from 'react';
import ReactDOM from 'react-dom/client';
import { CalendarApp } from './CalendarApp';
import 'sweetalert2/dist/sweetalert2.css';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    //<React.StrictMode>
    <CalendarApp />
    //</React.StrictMode>,
);
