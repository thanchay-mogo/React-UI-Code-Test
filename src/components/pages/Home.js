import React,{useState,useEffect} from 'react';
import { withRouter, Link } from 'react-router-dom';
import {ButtonGroup, Row, Col, Container} from "react-bootstrap";
import Axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
const [fetchData,setfetchData]=useState([]);

//Fetch Data from Json File
const getData=()=>{
    fetch('data/data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setfetchData(myJson)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const backToHome = () => {
    setfetchData([]);
  };
// Process Data
  const ProcessButtonClick = () => {
    Axios.post(`${process.env.REACT_APP_API}process`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer mF_9.B5f-4.1JqM'
        },
    })
      .then((response) => {
        toast.success("Done");
      })
      .catch((error) => {
        console.log(error);
      });
  };
//   useEffect(()=>{
//     getData()
//   },[])
  
        return (
            <div className="home">
            {fetchData.length <= 0 ? (
            <>
            <h1>Welcome To Home Page!</h1><br />
            <ButtonGroup>
                <button
                className="btn btn-outline-primary"
                 onClick={(e) => ProcessButtonClick()}
                >
                Process Data
                </button> &nbsp;
                <button
                className="btn btn-outline-warning"
                 onClick={(e) => getData()}
                >
                    Fetch Data
                </button>
            </ButtonGroup>
            <div>
            <Link className="btn-link" to="/Signup">
              <button 
              className="signup-button"
              >Click Me!</button>
            </Link>
            </div>
            </>
            ):(
              <>
               <h1>Grid Layout</h1><br />
               <button
                className="btn btn-outline-success"
                 onClick={(e) => backToHome()}
                > Back To Home Page</button> <br />
                <Container>
                  <Row>
                  {fetchData.map((data, index) => (
                      <Col md={2} lg={1} xs={3} className="text-center" key={index}>
                        <div style={{border:"1px solid #fff", marginBottom:2}}>
                            {data.randAlphabet}
                        </div>
                      </Col>

                    ))}
                  </Row>
                </Container>
                </>
            )}
            </div>
        );
    }

export default withRouter(Home);