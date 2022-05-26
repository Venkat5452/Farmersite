import React from 'react' 

function Diseases() {
    return (
        <div className='fluid-container p-3'>
        <h3 className="text-lg-center larger text-danger" style={{fontSize:'27px'}}>Most Common Diseases</h3>
        <div className="card-group flex-md-wrap p-2 gap-2" >
     <div className="card rounded p-2" style={{maxWidth: '450px'}}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBY432S8ePsSTH9QmYsmHv0zjaV5gnlazpUw&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
         <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
             <div className="card-title text-center text-danger mb-3"><h3>Powdery Mildew</h3></div>
             <button  className="btn d-block mx-auto" style={{backgroundColor: 'springgreen'}} >Click Here</button>
         </div>
     </div>
     <div className="card rounded p-2" style={{maxWidth: '450px'}}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jnrlGdqu60lM6_R3Ap7GZpL2Vj-TNEaA0w&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
         <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
             <div className="card-title text-center text-danger mb-3"><h3>Black Spot</h3></div>
             <button className="btn  d-block mx-auto" style={{backgroundColor: 'springgreen'}} data-bs-target="#m2" data-bs-toggle="modal">Click Here</button>
         </div>
     </div>
     <div className="card rounded p-2" style={{maxWidth: '450px'}}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBHge-xJLEsTaxYzj3RelctSDfiFuae3fBrg&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
         <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
             <div className="card-title text-center text-danger mb-3"><h3>Bacterial Canker</h3></div>
             <button className="btn  d-block mx-auto" style={{backgroundColor: 'springgreen'}} data-bs-target="#m3" data-bs-toggle="modal">Click Here</button>
         </div>
     </div>
     <div className="card rounded p-2" style={{maxWidth: '450px'}}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPiREy2j2E8Iev-0o6La0E_J6Jy3RXJghxg&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
         <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
             <div className="card-title text-center text-danger mb-3"><h3>Shot Hole</h3></div>
             <button className="btn  d-block mx-auto" style={{backgroundColor: 'springgreen'}} data-bs-target="#m4" data-bs-toggle="modal">Click Here</button>
         </div>
     </div>
 </div>
 <div className="card-group flex-md-wrap gap-2 p-2">
     <div className="card rounded p-2" style={{maxWidth:'450px'}}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0QD0jd0yjvP0FVHaIlgjaTk7y5kuJ0HCCHw&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
         <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
             <div className="card-title text-center text-danger mb-3"><h3>Black Knot</h3></div>
             <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m5" data-bs-toggle="modal">Click Here</button>
         </div>
     </div>
     <div className="card rounded p-2" style={{maxWidth:'450px'}}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIS7v7AlShfpQNHD6qYg_4pdcm-bmhSm_C-A&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
         <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
             <div className="card-title text-center text-danger mb-3"><h3>Rust</h3></div>
             <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m6" data-bs-toggle="modal">Click Here</button>
         </div>
     </div>
     <div className="card rounded p-2" style={{maxWidth:'450px'}}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrX5dw7VBWTSeM0M0n3Jdwq9FEbatRYaMCUw&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
         <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
             <div className="card-title text-center text-danger mb-3"><h3>Late Blight</h3></div>
             <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m7" data-bs-toggle="modal">Click Here</button>
         </div>
     </div>
     <div className="card rounded p-2" style={{maxWidth:'450px'}}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMwzuiJJ2XBdLRSLQrEpRaqSJL3GRvDRcDIA&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
         <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
             <div className="card-title text-center text-danger mb-3"><h3>Apple Scab</h3></div>
             <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m8" data-bs-toggle="modal">Click Here</button>
         </div>     
     </div>
 </div>
 <div className="card-group flex-md-wrap gap-2 p-2">
     <div className="card rounded p-2" style={{maxWidth:'450px'}}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnai5I85sV-JuxwJgl-87aoOiZB4gAaVpOnQ&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
         <div className="card-body"style={{backgroundColor:'lightcyan'}}>                       
             <div className="card-title text-center text-danger mb-3"><h3>Grey Mold</h3></div>
             <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m9" data-bs-toggle="modal">Click Here</button>
         </div>
     </div>
     <div className="card rounded p-2" style={{maxWidth:'450px'}}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPIgiKtGANL2KEx1jmD8FZ0Ez4PptTAssNYg&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
         <div className="card-body"style={{backgroundColor:'lightcyan'}}>                       
             <div className="card-title text-center text-danger mb-3"><h3>Verticilium Wilt</h3></div>
             <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m10" data-bs-toggle="modal">Click Here</button>
         </div>
     </div>
     <div className="card rounded p-2" style={{maxWidth:'450px'}}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqzypS4Se8DPJCbwLkNWzRI0XYcttCMbBaQ&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
         <div className="card-body"style={{backgroundColor:'lightcyan'}}>                       
             <div className="card-title text-center text-danger mb-3"><h3>Peach Leaf Curl</h3></div>
             <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m11" data-bs-toggle="modal">Click Here</button>
         </div>
     </div>
     <div className="card rounded p-2" style={{maxWidth:'450px'}}>
         <img src="https://www.familyhandyman.com/wp-content/uploads/2020/05/Fusarium-Wilt-GettyImages-1221194369.jpg?resize=768,768" className="w-100 h-75 rounded" alt=" "/>
         <div className="card-body"style={{backgroundColor:'lightcyan'}}>                       
             <div className="card-title text-center text-danger mb-3"><h3>Fusarium Wilt</h3></div>
             <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m12" data-bs-toggle="modal">Click Here</button>
         </div>
     </div>   
 </div>
 </div>
 );
}

export default Diseases;