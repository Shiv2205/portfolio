//submitted or failed
import react from 'react';
import { useRouter } from 'next/router';
import Card from '../../components/Card';
import FormSubmitted from '../../components/FormSubmitted';

function FormState() {
    const router = useRouter();

    let myMessage = 'submitted successfully';

    if(router.query.formState === "failed")
        myMessage = 'submission failed';

  return (
    <>
        <div className='grid mt-16 mx-64 w-1/2'>
          <div className='justify-self-center'>
            <Card props={<FormSubmitted message={myMessage}/>}/>
          </div>
        </div> 
    </>
  )
}

export default FormState