import './app.scss'
import Feedback from './components/feedback/Feedback'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Projects from './components/projects/Projects'
import Services from './components/services/Services'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Services />
      <Portfolio />
      <Projects />
      <Feedback />
      <Footer />
    </>
  )
}

export default App
