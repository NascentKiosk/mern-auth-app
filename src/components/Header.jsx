import {Link } from 'react-router-dom';

function Header() {
  return (
    <div className='bg-slate-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to= "/home">
                <h1 className='font-bold'>SFI Kurs </h1>
            </Link>
            
            <ul className='flex gap-4'>
                <Link to= "/ kur b">
                <li>Kurs B</li>

                </Link>
                <Link to= "/ kur c">
                <li>Kurs C</li>

                </Link>
                <Link to= "/ kur d">
                <li>Kurs D</li>

                </Link>
                <Link to= "/ om oss">
                <li>Om Oss</li>

                </Link>
                <Link to= "/ login">
                <li>LogIn</li>

                </Link>
                <Link to= "/ signup">
                <li>SignUp</li>

                </Link>
                
            </ul>
        </div>
      
    </div>
  )
}

export default Header
