import React from 'react'

const Navbar = ({ setPage }) => {
    return(
        <div >
            <button style={{color: 'blue'}} onClick={() => setPage('planet')}> Planet </button>
            <button style={{color: 'blue'}} onClick={() => setPage('people')}> People </button>
        </div>
    )
}
export default Navbar;