import Header from './Header.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';
import './App.css'

function App() {
 

  return (
    <>
      <Header/>
      <Card title="Card Title1" content="This is the content of the card1."/>
      <Card title="Card Title2" content="This is the content of the card2."/>
      <Card title="Card Title3" content="This is the content of the card3."/>
      <hr></hr>
      <Footer/>
    </>
  )
}

export default App
