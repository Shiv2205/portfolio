import { firebase, db, storage } from './firebase_obj';
import { set, ref, onValue } from 'firebase/database';
import { uploadBytes, ref as sRef, getDownloadURL } from 'firebase/storage';


async function addProject(event){
   await uploadBytes(sRef(storage, 'previews/' + event.target.title.value), event.target.previewImg.files[0]);

   const response = await set(ref(db, 'projects/' + event.target.title.value), 
   {
        title: event.target.title.value,
        description: event.target.description.value,
        previewImage: await getDownloadURL(sRef(storage, 'previews/' + event.target.title.value))
   });

   console.log(response, "Project uploaded!");
}

async function loadProjects(){
    const dbRef = ref(db, 'projects/');
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data, "api");
        return data;
    });
    // get(child(dbRef, 'projects')).then((snapshot) => {
    //     if(snapshot.exists())
    //     {
    //         const obj = snapshot.val();
    //         const result = Object.entries(obj).map((key) => key[1]);
    //         const jsonResult = JSON.stringify(result);
    //         console.log(obj, "api");
    //         return snapshot;
    //     }
    //     else
    //         console.log("Smth wrong");
    // }).catch(error => {
    //     console.log(error);
    // }).finally(obj => { return obj; })
}

export { addProject, loadProjects }
