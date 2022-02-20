import React from 'react'
import { Link } from 'react-router-dom'
import {FaQuestion} from 'react-icons/fa'

function AboutIconLink() {
  return (
    <div>
        <Link to={{
            pathname: '/about'
        }}>
            <FaQuestion size={30}/>
        </Link>
    </div>
  )
}

export default AboutIconLink