import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Card from '../components/Card'



export default function NewsBuzz() {

  let [news, setNews] = useState([]),
      [page, setPage] = useState(0),
      [isFetching, setIsFetching] = useState(false),
      midRef = useRef()

  useEffect(()=>{getNewsFunc()}, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    if (!isFetching) return;
    getNewsFunc();
  }, [isFetching]);

  let handleScroll = () => {
    let cH = document.getElementById('midId').clientHeight,
      sT = document.getElementById('midId').scrollTop,
      sH = document.getElementById('midId').scrollHeight,
      perc = (sT / (sH - cH)) * 100;

    if (perc < 97) return;
    setIsFetching(true);
  };

  let getNewsFunc = async () => {
    let nextPage = page + 1;
    let reqNews = await axios
      .get(`/api/getNews?page=${nextPage}`);

    if (reqNews.status == 200) {
      setNews([...news, ...reqNews.data.news]);
      setIsFetching(false);
      setPage(nextPage);
    }
  }


  return !news.length ? <div></div> : (
    <div className='cont'>
      <div className='side'></div>
      <div id='midId' className='mid' ref={midRef} onScroll={handleScroll}>
        {
          news.map((n, i) => (
            <Card
              key={i} avatar={n?.source?.url} title={n?.source?.title}
              newsTitle={n?.title} date={new Date(n?.created_at).toDateString()}
              tags={n?.keywords?.map(k => k.name)}
            />
          ))
        }
      </div>
      <div className='side'></div>
    </div>
  );
}