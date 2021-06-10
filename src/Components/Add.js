import React from 'react'

export default class Add extends React.Component{
    render(){
        return(<div style={{backgroundColor:"gray",paddingTop:"30px",paddingBottom:"30px"}}><br/><div style={{backgroundColor:"white"}}>
<div>
  <li style={{listStyle:"none",display:"flex"}}>  
<h1 style={{Color:'black',textAlign:"left"}}>ADD link 4 device</h1>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<button style={{backgroundColor:"blue"}}>cancel</button>
&nbsp;&nbsp;<button style={{backgroundColor:"blue"}}>save</button>
&nbsp;&nbsp;<button style={{backgroundColor:"blue"}}>save and next</button>&nbsp;&nbsp;</li>
</div>
<br/>
<p style={{textAlign:"left"}}>step 1 of 3-configire link 4 database parameters</p>
</div>

<div className="container p-5" style={{backgroundColor:"white",margin:"30px"}}>
<div className="input-group">
<label for="organ">Organization id</label>&nbsp;&nbsp;&nbsp;&nbsp;
<ol class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    TFPL
  </ol></div>
  
  <div className="input-group">
  <label for="username">My sql username</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  <input className="m-3" type="text" id="username" placeholder="input"/></div><br/>
  <div className="input-group">
  <label for="password">password</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
  <input  className="m-3"type="text"  id="password" placeholder="input"/></div><br/>
  
  <div className="input-group">
  
  <label for="host">Host name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <input className="m-3"type="text"  id="host"placeholder="input"/></div><br/>
  <div className="input-group">
  <label for="api-key">api-key</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <input  className="m-3"type="text"  id="api-key" placeholder="input"/><br/>&nbsp;&nbsp;&nbsp;&nbsp;
  </div>
  
  <div className="input-group">
  <label for ="button">data full frequency</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <ol class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    5 MINUTES
  </ol>
  </div>

 </div> 

</div>


        )
    }
}