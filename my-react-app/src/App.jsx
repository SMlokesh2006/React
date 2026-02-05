import Header from './Header.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';
import './App.css'
import UserGreetings from "./UserGreetings.jsx";
import Counter from "./Counter.jsx";

function App() {
 

  return (
    <>
      <Header/>
      <Card title="Card Title1" content="This is the content of the card1."/>
      <Counter/>
      <hr></hr>
      <Footer/>
    </>
  )
}

export default App
