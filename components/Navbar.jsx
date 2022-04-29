import { useRouter } from 'next/router';


function Navbar() {
  const router = useRouter();

  const redirect = (path) => {
    router.push('/' + path);
  }

  return (

        <div>
            <nav className='relative w-full flex flex-wrap items-center justify-between h-10 bg-blue-500 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light'>
                <div className='inline-flex'>
                  <div className='h-10 pt-2 px-4 hover:bg-blue-400 hover:text-black hover:cursor-pointer' onClick={() => redirect('')}>Home</div>
                  <div className='h-10 pt-2 px-4 hover:bg-blue-400 hover:text-black hover:cursor-pointer' onClick={() => redirect('about')}>About</div>
                  <div className='h-10 pt-2 px-4 hover:bg-blue-400 hover:text-black hover:cursor-pointer' onClick={() => redirect('contact')}>Contact</div>
                  <div className='h-10 pt-2 px-4 hover:bg-blue-400 hover:text-black hover:cursor-pointer' onClick={() => redirect('projectForm')}>Form</div>
                </div>
            </nav>
        </div>
  )
}

export default Navbar