import React, { useState } from 'react'
import { Carousel, ContentWrapper, SwitchTabs } from "../../../components/index.js"
import useFetch from '../../../hooks/useFetch.js'

import "../style.home.scss"

function Popular() {
    const [endpoint, setEndpoint] = useState("movie")

    const {data, loading} = useFetch(`/${endpoint}/popular`)

    console.log(data)
    const onTabChange = (tab, i) =>{
        setEndpoint(tab === "Movies" ? "movie" : "tv")
        console.log(i)
    }

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">What's Popular</span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange = {onTabChange}/>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint = {endpoint}/>
        </div>
    )
}

export default Popular