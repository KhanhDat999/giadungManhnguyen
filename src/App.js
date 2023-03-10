import './App.css';
import DefaultLayout from './components/DefautLayout';
import { BrowserRouter } from "react-router-dom";
import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </BrowserRouter>

  )

}

export default App;
