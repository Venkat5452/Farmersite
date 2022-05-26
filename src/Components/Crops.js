import React from "react"

function Crops() {
    return (
        <div className='fluid-container p-3'>
             <h3 className="text-lg-center larger text-danger" style={{fontSize:'27px'}}>Most Common Crops</h3>
             <div className="card-group flex-md-wrap p-2 gap-2">
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYX8JNYtyiTNRpNeLqJGpWfaraNK5zjFsUcQ&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Cotton</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m1" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zwPSK9Z29pQXwHyKlYKkVAR_3XXvSO5GxA&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Paddy</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m2" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1KpANL04J7eMEr_wtqOAe5i_8rbqXzJtug&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Mirchi</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m3" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbIVlhMKpZXzCk4q-zkf7crYsxBs0bMmijA&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Sugar Cane</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m4" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
    </div>
    <div className="card-group flex-md-wrap gap-2 p-2">
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQF58_RyBjZJ9BHZlh3nbHUWjkRrVy2ppyA&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Ground Nut</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m5" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKle3YHx4aWu-l3vxQl4dFSzHYXNkidS0Bw&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Corn</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m6" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcPzT3yd0wePIVc6Zm7Wjf14cHgm56DZbhw&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Soyabeam</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m7" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfS3HQR81l2v25uu1lmMgVD3Mp2V5eZrp_UQ&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Sesame</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m8" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
    </div>
    <div className="card-group flex-md-wrap gap-2 p-2">
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzx8lI-P_kHS4_xKDusahD97YxKIqIN04w&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Red Gram</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m9" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdNAnn3KlCubcuN1l8FNmpUQRRqtaqZg19g&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Green Gram</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m10" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5_C4SGRa6JhL6giIS8koOxcdj_g8YhExEQ&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Black Gram</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m11" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>
        <div className="card rounded p-2" style={{maxWidth:'450px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrmAG6aF99W0Z1iWPxIkWz2VQ1pScwy0TU_w&usqp=CAU" className="w-100 h-75 rounded" alt=" "/>
            <div className="card-body" style={{backgroundColor:'lightcyan'}}>                       
                <div className="card-title text-center text-danger mb-3"><h3>Potato</h3></div>
                <button className="btn  d-block mx-auto" style={{backgroundColor:'springgreen'}} data-bs-target="#m12" data-bs-toggle="modal">Click Here</button>
            </div>
        </div>   
    </div>
    </div>
    )
}
export default Crops;