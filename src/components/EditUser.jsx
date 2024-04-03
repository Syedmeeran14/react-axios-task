import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import { API_URL } from '../App';

function EditUser({users,setUsers,getUsers,edit}) {

  let [user,setUser] = useState([])

  let [name, setName] = useState("")
  let [username, setUserName] = useState("")
  let [email, setEmail] = useState("")
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
  
  let {id} = useParams();
  let navigate = useNavigate();
  
  const fetchDetails = async()=> {
    try {
      let found = false
      for(let i=0;i<users.length;i++){

        if(users[i].id == id){
            found = true

            //Fetching data from API

            // const res = await axios.get(`${API_URL}/${id}`);
            // const data = res.data;
            // setUser(data)
            // setName(data.name)
            // setUserName(data.username)
            // setEmail(data.email)
            // setStreet(data.address.street)
            // setSuite(data.address.suite)
            // setCity(data.address.city)
            // setZip(data.address.zipcode)
            // setLatitude(data.address.geo.lat)
            // setLongitude(data.address.geo.lng)
            // setPhone(data.phone)
            // setWebsite(data.website)
            // setCompanyName(data.company.name)
            // setCatchPharse(data.company.catchPhrase)
            // setBs(data.company.bs)


            //Fetching data from Local State
            setUser(edit)
            setName(edit.name)
            setUserName(edit.username)
            setEmail(edit.email)
            setStreet(edit.address.street)
            setSuite(edit.address.suite)
            setCity(edit.address.city)
            setZip(edit.address.zipcode)
            setLatitude(edit.address.geo.lat)
            setLongitude(edit.address.geo.lng)
            setPhone(edit.phone)
            setWebsite(edit.website)
            setCompanyName(edit.company.name)
            setCatchPharse(edit.company.catchPhrase)
            setBs(edit.company.bs)
        }
      }
        if(!found){
          alert('Enter a valid User id')
          navigate('/dashboard');
        }
    } catch (error) {
      console.error(error);
    }
  }
  
  const EditLocalState = (e)=>{
    let index = 0
    for(let i=0;i<users.length;i++)
    {
      if(users[i].id === e.id)
      {
        index=i;
        break;
      }
    }
    let newArray = [...users]
    newArray.splice(index,1,e)
    setUsers(newArray)
  }

  useEffect(() => { 
    fetchDetails();
    getUsers();
  },[])


  const updateUser = async(e) => {
    try {
      e.preventDefault()
      user.name = name 
      user.username = username
      user.email = email
      user.address.street = street
      user.address.suite = suite
      user.address.city = city
      user.address.zipcode = zip
      user.address.geo.lat = latitude
      user.address.geo.lng = longitude
      user.phone = phone
      user.website = website
      user.company.name = companyName
      user.company.catchPhrase = catchPhrase
      user.company.bs = bs
      
      EditLocalState(user);

      const response = await axios.put(`${API_URL}/${id}`,user);

      alert('User Updated Succesfully')
      navigate(`/dashboard`);
      console.log('User updated successfully : ', response.data);
    
    } catch (error) {
      console.error(error);
    }
  }

  return <>
 
  <h3 className='text-center fw-bold fst-italic'>Edit User</h3>
    <div className='d-flex justify-content-center '>
  
        <Form onSubmit={updateUser} style={{ width: '60rem', padding: '10px', backgroundColor:"#FFFACD"}}>

              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
                <Form.Control type='text' placeholder='UserName' value={username} onChange={(e)=>setUserName(e.target.value)} required/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Street</Form.Label>
                <Form.Control type="text" placeholder="Street" value={street} onChange={(e)=>setStreet(e.target.value)} required/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Suite</Form.Label>
                <Form.Control type="text" placeholder="Suite" value={suite} onChange={(e)=>setSuite(e.target.value)} required/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)} required/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>ZipCode</Form.Label>
                <Form.Control type="text" placeholder="ZipCode" value={zip} onChange={(e)=>setZip(e.target.value)} required/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Latitude</Form.Label>
                <Form.Control type="text" placeholder="Latitude" value={latitude} onChange={(e)=>setLatitude(e.target.value)} required/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Longitude</Form.Label>
                <Form.Control type="text" placeholder="Longitude" value={longitude} onChange={(e)=>setLongitude(e.target.value)} required/>
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
                <Form.Control type='text' placeholder='Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Website</Form.Label>
                <Form.Control type='text' placeholder='Website' value={website} onChange={(e)=>setWebsite(e.target.value)} required/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" placeholder="Company Name" value={companyName} onChange={(e)=>setCompanyName(e.target.value)} required/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>CatchPhrase</Form.Label>
                <Form.Control type="text" placeholder="CatchPhrase" value={catchPhrase} onChange={(e)=>setCatchPharse(e.target.value)} required/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>BS</Form.Label>
                <Form.Control type="text" placeholder="BS" value={bs} onChange={(e)=>setBs(e.target.value)} required/>
              </Form.Group>
              
              <Button type='submit' variant="primary m-auto">Update</Button>

        </Form>
    </div>

</>
}

export default EditUser