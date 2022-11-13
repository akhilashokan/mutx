import React from "react"
export default function Header() {
    return (
        <header className="header">
            <div className="logo_container">
                <div id="logo">
                    <span>=</span>
                    <span>_</span>
                    <span>=</span>
                </div>
            </div>
            <div className="share">
                <p>share</p>
                <div className="toggle">
                    <a href="">facebook</a><br />
                    <a href="">facebook</a>
                </div>
            </div>
        </header>
    )
}