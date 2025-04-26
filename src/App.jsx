import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { MPJHDProvider } from './context/MPJHDContext';

const App = () => {
  return (
    <MPJHDProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MPJHDProvider>
  )
};

export default App;
