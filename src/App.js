import './App.scss';
import Header from './components/Header';
import { Provider } from "react-redux"
import store from './redux/store';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header/>
        <UserDetails/>
      </Provider>
    </div>
  );
}

export default App;
