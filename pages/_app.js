import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { ProviderWrapper } from './store/app_context';

function MyApp({ Component, pageProps }) {
  return (
    <ProviderWrapper>
      <div className='bg-blue-500'>
          <Navbar/>
          <Component {...pageProps}/>
      </div>
    </ProviderWrapper>
      );
  
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

export default MyApp
