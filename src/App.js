import {RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Router';

function App() {

  return (
    <div className=' max-w-screen-2xl'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
