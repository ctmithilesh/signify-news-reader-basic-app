import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../assets/css/common.css'
const API = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5497647da2114041ad647eba8e002d6f'
const Business = () => {

    // reactive variable 
    const [news, setNews] = useState(null)

    // condition
    const dataCondition = news != null && news.length > 0

    // lifecycle 
    useEffect(() => {
        fetchSportsNews()

    }, [])

    const fetchSportsNews = async () => {

        try {
            const result = await axios.get(API)
            console.log(result)
            setNews(result.data.articles)
        }
        catch (e) {
            console.log(e)
        }

    }

    return (
        <div>
            {dataCondition ? news.map((item, index) => (
                <div key={index} class="news-card">
                    <img
                        src={item.urlToImage}
                        alt="img"
                        width="250"
                        height="250"
                    />

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>

            )) : <span> News is Loading.... </span>}

        </div>
    )
}

export default Business
