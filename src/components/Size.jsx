import React, { useEffect, useState } from 'react'

export default function Size({name, getCount}) {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        getCount(count)
    }, [count])


    function handelChange(e){
        setCount(e.target.value);
    }

  return (
      <input style={{border:'2px solid', height:'50px', width:'50px', textAlign:'center'}} value={count} onChange={handelChange} type="number" min='1' max='10' placeholder={name}/>
  )
}
