import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.heroBanner.scss"
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux'
import { Img, ContentWrapper } from '../../../components'


function HeroBanner() {

	const [searchQuery, setSearchQuery] = useState("")
	const [bgPhoto, setBgPhoto] = useState("")
	const navigate = useNavigate()
	const {url} = useSelector(state => state.home)

	const {data, loading} = useFetch("/movie/upcoming")

	//whenever page refreshes page a new backgound image is set from upcomings
	useEffect(()=>{
		const bg = url.backdrop + data?.results[Math.floor(Math.random()*data?.results.length)]?.backdrop_path
		setBgPhoto(bg)
	},[data])



	const searchQueryHandler = (e) => {
		if(searchQuery?.length > 0 && e.key === "Enter"){
			navigate(`/search/${searchQuery}`)
		}
	}

	const searchButtonHandler = () =>{
		navigate(`/search/${searchQuery}`)
	}

	return (
		<div className="heroBanner">
			{
				!loading &&	<div className="backdrop-img">
					<Img src={bgPhoto} />
				</div>
			}

			<div className="opacity-layer"></div>
			<ContentWrapper>
				<div className="wrapper">
					<div className="heroBannerContent">
						<span className="title">Welcome.</span>
						<span className="subTitle">
							Millions of Movies, TV shows and people to discover.
							Explore Now.
						</span>
						<div className="searchInput">
							<input
								type="text"
								placeholder='Search for movie or TV show....'
								onChange={(e)=>setSearchQuery(e.target.value)}
								onKeyUp={searchQueryHandler}
							/>
							<button
								onClick={searchButtonHandler}
							>
								Search
							</button>
						</div>
					</div>
				</div>
			</ContentWrapper>
		</div>
	)
}

export default HeroBanner