import { useEffect, useState } from "react";
import { getBookAppliction } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
// import ShapeChart from "../ShapeChart/ShapeChart";


const Pages = () => {
  const [readPages ,setReadPages ] = useState([]);
  const books = useLoaderData();
  const loadReadPages = getBookAppliction();
  let storeReadBooks = [];
  useEffect(()=>{
    if(books.length > 0){
      const readListBooks = books.filter(book => loadReadPages.includes(book.bookId));
      storeReadBooks.push(readListBooks)
      setReadPages(storeReadBooks)
    }
    
  },[])
  console.log(readPages);
  return (
    <div className="font-WorkSans">
    <BarChart width={1000} height={600} data={readPages[0]}>
            <Bar dataKey="totalPages" fill="green" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </BarChart>
  </div>
);
};

export default Pages;


