import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Card from "./components/card"

function App() {
 

  return (
    <>
      <Navbar/>
      <main>
        This is my main content
      </main>
      <div className="cards">
        <Card title="card 1" description="card 1 description"/>
        <Card title="card 2" description="card 2 description"/>
        <Card title="card 3" description="card 3 description"/>
       
      </div>
      <Footer/>

    </>
  )
}
export default App

//React.js is a library focuses on specific functionality
//Next.js is a framework which provides bulitin functions