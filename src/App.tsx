import './App.css'
import ScrollFeed from './components/ScrollFeed'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="flex w-full md:size-full flex-col md:flex-row font-dm-sans">
      <div className="size-full md:basis-1/3 pr-10">
        <Sidebar />
      </div>
      <div className="size-full md:basis-2/3">
        <ScrollFeed />
      </div>
    </div>
  )
}

export default App
