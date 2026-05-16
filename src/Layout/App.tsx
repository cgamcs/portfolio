import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function App() {
  return (
    // <div className="w-11/12 md:max-w-3xl lg:max-w-2xl mx-auto text-[#63635E] dark:text-[#dbdbdb] text-base md:text-lg">
    <div className="flex flex-col w-11/12 md:max-w-3xl lg:max-w-2xl mx-auto items-center justify-center text-[#1d1d1c] dark:text-[#d4d4d4] text-base md:text-lg transition-colors">
      <Header />

      <main className="w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}