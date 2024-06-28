
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/index';
import {store} from './store.ts';
import { Provider } from 'react-redux'

function App() {
return(
<>
<Provider store = {store}>
<Router>
  <Routes />
</Router>
</Provider>
</>
)
  
}

export default App;
