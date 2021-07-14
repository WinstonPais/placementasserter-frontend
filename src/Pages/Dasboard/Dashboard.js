import React from 'react';
import NavBar from './../../components/NavBar/Navbar';
// import JobCard from './CardComponent/Job/JobCard/JobCard';
//import NewCardCreation from './CardComponent/NewCardCreation/NewCardCreation';
import TableComponent from './TableComponent/TableComponent';
const Dashboard = () => {
    return(
        <>
        <NavBar/>
        <div style={{backgroundColor:"#272727"}}>
            <div>
                <h1 style={{color:"white",paddingTop:"2%",paddingBottom:"2%",paddingLeft:"9%"}}>Welcome Infosys</h1>
            </div>
        </div>
        <div className="container" style={{marginRight:"2%",marginTop:"3%"}}>
            <div className="row" style={{marginRight:"9%"}}>
                <div className="col">
                    <TableComponent/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard;