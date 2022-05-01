import React from 'react'
import Image from 'next/image';
import { useRouter } from "next/router"; 

function ProjectCard({ id, props }) {
  const router = useRouter();

  const redirectToProject = () => {
    router.push("/projectPage/" + props.title);
  }

  return (
      <div id={id} className="flex justify-center mx-4 my-4 w-auto hover:opacity-50 hover:cursor-pointer" onClick={redirectToProject}>
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <div>
                  <Image src={props.previewImage} width='500px' height='300px' className='rounded-t-lg' alt="" />
                </div>
                  <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
                  <p className="text-gray-700 text-base mb-4">
                    {props.desciption}
                  </p>
                  </div>
              </div>
              
      </div>
  )
}

export default ProjectCard