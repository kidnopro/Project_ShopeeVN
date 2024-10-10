import { ToastContainer } from "react-toastify";
import useRouteElements from "./useRouteElements";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const RouteElements = useRouteElements();
  return <div>
    {RouteElements}
    <ToastContainer />
  </div>;
  
 
}

export default App;
