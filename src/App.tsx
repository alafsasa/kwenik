import './App.css';
//import { Thanos } from './Thanos';
//import Counter from './Components/Accounts/Test';
//import { RegisterUser } from './Components/Accounts/RegisterUser';
//import Klass from './Klass';
import Lists from './Lists';

function App() {
  return (
    <div>
      <Lists items={['george', 'deno', 'ben', 'patek', 'brian', 'oliver']} itemRenderer={(item)=><div key={item}>{item}</div>} />
    </div>
  );
}

export default App;
