import { Provider } from 'react-redux';
import Contacts from './components/Contacts/Contacts';
import Navbar from './components/Elements/Navbar';
import store from './Store';
import './styles/App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Contacts />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
