import React, { useState } from 'react'
import { Carousel, ContentWrapper, SwitchTabs } from "../../../components/index.js"
import useFetch from '../../../hooks/useFetch.js'

import "../style.home.scss"

function Upcoming() {
    const [endpoint, setEndpoint] = useState("movie")
    const [endpoint2, setEndpoint2] = useState("upcoming")

    const {data, loading} = useFetch(`/${endpoint}/${endpoint2}?region=US`)

    console.log(data)
    const onTabChange = (tab, i) =>{
        setEndpoint(tab === "Movies" ? "movie" : "tv")
		setEndpoint2(tab === "Movies" ? "upcoming" : "on_the_air")
    }

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Upcoming</span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange = {onTabChange}/>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint = {endpoint}/>
        </div>
    )
}

export default Upcoming