import './App.css';
import { FCCounter } from './Components/Test/fc-counter';
//import MouseProvider from './Components/Test/MouseProvider';
//import { Thanos } from './Thanos';
//import Counter from './Components/Accounts/Test';
//import { RegisterUser } from './Components/Accounts/RegisterUser';
//import Klass from './Klass';
//import Lists from './Lists';
//import UseReducer from './UseReducer';
//import RenderProps from './Components/Test/RenderProps';
import { withState } from './Components/Test/HOCwrappingcomponent';

const FCCounterWithState = withState(FCCounter);


function App() {
  return (
    <div>
      <FCCounterWithState label='FCCounterWithState' />
    </div>
  );
}

export default App;
