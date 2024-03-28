import { useEffect, useState } from "react";
import { getStoredBooks } from "../../Utility/localStorage";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const PagesRead = () => {
  const allBooks = useLoaderData();

  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const readedBookId = getStoredBooks();

    const storedReadBooks = allBooks.filter((book) =>
      readedBookId.includes(book.bookId)
    );
    const readBookData = storedReadBooks.map((readbook) => ({
      name: readbook.bookName,
      pages: readbook.totalPages,
    }));
    setReadBooks(readBookData);
  }, [allBooks]);

  const data = readBooks.length > 0 ? readBooks : [];

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="mt-12">
      <div className="flex justify-center bg-[#13131308] rounded-3xl p-6">
        <BarChart
          width={600}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="pages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default PagesRead;