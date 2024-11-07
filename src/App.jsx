import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'

function App() {


  return (
    <>
      <div className='max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto'>
        <Header></Header>
        <Blogs></Blogs>
      </div>
    </>
  )
}

export default App
