import React from 'react'
import "./header.css"

const Header = ({ Categories }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="logo" href="#">OnlineNews</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => Categories("entertainment")}>Entertainment</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => Categories("sports")}>Sports</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => Categories("technology")}>Technology</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => Categories("health")}>Health</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => Categories("business")}>Business</div>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header