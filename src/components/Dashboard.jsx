import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import { API_URL } from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Dashboard({users,setUsers,getUsers,setEdit}) {

  const navigate = useNavigate()

  const changeLocalState = (user)=>{
    let index = 0
    for(let i=0;i<users.length;i++)
    {
        if(users[i].id === user.id)
        {
          index=i;
          break;
        }
    }
    let newArray = [...users]
    newArray.splice(index,1,user)
    setUsers(newArray)
  }

  const deleteLocalState = (user)=>{
    let index = 0
    for(let i=0;i<users.length;i++)
    {
      if(users[i].id === user.id)
      {
        index=i;
        break;
      }
    }
    let newArray = [...users]
    newArray.splice(index,1)
    setUsers(newArray)
  }

  const handleToggle = async(user)=>{
    try {
      user.status = !user.status
      changeLocalState(user)
      let res = await axios.put(`${API_URL}/${user.id}`,user)
        if(res.status===200)
        {
          getUsers()
          alert('User Status Changed Succesfully')
          console.log('User Status Changed Successfully',res.data)
        }
        } catch (error) {
          console.log(error)
    }
  }

  const handleDelete = async(user)=>{
    try {
      deleteLocalState(user)
    let res = await axios.delete(`${API_URL}/${user.id}`)
    if(res.status===200)
    {
      getUsers()
      alert('User Deleted Succesfully')
      console.log('User Deleted Successfully',res.data)
    }
    } catch (error) {
      console.log(error)
    }
  }
  
  const handleEdit = async(user) => {
    try {
      setEdit(user)
      navigate(`/edit-user/${user.id}`);
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(()=>{
    getUsers()
  },[])
  
  return <div className='container-fluid'>
      <Table striped bordered hover>
      <thead>
        <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((e)=>{
            return <tr key={e.id}>
                <td>{e.id}</td>
                <td>
                <label className="switch">
                  <input type="checkbox" defaultChecked={e.status} onClick={()=>handleToggle(e)}/>
                  <span className="slider round"></span>
                </label>
                </td>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>
                  {e.address.street}, {e.address.suite},<br/>{e.address.city},<br/>{e.address.zipcode},<br/>{e.address.geo.lat}, {e.address.geo.lng}
                </td>
                <td>{e.phone}</td>
                <td>{e.website}</td>
                <td>
                {e.company.name},<br/>{e.company.catchPhrase},<br/>{e.company.bs}
                </td>
                <td>
                  <i className="fa-solid fa-trash 5px cursor-pointer" style={{fontSize:'20px', marginTop:'15px', marginRight:'3px', marginLeft:'6px'}} onClick={()=>handleDelete(e)}></i>
                  &nbsp;
                  <i className="fa-solid fa-pen" style={{fontSize:'20px'}} onClick={()=>handleEdit(e)}></i>  
                </td>
            </tr> 
          })
        }
      </tbody>
    </Table>
  </div>
}

export default Dashboard