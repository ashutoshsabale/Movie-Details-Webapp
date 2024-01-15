import React from 'react'
import "./style.details.scss"

import useFetch from "../../hooks/useFetch.js"
import { useParams } from 'react-router-dom'
import { DetailsBanner, Cast, VideosSection, Similar, Recommondation } from "../index.js"

function Details() {

    const {mediaType, id} = useParams()
    const {data, loading} = useFetch(`/${mediaType}/${id}/videos`)
    const {data: credits, loading: creditsLoading} = useFetch(`/${mediaType}/${id}/credits`)

    return (
        <div>
            <DetailsBanner video={data?.results[0]} crew={credits?.crew}/>
            <Cast data={credits?.cast}  loading={creditsLoading}/>
            <VideosSection data={data} loading={loading}/>
            <Similar mediaType={mediaType} id={id}/>
            <Recommondation mediaType={mediaType} id={id} />
        </div>
    )
}

export default Details