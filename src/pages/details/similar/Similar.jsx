import React from 'react'
import { Carousel } from "../../../components/index.js"
import useFetch from '../../../hooks/useFetch.js'


function Similar({mediaType, id}) {
    const {data, loading, error} = useFetch(`/${mediaType}/${id}/similar`)

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies"

    return (
            <Carousel title={title} data={data?.results} loading={loading} endpoint = {mediaType}/>
    )
}

export default Similar