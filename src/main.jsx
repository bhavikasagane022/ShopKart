import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router.jsx';
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import ErrorBoundary from './Component/ErrorBoundary.jsx';



// Provide router to app 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
     <ErrorBoundary>
       <RouterProvider router={router}/>
     </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>,
)