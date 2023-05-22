import './App.css'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Navbar } from './Components/Navbar'
import { Projects } from './Components/Projects'
import { Contact } from './Components/Contact'

function App() {

  // this array of objects is to defined each icon.name and icon.url that was set on the Contact component
 const icons = [
  {name: 'github', url: 'https://github.com/Misaponce'},
  {name: 'twitter', url: 'https://github.com/Misaponce'},
  {name: 'linkedin', url: 'https://github.com/Misaponce'},
  {name: 'envelope-at-fill', url: 'https://github.com/Misaponce'}
 ]

  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Projects />
      <Contact 
        icons={icons} 
      />
    </div>
  )
}

export default App
