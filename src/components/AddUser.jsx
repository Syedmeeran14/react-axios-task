import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate } from 'react-router-dom';


function AddUser() {

  let [name,setName] = useState("")
  let [username,setUserName] = useState("")
  let [email,setEmail] = useState("")
  let [phone,setPhone] = useState("")
  let [website,setWebsite] = useState("")
  let [street,setStreet] = useState("")
  let [suite,setSuite] = useState("")
  let [city,setCity] = useState("")
  let [zip,setZip] = useState("")
  let [latitude,setLatitude] = useState("")
  let [longitude,setLongitude] = useState("")
  let [companyName,setCompanyName] = useState("")
  let [catchPhrase,setCatchPharse] = useState("")
  let [bs,setBs] = useState("")

  let navigate = useNavigate()

  const handleSubmit= async(e)=>{
    try {
      e.preventDefault()
      let response = await axios.post(API_URL,{
        name,
        username,
        email,
        address:{"street":street,"suite":suite,"city":city,"zipcode":zip,
        geo:{"lat":latitude,"lng":longitude}
        },
        phone,
        website,
        company:{"name":companyName,
        "catchPhrase":catchPhrase,
        "bs":bs
        },
        status:false
      })
      if(response.status===201)
      {
        alert('New User Created')
        navigate('/dashboard')
        console.log(' New User Added successfully : ', response.data);
      }
    } catch (error) {
        console.log(error)
    }

  }

  return <>
      {/* <div className='create-wrapper container-fluid'>
        <div className='form-wrapper'> */}
        <h3 className='text-center fw-bold fst-italic'>Add User</h3>

        <div className='d-flex justify-content-center '>
          
            <Form onSubmit={handleSubmit} style={{ width: '60rem', padding: '10px', backgroundColor:"#FFFACD"}}>

                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                  <Form.Control type='text' placeholder='UserName' onChange={(e)=>setUserName(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Street</Form.Label>
                  <Form.Control type="text" placeholder="Street" onChange={(e)=>setStreet(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Suite</Form.Label>
                  <Form.Control type="text" placeholder="Suite" onChange={(e)=>setSuite(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" onChange={(e)=>setCity(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>ZipCode</Form.Label>
                  <Form.Control type="text" placeholder="ZipCode" onChange={(e)=>setZip(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Latitude</Form.Label>
                  <Form.Control type="text" placeholder="Latitude" onChange={(e)=>setLatitude(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Longitude</Form.Label>
                  <Form.Control type="text" placeholder="Longitude" onChange={(e)=>setLongitude(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                  <Form.Control type='text' placeholder='Phone Number' onChange={(e)=>setPhone(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Website</Form.Label>
                  <Form.Control type='text' placeholder='Website' onChange={(e)=>setWebsite(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" placeholder="Company Name" onChange={(e)=>setCompanyName(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>CatchPhrase</Form.Label>
                  <Form.Control type="text" placeholder="CatchPhrase" onChange={(e)=>setCatchPharse(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>BS</Form.Label>
                  <Form.Control type="text" placeholder="BS" onChange={(e)=>setBs(e.target.value)} required/>
                </Form.Group>
                
                <Button type='submit' variant="primary m-auto">Add User</Button>
              
            </Form>

        </div>

        {/* </div>
      </div> */}

  </>
}

export default AddUser