import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddContact from './components/Contacts/AddContact';
import Contacts from './components/Contacts/Contacts';
import EditContact from './components/Contacts/EditContact';
import Navbar from './components/Elements/Navbar';
import store from './Store';
import './styles/App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/">
                  <Contacts />
                </Route>
                <Route exact path="/contact/add">
                  <AddContact />
                </Route>
                <Route exact path="/contact/edit/:id">
                  <EditContact />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
