import './App.css';
//import { FCCounter } from './Components/Test/fc-counter';
//import MouseProvider from './Components/Test/MouseProvider';
//import { Thanos } from './Thanos';
//import Counter from './Components/Accounts/Test';
//import { RegisterUser } from './Components/Accounts/RegisterUser';
//import Klass from './Klass';
//import Lists from './Lists';
//import UseReducer from './UseReducer';
//import RenderProps from './Components/Test/RenderProps';
//import { withState } from './Components/Test/HOCwrappingcomponent';
import { withErrorBoundary } from './Components/Test/WithErrorBoundary';
import { ErrorMessage } from './Components/Test/ErrorMessage';
import { useState } from 'react';
//import { MouseProvider } from './Components/Test/MouseProvider';

//const FCCounterWithState = withState(FCCounter);
const ErrorMessageWithErrorBoundary = withErrorBoundary(ErrorMessage);

const BrokenComponent = () => {
  throw new Error('I\'m broken! Don\'t render me');
}

const BrokenButton = () => {
  const [shouldRenderBrokenComponent, setShouldRenderBrokenComponent] = useState(false);
  if(shouldRenderBrokenComponent){
    return <BrokenComponent/>
  }
  return (
    <button type='button' onClick={()=>setShouldRenderBrokenComponent(true)} >
      {`Throw nasty error`}
    </button>
  )
}


function App() {
  return (
    <div>
      <ErrorMessageWithErrorBoundary>
        <BrokenButton/>
      </ErrorMessageWithErrorBoundary>
    </div>
  );
}

export default App;
