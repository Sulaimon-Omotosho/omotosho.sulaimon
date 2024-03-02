import './app.scss'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Services />
      <Footer />
    </>
  )
}

export default App
