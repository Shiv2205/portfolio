import React from 'react';
import Card from "../components/Card";
import ProjectCard from "../components/ProjectCard";
import Avatar from "../components/Avatar";
import { ref, onValue } from 'firebase/database';
import { db } from "./api/methods/firebase_obj";
import { useState, useEffect } from "react";
import spinner from "./api/assets/spinner.gif";
import Image from "next/image";
import { useRouter } from 'next/router'

function About(props) {

  // const [loading, setLoading] = useState(true);
  //const router = useRouter();

  // useEffect(() => {
  //   if(props !== null)
  //     setLoading(false);
  // }, [props])



  const loadProject = () => {
    //const num = projects.length;//[1, 2, 3, 4, 5, 6]; //counts number of cards
    //console.log(props, "loadProj");
    
    //console.log(data, "loadProj");
    if(props.result !== null)
    {
      //const data = JSON.parse(props);
      const result = Object.entries(props.result);
      //console.log(result, "index");

      return result.map((value, number) => { return <ProjectCard key={"project" + number} props={value[1]} />; });
    }
    else
    {
      return <Image src={spinner} width='500px' height='300px' alt=''/>
    }
  }

  return (
    <>
      <div>
        <Card props={<Avatar/>}/>
      </div>
        
      <div id="cards" className="grid grid-cols-3">
        {/* {loading ? <Image src={spinner} width='500px' height='300px' alt=''/> : */loadProject()}
      </div>
    </>
  )
}

// About.getInitialProps = async (ctx) => {
//   const dbRef = ref(db, 'projects/');
//   let temp;
//   const data =  onValue(dbRef, (snapshot) => {
//         const data = snapshot.val();
//         console.log(data, "index");
//         temp = data;
//     });

//     return { props: JSON.stringify(temp) };
// }


export async function getServerSideProps(){
  const dbRef = ref(db, 'projects/');
  let temp;
  const data =  onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data, "index");
        temp = data;
    });

    return {
      props:{
        result: temp || null
      }
    };

}

export default About