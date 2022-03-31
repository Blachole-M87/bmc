import React from 'react'
import { useParams } from 'react-router-dom'

const PageNotFound = () => {
    const params = useParams()
    return (
        <div className="container">
            <p>{params.pageName} 404 Page Not Found</p>
        </div>
    )
}

export default PageNotFound
