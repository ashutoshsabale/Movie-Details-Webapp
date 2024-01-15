import React from 'react'
import { Carousel } from "../../../components/index.js"
import useFetch from '../../../hooks/useFetch.js'


function Recommondation({mediaType, id}) {
    const {data, loading, error} = useFetch(`/${mediaType}/${id}/recommendations`)

    const title = "Recommonded"

    if(data?.results.length===0) return;

    return (
      <Carousel title={title} data={data?.results} loading={loading} endpoint = {mediaType}/>
    )
}

export default Recommondation