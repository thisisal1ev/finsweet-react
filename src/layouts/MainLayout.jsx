import { Outlet } from "react-router-dom"
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout