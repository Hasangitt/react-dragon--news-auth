import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h1 className="text-black text-xl font-semibold mb-5">All Categories</h1>
      <div>
        {categories.map((category) => (
          <Link to={`/category/${category.id}`}  className="block text-semibold font-poppins p-2 mb-2 text-gray-600 bg-gray-200 hover:bg-gray-300" key={category.id}>{category.name}</Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
