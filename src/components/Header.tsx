import { Link } from "react-router-dom"

function Header() {
  return (
    <header className='mt-30 mb-35 flex flex-col'>
        <Link
          to='/'
          className="text-black dark:text-white"
        >César García</Link>
        
        <span className='text-[#63635E] dark:text-gray-400'>Software Engineer</span>
    </header>
  )
}

export default Header