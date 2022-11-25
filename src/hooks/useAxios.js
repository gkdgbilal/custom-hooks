import axios from 'axios'
import React, { useEffect } from 'react'

const useAxios = (config) => {
    const [results, setResults] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    axios.defaults.baseURL = 'https://fakestoreapi.com'

    const fetchData = async () => {
        await axios.request(config)
            .then((response) => {
                setResults(response.data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { results, loading, error }

}

export default useAxios