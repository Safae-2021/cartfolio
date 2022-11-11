import React from 'react';
import '../styles/Profile.css'
function Profile() {


    return (
        <div className=' pt-5  ' id='profile'>
            <h1 className='d-b'>Sophie Parck</h1>
            <h6 style={{color:'#be1b4c'}}>Frontend Developper</h6>
            <h6>Website</h6>
            <div className='row ' style={{marginLeft:'15%'}}>
                <div className='btn btn-primary col-5 ' style={{borderColor:'black'}}> <i class="bi bi-envelope-fill"></i>  Email </div>
                <div className='btn  col-5  text-white'style={{marginLeft:'3%',backgroundColor:'#350035'}}><i class="bi bi-linkedin"></i>LinkedIn </div>
            </div>

        </div>
    )
}

export default Profile;