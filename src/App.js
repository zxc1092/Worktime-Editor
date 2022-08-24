import './App.css';
import WorkTime from './pages/WorkTime';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <WorkTime />
      </Provider>
    </div>
  );
}

export default App;
