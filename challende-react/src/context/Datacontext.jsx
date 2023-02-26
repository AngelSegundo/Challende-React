import axios from 'axios';
import React from 'react'
import { createContext, useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import Homepage from '../Pages/Home/Homepage';



const tokenUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCOZiKCWqYYjx2ZZ02Y9UZmMPbfcbo6h3Q'
const ApiURL = 'https://admin-api-service-wczftpjfda-no.a.run.app/projects'


const DataContext = createContext()

const DataContextProvider = ({ children }) => {

    const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

    const [token, setToken] = useState('')
    const [projectsData, setProjectsData] = useState([])

    useEffect(() => {
        const { email, password } = loginDetails
        console.log(email);
        console.log(password);
        axios
            .post(tokenUrl,
                {
                    // email: 'fran.cadenas+officer@fusuma.io',
                    // password: '123456',
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            .then(response => {
                setToken(response.data.idToken)
                console.log('TOKEN', token);
            })
            .catch(function (error) {
                console.log(error);
                <Navigate to="/Loginpage" />
            });


        axios
            .get(ApiURL, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            .then(response => {
                setProjectsData(response.data);
                <Navigate to="/Homepage" />
                console.log('LIST', projectsData);
            })
            .catch(function (error) {
                <Navigate to="/Loginpage" />
            });

    }, [loginDetails])

    return (
        <DataContext.Provider value={{ projectsData, loginDetails, setLoginDetails }}>
            {children}
        </DataContext.Provider>
    )
}


export { DataContext, DataContextProvider }