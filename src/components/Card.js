import React from 'react'
import {Link} from 'react-router-dom'

// const Card = ({runtime,image,title,hero,heroine}) => {
const Card = ({ name, hero, heroine, thumbnail}) => {
  return (
        <>
        <div className="card me-3 mb-3" style={{width: '18rem', backgroundColor:'black', color:'white', border:'1px solid gray'}}>
          <Link to={`/movie/${name}`}>
            <img src={`/${thumbnail}`} className="card-img-top" style={{width:'287px',height:'250px'}} alt={`${name}'s thumbnail`}/>
            </Link>
            <div className="card-body">
            <h5 className="card-name">{name}</h5>
            <p className="card-text">{hero} & {heroine}</p>
            {/* <p className="card-text">Duration: {runtime}</p> */}

            </div>
        </div>
        </>
  )
}
export default Card