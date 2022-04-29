import Card from "../components/Card";
import ProjectCard from "../components/ProjectCard";
import Avatar from "../components/Avatar";
import { ref, onValue } from 'firebase/database';
import { db } from "./api/methods/firebase_obj";
import { useState, useEffect } from "react";
import spinner from "./api/assets/spinner.gif";
import Image from "next/image";
import { useRouter } from 'next/router'
import { route } from "next/dist/server/router";

function Home(props) {

  // const [isLoaded, setIsLoaded] = useState(false);
  // const router = useRouter();

  // // useEffect(() => {
  // //     setTimeout(()=>{}, 5000);
  // // }, []);

  //   const loadProject = () => {
  //       //const num = projects.length;//[1, 2, 3, 4, 5, 6]; //counts number of cards
        
       
  //       if(props.result !== null)
  //       {
  //         const data = JSON.parse(props.result);
  //         const result = Object.entries(data);
  //         console.log(result, "index");
   
  //         return result.map((value, number) => { return <ProjectCard id={"project" + number} props={value[1]} />; });
  //       }
  //       else
  //       {
  //         //return <Image src={spinner} width='500px' height='300px' />
  //         console.log("this happened");
  //         //setIsLoaded(true);
  //       }
  //     }

  return (
    <>
        <div>
          <Card props={<Avatar/>}/>
        </div>
        
        <div id="cards" className="grid grid-cols-3">
          {/*loadProject()*/}
        </div>
    </>
  )
}

// export async function getServerSideProps(){
//   const dbRef = ref(db, 'projects/');
//   let temp;
//   const data =  onValue(dbRef, (snapshot) => {
//         const data = snapshot.val();
//         console.log(data, "index");
//         temp = data;
//     });

//     return {
//       props:{
//         result: JSON.stringify(temp) || null
//       }
//     };

// }

// export async function getStaticProps(){
//   const dbRef = ref(db, 'projects/');
//   let temp;
//   const data =  onValue(dbRef, (snapshot) => {
//         const data = snapshot.val();
//         console.log(data, "index");
//         temp = data;
//     });
    
//     return {
//       props:{
//         result: JSON.stringify(temp) || null
//       },
//       revalidate:1
//     };
// }

export default Home