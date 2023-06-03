import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const Welcome = () => {
  
  const navigate = useNavigate();

const handleLogOut=()=>{

  navigate("/login");


}


return(
  <div>
    this is Welcome

    <Button onClick={handleLogOut}>
      logout
    </Button>
  </div>
)



  
}

export default Welcome