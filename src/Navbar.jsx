import React from 'react'

function Navbar(props) {
   var item = props.nav;
  return (
    <div className="navbar">
        <ul>
            <li>{item.home}</li>
            <li>{item.nav.main}</li>
            <li>{item.nav.about}</li>
            <li>{item.nav.contact}</li>
        </ul>
    </div>
  )
}

export default Navbar