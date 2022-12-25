import React from 'react'
import './Cards.css'

function Cards(props) {
  var item = props;
  return (
    <React.Fragment>
      <div className='cards'>
        {/* img: */}

        <img src={item.data.img} className='imgs' />
        {/* name: */}
        <h5>{item.data.name}</h5>
        {/* details: */}
        <p>{item.data.details}</p>
        {/* Button: */}
        <a href="https://www.facebook.com/"><button>{item.data.button}</button></a>

      </div>
    </React.Fragment>
  )
}

export default Cards