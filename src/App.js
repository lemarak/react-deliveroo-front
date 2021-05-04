import "./App.css";
import "./media.css";

import axios from "axios";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Content from "./components/Content";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faPlusCircle, faMinusCircle);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3100/");
        // const response = await axios.get(
        //   "https://hidden-coast-18862.herokuapp.com/"
        // );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div>
      <Header restaurant={data.restaurant} />
      <Content
        categories={data.categories}
        articles={articles}
        setArticles={setArticles}
      />
    </div>
  );
}

export default App;
