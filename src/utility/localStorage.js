
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

const getWishList = () =>{
    const storedWishist = localStorage.getItem('wishlist-id');
    if(storedWishist){
        return JSON.parse(storedWishist);
    }else{
        return [];
    }
}

const saveWishList = id =>{
    const storedWishLists = getWishList();
    const isExists = storedWishLists.includes(id)

}
export {getBookAppliction,saveBookApplication}