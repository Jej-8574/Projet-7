import Navbar from "./component/navbar";
import "./App.css";
import Banner from "./component/banner";
import AppartmentGrid from "./component/ApartmentGrid"
import Content from "./component/Content.jsx";
import Footer from "./component/Footer.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <Content>
      <Banner />
      <AppartmentGrid />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
