import React from 'react'

export default function Navbar() {
  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg">
  <div className="container-fluid">
    <a className="navbar-brand" style={{fontFamily:'Unbounded, cursive'}} href="/">Movie Verse</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
</nav>
    </div>
  )
}
