// import PropTypes from 'prop-types'
import React from 'react'

const NewsItem = (props)=> {
//   static propTypes = {}
      let {title,description,imageUrl,newsUrl,author,date} = props;
    return (
        <>
        <div className="card my-2" style={{width: `18rem`}}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p>by {author} on {new Date(date).toGMTString()}</p>
          <a href={newsUrl} target='blank' className="btn btn-primary">Read More</a>
        </div>
      </div>
      </>
    )
}

export default NewsItem