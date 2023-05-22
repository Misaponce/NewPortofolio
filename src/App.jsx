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
  {name: 'twitter', url: 'https://twitter.com/Misa_Ponce'},
  {name: 'linkedin', url: 'https://www.linkedin.com/in/misael-ponce-976aa6240/'},
  {name: 'envelope-at-fill', url: 'mailto:poncemisael@gmail.com'}
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
