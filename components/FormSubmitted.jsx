import React from 'react';
import Image from 'next/image';
import checkmark from '../pages/api/assets/checkmark.png';
import { useRouter } from 'next/router';

function FormSubmitted({ message }) {

    const router = useRouter();

    var success = true;
    if(message === "submission failed")
    {
        success = false;
    }

    const redirect = () => {
        var time = setTimeout(() => {
          router.push('/projectForm')
        },5000);
      }


  return (
    <div className='grid'>
        <div id="success" className='justify-self-center w-1/4 pb-4'>
            {success ? <Image src={checkmark} width= '250px' height= '250px' alt='check mark'/> : null}
        </div>
        <h1 className='justify-self-center capitalize font-bold text-4xl'>Form {message}</h1><br/>
        <p className='justify-self-center'>You will be redirected in a few seconds. {redirect()}</p>
    </div>
  )
}

export default FormSubmitted