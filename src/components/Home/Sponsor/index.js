import React from 'react'
import StrideLogo from '../../../assets/stride-logo.svg';

import './style.css'

function Sponsors() {
    return (
        <section className="sponsors">
            <div className="sponsors__header">
                <h1>Top Sponsors</h1>
                <a>View all attending companies ⟶</a>
            </div>
            <div className="sponsors__list">
                <div className="sponsors__card">
                    <img src={StrideLogo}/>
                </div>
                <div className="sponsors__card">
                    <img src={StrideLogo}/>
                </div>
                <div className="sponsors__card">
                    <img src={StrideLogo}/>
                </div>
                <div className="sponsors__card">
                    <img src={StrideLogo}/>
                </div>
            </div>
        </section>
    )
}

export default Sponsors
