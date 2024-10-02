import './App.css'
import ScrollFeed from './components/ScrollFeed'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="flex size-full flex-row">
      <div className="size-full basis-1/2">
        <Sidebar />
      </div>
      <div className="size-full basis-1/2">
        <ScrollFeed />
      </div>
    </div>
  )
}

export default App
