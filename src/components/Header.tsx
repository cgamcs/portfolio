import { Link } from "react-router-dom"

function Header() {
  return (
    <header className='mt-30 mb-35 flex flex-col'>
        <Link
          to='/'
          className="text-black dark:text-white"
        >César García</Link>
        
        <span className='-mt-1.5 text-indigo-600 dark:text-indigo-400'>Software Engineer</span>
    </header>
  )
}

export default Header