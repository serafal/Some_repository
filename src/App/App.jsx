
import "./App.css";
import Advantages from "../Advantages/Advantages";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Intresting from "../Intresting/Intresting";
import Production from "../Production/Production";
import Products from "../Products/Products";
import Solutions from "../Solutions/Solutions";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <p>Hello, App</p>
      <Header/>
      <Products/>
      <Solutions/>
      <Production/>
      <Advantages/>
      <Intresting/>
      <Footer/>
      <Form/>
    </div>
  );
}

export default App;
