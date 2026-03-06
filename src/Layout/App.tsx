import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function App() {
  return (
    <div className="w-11/12 md:max-w-3xl lg:max-w-2xl mx-auto text-[#63635E] dark:text-[#dbdbdb] text-lg">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}