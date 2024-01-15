import React from 'react'
import "./style.home.scss"
import { HeroBanner, Popular, TopRated, Trending, Upcoming } from "../index"

function Home() {
	return (
		<div className="homePage">
			<HeroBanner />
			<Trending />
			<Popular />
			<TopRated />
			<Upcoming />
		</div>
	)
}

export default Home