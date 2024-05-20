import React, { useState } from 'react'

const personalInfo = {
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'space-around',
  position:'relative',
  height:'21vh'
}

export default function Info() {

  const [editInfo, setEditInfo] = useState(true)
  const [editContact, setEditContact] = useState(true)

  const [inputs, setInputs] = useState({firstname:'', lastname:'', gender :'', email:'', number:''})

  function handelSubmit(){
      // setInputs({...inputs, [e.target.name] : e.target.value})
  }

  function handelChange(e){
    setInputs({...inputs, [e.target.name] : e.target.value})
  }

  return (
    <>
      <form action="#" onSubmit={handelSubmit} style={personalInfo}>
     <label style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'50%'}}><h2>Personal Information :</h2> 
     <input type="text" name='firstname' value={inputs.firstname} onChange={handelChange} placeholder='firstname' disabled = {editInfo}/>
     <input type="text" name='lastname' value={inputs.lastname} onChange={handelChange} placeholder='lastname' disabled = {editInfo}/>
     </label>
     <div style={{display:'flex', position:'absolute', top:'5px', right:'5px'}}>
    <button type='submit' style={editInfo ? {display:'none'} : {display:'block'}}>save</button>
    <button onClick={(e)=>{e.preventDefault(); setEditInfo(!editInfo)}}>{editInfo ? 'edit' : 'cancel'}</button>
    </div>
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'30%'}}>
     <h2>Gender :</h2>
     <label>Male
     <input type="radio" name='gender' value={inputs.gender} onChange={handelChange} disabled={editInfo}/>
     </label>

     <label>Female
     <input type="radio" name='gender' value={inputs.gender} onChange={handelChange} disabled={editInfo}/>
     </label>
    </div>
      </form>

        <form action="#" style={personalInfo}>
        <label><h2>Email Address</h2><input type="email" name='email' placeholder='Email Address' value={inputs.email} onChange={handelChange} disabled={editContact}/></label>
        <label><h2>Phone Number</h2><input type="number" name='number' placeholder='Email Address'value={inputs.number} onChange={handelChange} disabled={editContact}/></label>
        
        <div style={{display:'flex', position:'absolute', bottom:'5px', right:'5px'}}>
        <button type='submit' style={editContact ? {display:'none'} : {display:'block'}}>save</button>
        <button onClick={(e)=>{e.preventDefault(); setEditContact(!editContact)}}>{editContact ? 'edit' : 'cancel'}</button>
        </div>
        
        </form>
    </>
  )
}
