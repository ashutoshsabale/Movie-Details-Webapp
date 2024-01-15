import { useEffect } from "react"
import fetchDataFromApi from "./utils/api.js"
import { getApiConfiguration, getGenres } from "./store/homeSlice.js"
import { useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components/index.js"

function App() {
    const dispatch = useDispatch()
    const apiConfigure = () => {
        fetchDataFromApi('/configuration')
        .then((res=>{
            const url = {
                backdrop: res.images.secure_base_url + "original",
                poster: res.images.secure_base_url + "original",
                profile: res.images.secure_base_url + "original",
            }
            dispatch(getApiConfiguration(url))
        }))
    }

    const genresCall = async () =>{
        let promises = [];
        let endPoints = ["tv","movie"]
        let allGenres = {};

        endPoints.forEach((url)=>{
            promises.push(fetchDataFromApi(`/genre/${url}/list`))
        })

        const data = await Promise.all(promises);

        data?.map(({genres}) => {
            return genres.map((item) => (allGenres[item.id] = item))
        });

        dispatch(getGenres(allGenres))
    }

    useEffect(()=>{
        apiConfigure();
        genresCall();
    },[])

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}


export default App
