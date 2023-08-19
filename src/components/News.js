import React from 'react';
import { useState, useEffect } from 'react';
import DisplayCard from './DisplayCard';

function News(props)  {
  var url = 'https://newsapi.org/v2/everything?' +
    `q=${props.query}&` +
    'from=2022-07-17' +
    'sortBy=popularity&' +
    'apiKey=d028bdee1aa94ffd89669385702a839b';

  var req = new Request(url);
  const [result, setResult] = useState([]);
  // console.log(result);

  useEffect (()=>{
    fetch(req)
    .then(response => response.json())
    .then(data => setResult(data.articles))
  },[props.query])

    //console.log(data.articles [0].author)

    // useEffect(()=>{
    //   fetch(req).then(response=>response.json()).then(data => setResult(data.articles))
    // })


  return (
    <>
      {result.map(item =>{
        return <DisplayCard info = {item}/>
      })}
    </>
   
  )
}

export default News