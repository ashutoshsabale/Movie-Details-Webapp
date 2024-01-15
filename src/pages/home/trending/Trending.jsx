import React, { useState } from 'react'
import { Carousel, ContentWrapper, SwitchTabs } from "../../../components/index.js"
import useFetch from '../../../hooks/useFetch.js'

import "../style.home.scss"

function Trending() {
    const [endpoint, setEndpoint] = useState("day")

    const {data, loading} = useFetch(`/trending/all/${endpoint}`)

    const onTabChange = (tab, i) =>{
        setEndpoint(tab === "Day" ? "day" : "week")
    }

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange = {onTabChange}/>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    )
}

export default Trending