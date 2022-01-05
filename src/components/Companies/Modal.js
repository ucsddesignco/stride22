import React, { useState, useEffect } from 'react';
import '../../App.css';
import { CompanyItems } from './CompanyItems';
import x from "../../assets/images/x.svg";

function Modal(props) {

    const company = CompanyItems[`${props.index}`]

    const [working, setWorking] = useState(true);

  return (
        <div>
            {props.show &&(
                <div>
                    <div className="m-background" onClick={() => props.onHide()} />
                    <div className="m-card">
                        <div className="m-top">
                            <h2>{company.name}</h2>
                            <img src={x} className="m-x" onClick={() => props.onHide()} />
                        </div>
                        <div className="m-bottom">
                            <div className="m-left">
                                <p>{company.bio}</p>
                            </div>
                            <div className="m-right">
                                <h3>Open Roles</h3>
                                {company.roles.map((role, i) => {
                                    if(company.rolelinks[i].length > 0)
                                        return(
                                            <a href={company.rolelinks[i]} target="_blank">
                                                <p>
                                                    {role}
                                                </p>
                                            </a>
                                        );
                                    return(
                                        <p>{role}</p>
                                    );
                                })}
                                <h3 className="m-margin">{working ? "Work Authorization" : ""}</h3>
                                {company.work.map((types) => {
                                    return(
                                        <p>{types}</p>
                                    );
                                })}
                                <h3 className="m-margin">Company Site</h3>
                                <a href={company.website} target="_blank">
                                    <p>
                                        {company.name}
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    
  );
}

export default Modal;