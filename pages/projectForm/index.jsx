import React from 'react';
import { validateInput } from '../api/methods/validation';
import { addProject } from '../api/methods/db_methods';
import { useRouter } from 'next/router';


function projectForm() {
  const router = useRouter();

  //TODO: Method will handle validation
  const handleBlurEvent = (event) => {
    switch(event.target.id)
    {
      case "title": validateInput(event.target.value, "title"); break;
      case "description": validateInput(event.target.value, "description"); break;
    }
    
  }

  const handleSubmit = async (event) => {
      event.preventDefault();
      addProject(event).then((smth) => {
        router.push('/projectForm/submitted');
      }).catch((smth) => {router.push('/projectForm/failed');});
  }

  return (
    <div className='grid max-w'>
      <form onSubmit={handleSubmit} className="justify-self-center my-32">
        
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm px-12">
            <label htmlFor="title" className="form-label inline-block mb-2 text-gray-700">Title<span className='text-red-500'>*</span></label>
            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="title"
            placeholder="Project title"
            onBlur={handleBlurEvent}
            required
            />
            <div id='titleErr' className='text-red-500'></div><br/>

            <label htmlFor="description" className="form-label inline-block mb-2 text-gray-700">Description<span className='text-red-500'>*</span></label>
            <textarea id='description' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder='Project description'
            onBlur={handleBlurEvent}
            required
            />
            <div id='descriptionErr' className='text-red-500'></div><br/>

       
            <label htmlFor="previewImg" className="form-label inline-block mb-2 text-gray-700">Project Preview Image</label>
            <input className='form-control text-base font-normal text-gray-700 bg-white ' type="file" accept=".png, .jpg, .jpeg, .webp" id="previewImg"/>
            <br/>

            <button type='submit' className='btn bg-blue-500 mt-4 rounded-lg px-2 py-1 text-white hover:opcaity-50 hover:text-black hover:bg-blue-400'>Submit</button>
          </div>
      </form>
    </div>
  )
}

export default projectForm