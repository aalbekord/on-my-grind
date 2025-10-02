import './App.css'
import BaristaForm from './components/BaristaForm';


function App() {

  return (
    <>
    <div className="title-container">
      <img src="https://static.vecteezy.com/system/resources/previews/068/635/709/non_2x/coffee-cup-with-latte-art-on-white-background-free-vector.jpg" alt="cofee bag logo" className="logo"/>
      <h1 className="title">On My Grind</h1>
      <p>So you think you can barista? Let's put that to the test...</p>
    </div>
    <BaristaForm />
    </>
  )
}

export default App
