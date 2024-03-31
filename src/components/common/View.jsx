import React from 'react'
import Card from 'react-bootstrap/Card'


//Card Component to display Users information
function View({ name,username,email,street,suite,city,zipcode,lat,lng,website,companyname,catchPhrase,bs}) {
  return <>
    <div className='mx-auto my-4 d-flex justify-content-center col-11 col-md-6 col-lg-4 mx-auto col-sm-10'>
      
      <Card style={{ width: '25rem', padding: '10px', backgroundColor:"#FFFACD"}}>

        <Card.Title className='text-center fw-bold'><i>{`Name: ${name}`}</i></Card.Title>

        <Card.Body>
          <Card.Text className='text-center'>
            <i>{`User Name : ${username}`}</i>
          </Card.Text>
          <hr />
          <Card.Text className='text-center'>
            <i>{`Email : ${email}`}</i>
          </Card.Text>
          <hr />
          <Card.Text className='text-center'>
            <i>{`Street : ${street}`}</i>
          </Card.Text>
          <hr />
          <Card.Text className='text-center'>
            <i>{`Suite : ${suite}`}</i>
          </Card.Text>
          <hr />
          <Card.Text className='text-center'>
            <i>{`City : ${city}`}</i>
          </Card.Text>
          <hr />
          <Card.Text className='text-center'>
            <i>{`Street : ${zipcode}`}</i>
          </Card.Text>
          <hr />
          <Card.Text className='text-center'>
            <i>{`Latitide : ${lat}`}</i>
          </Card.Text>
          <hr />
          <Card.Text className='text-center'>
            <i>{`Longitude : ${lng}`}</i>
          </Card.Text>
          <hr />
          <Card.Text className='text-center'>
            <i>{`Website Name : ${website}`}</i>
          </Card.Text>
          <hr />
          <Card.Text className='text-center'>
            <i>{`Company Name : ${companyname}`}</i>
          </Card.Text>
          <hr />
          <Card.Text className='text-center'>
            <i>{`CatchPhrase : ${catchPhrase}`}</i>
          </Card.Text>
          <hr />
          <Card.Text className='text-center'>
            <i>{`Bs : ${bs}`}</i>
          </Card.Text>
        </Card.Body>

      </Card>
    </div>
    </>
}

export default View