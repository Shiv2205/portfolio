import React, { useContext } from 'react';
import AppContext from '../api/store/app_context';
import { useRouter } from 'next/router';
import spinner from "../api/assets/spinner.gif";
import Image from 'next/image';


function ProjectPage() {
  const ctx = useContext(AppContext);
  const router = useRouter();
  const title = router.query.projectId;

  return (
    <>
    <div className="container mx-auto flex flex-col md:flex-row items-center h-screen">
            <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
                <p className="uppercase tracking-loose">{title}</p>
                <h1 className="font-bold text-3xl my-4">My Super App</h1>
                <p className="leading-normal mb-4">Enter your super app&apos;s description here... The key is to find the right length.  Don&apos;t want it to be too long, but then don&apos;t want it to be too short so that it looks weird between the title and button below.</p>
                <button className="bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent">Super Button</button>
            </div>
            
            <div className="w-full lg:w-1/2 lg:py-6 text-center">
               {/*Image goes here */}
               <Image src={spinner} width='500px' height='300px' alt=''/>
               {/* {console.log(ctx.project.Another_One, "project")} */}
            </div>
    </div>

        {/* <div className="bg-white h-screen">
            <div className="container mx-auto pt-24 md:pt-16 px-6">
                <p clasNames="py-4"><i clasNames="em em-wave"></i> <i className="em em-world_map"></i></p>		
            </div>
        </div> */}
    </>
  )
}

export default ProjectPage