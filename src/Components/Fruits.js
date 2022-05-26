import React from 'react'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Modal,Button} from 'react-bootstrap';

function Fruits() {
   /* function f1() {
        console.log("model");
        (
    <div className='modal-fade' data-bs-backdrop="static" style={{backgroundcolor:'white'}}>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{backgroundcolor:'lightskyblue'}}>
                <div className="modal-header">
                    <h1>Crop Details</h1>
                    <button className="btn-close btn-danger" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-sm-4 d-flex align-items-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYX8JNYtyiTNRpNeLqJGpWfaraNK5zjFsUcQ&usqp=CAU"  className="h-75 w-100" />
                        </div>
                        <div className="col-sm-8">
                            <h3 className="text-danger">COTTON</h3>
                            <ul className="list-unstyled" style={{fontSize: 'larger'}}>
                       <li>SOIL : Alluvial and clayey </li>
                      <li style={{color:'brown'}}>PH in Soil : 5.8 to 8.0</li>
                      <li style={{color:'Red'}}>Water Availability : Large</li>
                      <li>Season Sown : April - May</li>
                       <li style={{color:'brown'}}>Common Disease : Anthracnose</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    }*/
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
    return (
        <>
        <div className='fluid-container p-3'>
           <h3 className="text-lg-center larger text-danger" style={{fontSize:'27px'}}>Most Common Fruits</h3>
           <div className="card-group flex-md-wrap p-2 gap-2" >
        <div className="card rounded p-2" style={{maxWidth: '450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrq8qsj0_oyxFXDAGNvQyB8zZBlzErkUFJgg&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Water Melon</h3></div>
                <button onClick={handleShow} className="btn d-block mx-auto" style={{backgroundColor: 'springgreen'}} >Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth: '450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH1Sva7NHEa4rWSAZxVkzMdie44KKRReCbhw&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Mango</h3></div>
                <button className="btn  d-block mx-auto" onClick={handleShow} style={{backgroundColor: 'springgreen'}} data-bs-target="#m2" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth: '450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtEqxrEn_DEA-XtFY9jTGKjib1fSaAvRfvA&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Grape</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor: 'springgreen'}} data-bs-target="#m3" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth: '450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgRqOwJ7DL1rI3Me3zCGCwxvAtSzO-f8rRA&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Maskmelon</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor: 'springgreen'}} data-bs-target="#m4" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
    </div>
    <div className="card-group flex-md-wrap gap-2 p-2">
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbYBS5JCXV5glhqO1RQXsc6oryzfU3Q77Jg&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Guava</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m5" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEMTgJ3vh_jg-CbpNa9ATy5qdCEd1mNNMfRw&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Pomogranite</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m6" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9SeD_wq3o9HXPZ7V-_XyAlrHyyOorpHrsw&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Tomato</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m7" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpcvfD3xCZMjZO075IQASZE3qVU_D6hPVmaQ&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Lemon</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m8" data-bs-toggle="modal">Click Here</button>
            </div>     
        </div>
    </div>
    <div className="card-group flex-md-wrap gap-2 p-2">
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBa1tEFiBBfOby6MnDmDFXfCCQVnxg9-da_A&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body"style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Papaya</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m9" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZnFoCEFdB7J2D5z4_bcnaF_m4_bX8d7mlw&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body"style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Banana</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m10" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7IE-H1XtzaXP7nU-vUor2J50ds-c0r5-iHg&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body"style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Coconut</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m11" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqRcfkF8W2rkllBOn8zrSuJ-wX4TVFx1sNmQ&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body"style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Sapota</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m12" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>   
    </div>
    </div>
    
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Crop Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
                        <div className="col-sm-4 d-flex align-items-center">
                            <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYX8JNYtyiTNRpNeLqJGpWfaraNK5zjFsUcQ&usqp=CAU' className='h-75 w-100' alt=' '/>
                        </div>
                        <div className="col-sm-8">
                            <h3 className="text-danger">COTTON</h3>
                            <ul className="list-unstyled" style={{fontSize: 'larger'}}>
                       <li>SOIL : Alluvial and clayey </li>
                      <li style={{color:'brown'}}>PH in Soil : 5.8 to 8.0</li>
                      <li style={{color:'Red'}}>Water Availability : Large</li>
                      <li>Season Sown : April - May</li>
                       <li style={{color:'brown'}}>Common Disease : Anthracnose</li>
                            </ul>
                        </div>
                    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>

    </> 
    )
}

export default Fruits;