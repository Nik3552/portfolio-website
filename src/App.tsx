import './App.css'
import { Intro } from './components/pages/Introduction'
import { AboutMe } from './components/pages/AboutMe'
import { Skills } from './components/pages/Skills'
import { Projects } from './components/pages/Projects'
import { ContactForm } from './components/pages/ContactForm'
import { Footer } from './components/partials/Footer'


function App() {

  return (
    <div className='flex flex-col justify-center items-center overflow-x-hidden'>
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
