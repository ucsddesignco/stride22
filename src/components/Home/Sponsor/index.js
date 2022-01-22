import React, { useState } from 'react'
import { Grid } from "@material-ui/core";
import Modal from '../../Companies/Modal';
import { CompanyItems } from '../../Companies/CompanyItems';
import cross from "../../../assets/images/cross.svg";

import './style.css'

function Sponsors() {
    const [showModal, setShowModal] = useState(false);
    const [index, setIndex] = useState(-1)

    const hideModal = () => {
        setShowModal(false);
    };

    const display = (value) => {
        setIndex(value);
        setShowModal(true);
    }

    return (
        <section className="sponsors">
            <div className="sponsors__header">
                <h1>Top Sponsors</h1>
                <a href="/companies">View all attending companies ⟶</a>
            </div>
            <Grid container justifyContent="">
                {CompanyItems.map((company, index) => {
                    if (index < 4)
                        return(
                            <Grid item xs={12} sm={6} md={4} >
                                <div className="attending-card">
                                    {/* <img src={cross} alt="" className="cross-image" /> */}
                                    <img src={require(`../../../assets/images/companies/${company.image}`)} className="attending-image" />
                                </div>
                            </Grid>
                        );
                })}
            </Grid>
            <Modal
                show={showModal}
                onHide={hideModal}
                index={index}
            />
            <p>and more!</p>
        </section>
    )
}

export default Sponsors
