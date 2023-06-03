import './App.css';
import { Provider } from 'react-redux';
import RouteService from './RouteService';
import Store from './Redux/Store/Store';

function App() {
  return (
    <Provider store={Store}>
      <RouteService/>
    </Provider>
    )}
    
export default App;
