import React, { useContext } from 'react';
import Card from "../components/Card";
import ProjectCard from "../components/ProjectCard";
import Avatar from "../components/Avatar";
import { ref, onValue } from 'firebase/database';
import { db } from "./api/methods/firebase_obj";
import spinner from "./api/assets/spinner.gif";
import Image from "next/image";
import AppContext from './store/app_context';

function About(props) {
  const ctx = useContext(AppContext);
  
  const loadProject = () => {

    if(props.result !== null)
    {
      ctx.loadProject(props.result);
      if(ctx.project)
      {
        const result = Object.entries(ctx.project);
        return result.map((value, number) => { return <ProjectCard key={"project" + number} props={value[1]} />; });
      }
    }
  }

  return (
    <>
      <div>
        <Card props={<Avatar/>}/>
      </div>
        
      <div id="cards" className="grid grid-cols-3">
        {loadProject()}
      </div>
    </>
  )
}

export async function getServerSideProps(){
  const dbRef = ref(db, 'projects/');
  let temp;
  const data =  onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data, "index");
        temp = data;
    });

    if(!temp)
    {
      return {
        redirect: {
          destination: '/about',
          permanent: true,
        },
      }
    }

    return {
      props:{
        result: temp || null
      }
    };

}

export default About