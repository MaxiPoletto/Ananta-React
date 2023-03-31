import { BrowserRouter } from 'react-router-dom';
import '../App.css';
// import CustomProvider from './components/CustomProvider';
import Headers from './Headers';
import Main from './Main';
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
      <BrowserRouter>
        <ToastContainer/>
          <Headers/>
          <Main/>
          <Footer/>  
      </BrowserRouter>
  );
}

export default App;
