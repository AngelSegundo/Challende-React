import React, { useContext, useState } from 'react'
import './Projects.css'
import { DataContext } from '../../context/Datacontext'
import ApiData from '../../Api.json'
import axios from 'axios'



const Proyects = () => {

    
    const { projectsData } = useContext(DataContext)
    // console.log(ApiData);
    // console.log(projectsData);

    
    return (
        <div>
            <h1>Proyetos</h1>
            <table className='box'>
                <thead>
                    <tr>
                        <th>PROYECTO</th>
                        <th>PROMOTOR</th>
                        <th>LUGAR</th>
                        <th>CO2</th>
                        <th>SELL PRICE( <br /> MM€)</th>
                    </tr>
                </thead>

                {
                    projectsData.map((eachProject) => {
                        return (
                            < tr key={eachProject.id}>
                                <td>{eachProject.name}</td>
                                <td>{eachProject.promoterCompanyName}</td>
                                <td>{eachProject.shortAddress.locality} <br />{eachProject.shortAddress.province}, {eachProject.shortAddress.region}</td>
                                <td>---</td>
                                <td>{eachProject.sellPrice}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Proyects