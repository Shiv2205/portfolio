import avatar from '../pages/api/assets/avatar.jpeg';
import Image from 'next/image';

//rounded-full shadow-lg w-32 h-32 mb-4 mx-auto justify-self-center
//layout='fill' objectFit='cover'
function Avatar() {
  return (
    <div className='grid'>
      <div className='w-32 h-32 mb-4 mx-auto justify-self-center'>
      <Image src={avatar} width= '300px' height= '300px' className='rounded-full shadow-lg' alt='Avatar'/>
      </div>
        
        <h5 className="text-6xl font-medium uppercase leading-tight mb-2 justify-self-center">John Doe</h5>
         <p className="text-xl uppercase justify-self-center">Web designer</p>  
    </div>
  )
}

export default Avatar