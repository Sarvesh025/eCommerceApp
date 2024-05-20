import React from 'react'
import Info from '../components/Info'
import Category from '../components/Category'
import Mydesigns from '../components/Mydesigns'
import Colorpreferences from '../components/Colorpreferences'
import Heading from '../components/Heading'

const details = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'fit-content'
}

const summary = {
  height: '15vh',
  display: 'flex',
  alignItems: 'center',
  fontSize: 'x-large',
  boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
}

const heading = {
  display: 'flex',
  alignItems: 'center',
  height: '-webkit-fill-available'
}

const edit = {
  minHeight:'50vh',
  background:'#595959'
}

export default function Account() {
  return (
    <div style={details}>
            <Heading navName="Manage your account"/>
      <details>
        <summary style={summary}>
          <div style={heading}>
           <i className="ri-information-line" style={{padding:'0 25px'}}/>
           <h3>Personal Information</h3> 
          </div>
           </summary>
           <div style={edit}>
        <Info/>
           </div>
      </details>

      <details>
        <summary style={summary}> 
        <div style={heading}>
        <i className="ri-box-3-line" style={{padding:'0 25px'}}/>
           <h3>Categories</h3> 
          </div>        
         </summary>
         <div style={edit}>
        <Category/>
         </div>
      </details>

      <details>
        <summary style={summary}> 
        <div style={heading}>
        <i className="ri-quill-pen-line" style={{padding:'0 25px'}}/>
           <h3>My Designs</h3> 
          </div>    
         </summary>
         <div style={edit}>
        <Mydesigns/>
         </div>
      </details>

      <details>
        <summary style={summary}> 
        <div style={heading}>
        <i className="ri-palette-line" style={{padding:'0 25px'}}/>
           <h3>Color Preferences</h3> 
          </div>    
         </summary>
         <div style={edit}>
        <Colorpreferences/>
         </div>
      </details>
    </div>
  )
}