import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import PaginationComponent from './Pagination'

const MovieList = ({Movies,getpage,pageCount}) => {
  return (
    
    <Row className="mt-3">
        {
            Movies.length >=1 ? (Movies.map((mov)=>{
               return(<CardMovie mov={mov} />)
            })) : <h2>n'est pas film </h2>
        }
      {
        Movies.length>=1 ?(<PaginationComponent getpage={getpage} pageCount={pageCount} />) : null
      }
      

    </Row>
  )
}

export default MovieList
