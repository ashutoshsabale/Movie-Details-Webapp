import React, { useState } from 'react'
import { Carousel, ContentWrapper, SwitchTabs } from "../../../components/index.js"
import useFetch from '../../../hooks/useFetch.js'

import "../style.home.scss"

function TopRated() {
    const [endpoint, setEndpoint] = useState("movie")

    const {data, loading} = useFetch(`/${endpoint}/top_rated`)

    const onTabChange = (tab, i) =>{
        setEndpoint(tab === "Movies" ? "movie" : "tv")
        console.log(i)
    }

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Top Rated</span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange = {onTabChange}/>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
        </div>
    )
}

export default TopRated