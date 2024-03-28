import { useEffect, useState } from "react";
import { getBookAppliction } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis,Cell } from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Pages = () => {
  const [readPages, setReadPages] = useState([]);
  const books = useLoaderData();
  console.log(books)
  const loadReadPages = getBookAppliction();
  console.log(loadReadPages)
  
  useEffect(() => {
    
    if (books.length > 0) {
      let storeReadBooks = [];
      const readListBooks = books.filter((book) =>
        loadReadPages.includes(book.bookId)
      );
      // storeReadBooks.push(readListBooks);
      setReadPages(readListBooks);
      console.log(readListBooks);
    }

  }, [books]);
  console.log(readPages);

  return (
    <div className="font-WorkSans flex flex-col items-center">
      <BarChart
      width={500}
      height={300}
      data={readPages}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {readPages.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </div>
  );
};

export default Pages;
