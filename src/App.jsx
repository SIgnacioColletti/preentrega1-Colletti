
import './App.css';
import { ItemListContainer } from './navbar/components/ItemListContainer';

import { Navbar } from './navbar/Navbar';

function App() {
  return (<>
    <Navbar />
    <div className="titulo">

      <ItemListContainer mensaje="NC Clohes is coming..." />
    </div>





  </>
  );
}

export default App;
