import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../SharedPages/Navbar";
import Header from "../SharedPages/Header";


const NewsDetails = () => {
    const allnews = useLoaderData()
    const {id} = useParams();
    console.log(id)
    const news = allnews.find((news) => news._id === id)
    console.log(news)

    const {title} = news;
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1>News Details{allnews.length}</h1>
            <p>{title}</p>
        </div>
    );
};

export default NewsDetails;