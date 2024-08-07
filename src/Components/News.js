import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
  const [article,setArticle] = useState([])
  const [loading,setLoading] = useState(false)
  const [pagee,setPagee] = useState(1)
  const [totalResults,setTotalResults] = useState(0)
  
const pageLoader = async(page_no)=>{
      
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.Category}&apiKey=${props.apikey}&page=${page_no}&pageSize=${props.pagesize}`
      setLoading(true)
      let data = await fetch(url)
      let parsedData = await data.json()
      setArticle(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
    }

    useEffect(() => {
      pageLoader(pagee)
      // eslint-disable-next-line
    },[])


    const fetchMoreData = async() => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.Category}&apiKey=${props.apikey}&page=${pagee+1}&pageSize=${props.pagesize}`
      setPagee((pagee+1))

      setLoading(true)
      let data = await fetch(url)
      let parsedData = await data.json()
      setArticle(article.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      setLoading(false)
    };
    
    return (
      <>
          <h2 className="text-center" style={{marginTop:"45px"}}>{`${props.Category} News Headlines`}</h2> 
          {loading && <Spinner/>}
          <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
          {article.map((element)=>{
            return <div className="col-md-3" key={element.url} >
              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUuLlM7EUgpTIpVzSK-qF-yCBlAz81Ydz_w&usqp=CAU"} newsUrl={element.url?element.url:""} author={element.author?element.author:"Unknown"} date={element.publishedAt?element.publishedAt:"Unknown"}/>
            </div>
          })}
          </div>
          </div>
          </InfiniteScroll>
        {/* </div> */}
        <div style={{height:"50px"}}></div>
      </>
    );
}

News.defaultProps={
  pageSize:20,
  Category:"general"
  }
News.propTypes = {
    pageSize:PropTypes.number.isRequired,
    Category:PropTypes.string
  }

export default News;
