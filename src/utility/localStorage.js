import { json } from "react-router-dom";
import { toast } from "react-toastify";

const getBookAppliction = () =>{
    const storedBookApplication = localStorage.getItem('books-id');
    if(storedBookApplication){
        return JSON.parse(storedBookApplication);
    }else{
        return [];
    }

}

const saveBookApplication = id => {
    const storedBookApplications = getBookAppliction();
    const exists = storedBookApplications.includes(id)
    if(!exists){
        storedBookApplications.push(id);
        localStorage.setItem('books-id',JSON.stringify(storedBookApplications))
    }else{
        toast('This book is already added');
    }
}

export {getBookAppliction,saveBookApplication}