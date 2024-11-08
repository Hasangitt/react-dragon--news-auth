import { useLoaderData } from "react-router-dom";
import Header from "../SharedPages/Header";
import LeftSideNav from "../SharedPages/LeftSideNav";
import Navbar from "../SharedPages/Navbar";
import RightSideNav from "../SharedPages/RightSideNav";
import NewsCard from "./NewsCard";





const Home = () => {
  const news = useLoaderData();
  console.log(news)
  

  return (
    <div>
        {/* header contents */}
        <Header></Header>
        <Navbar></Navbar>
        {/* home layout structure and contents*/}
      <div className="grid md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          {
            news.map(anews => <NewsCard
            key={anews._id}
            news={anews}
            ></NewsCard>)
          }
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
