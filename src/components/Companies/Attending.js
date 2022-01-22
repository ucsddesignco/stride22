import React, { useState } from 'react';
import '../../App.css';
import { Grid } from "@material-ui/core";
import Modal from './Modal';
import { CompanyItems } from './CompanyItems';
import cross from "../../assets/images/cross.svg";

function Attending() {

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
        <div className='attending'>
            <h1>Attending Companies</h1>
            <Grid container justifyContent="">
                {CompanyItems.map((company, index) => {
                    return(
                        <Grid item xs={12} sm={6} md={4} /* onClick={() => display(index)} */>
                            <div className="attending-card">
                                {/* <img src={cross} alt="" className="cross-image" /> */}
                                <img src={require(`../../assets/images/companies/${company.image}`)} className="attending-image" />
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
            <p>and more!</p>

            <Modal
                show={showModal}
                onHide={hideModal}
                index={index}
            />
        </div>
    
    );
}

export default Attending;