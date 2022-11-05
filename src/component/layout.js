import Title from "../Title";
import Footer from "../Footer";
import Navigation from "../navigation";
import {Outlet} from "react-router-dom";

const Layout= () => {
    return (
       <div className="App">
          <Title />
          <Navigation />
          <Outlet />
          <Footer />
       </div>
    );
  }
  
export default Layout;