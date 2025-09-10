import Navbar from "./component/navbar";
import "./App.css";
import Banner from "./component/banner";
import AppartmentGrid from "./component/ApartmentGrid";
import Content from "./component/Content.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Content>
        <Banner />
        <AppartmentGrid />
      </Content>
      <Footer />
    </>
  );
}

export default App;
