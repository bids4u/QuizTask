import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppRouting } from './components/app.routing';
function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <AppRouting></AppRouting>
    </div>
  );
}

export default App;
