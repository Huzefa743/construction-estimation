import React, { useEffect, useState } from "react";

function Footer() {
  const [selectedFile, setSelectedFile] = useState();
 
  return (
   <>
    <div style={{height:26, backgroundColor: '#212529', bottom:'0px', paddingTop:4}} className="fixed-bottom">
           <p style={{color:'white', textAlign:'center', fontSize:'12px', fontWeight: 500, fontStyle:'normal'}}>Copyright (2021) - <span style={{color:'#b89c54'}}>Kraftman-Architect Solutions</span> - Construction Estimation v1.0 </p>
    </div>
   </>
  );
}

export default Footer;
