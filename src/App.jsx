import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Converter from './components/Converter.jsx'
import Steps from './components/Steps.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="grain min-h-screen bg-ink">
      <Navbar />
      <Hero />
      <Converter />
      <Steps />
      <Footer />
    </div>
  )
}
