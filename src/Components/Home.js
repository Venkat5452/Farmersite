import React from 'react' 
import {IoCall,IoMailOpen} from 'react-icons/io5'
import {BsFlagFill} from 'react-icons/bs'

function Home() {
    return (
        <div className='text-center'>
           <h2 style={{color:'green'}}>"Praise the ripe field, not the green corn."</h2>
           <div className=" mb-2 p-1">
          <div className="card-body">
              <h1 className="p-2" >Agriculture</h1>
              <p className="lead">Agriculture plays a chiefly role in economy as well as it is considered to be the backbone of economic system for developing countries. For decades, agriculture has been related with the production of vital food crops. The Present era of farming contains dairy, fruit, forestry, poultry beekeeping and arbitrary etc.Many raw materials, whether it's cotton, sugar, wood, or palm oil, come from agriculture. These materials are essential to major industries in ways many people aren't even aware of, such as the manufacturing of pharmaceuticals, diesel fuel, plastic, and more.</p>
          </div>
          </div>
          <div className="text-center  m-1">
        <p style={{fontSize:'xx-large'}} id="p1" className='text-danger'>IN SUPPORT OF FARMERS</p>
        <p style={{color:'brown'}}><a style={{fontSize: 'larger'}} target="_blank" href="https://agmarknet.gov.in/">Click Here to go Know New Prices prices.. </a> </p>
        <p style={{color:'brown'}}><a style={{fontSize: 'larger'}} target="_blank" href="https://www.giveindia.org/blog/10-ngos-empowering-indian-farmers-to-grow-and-sustain/">NGO'S Helping Farmers... </a> </p>
      </div>
      <div  style={{fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif'}}>
        <p className="lead"><BsFlagFill/>A farmer works under the umbrella of agriculture, producing a variety of food products for human and animal consumption. There are several kinds of farmers, ranging from farmers who raise animals to farmers who grow crops.Farmers are responsible for all crops and livestock that are needed for us to survive. Without food, the world would slowly die, and farmers work hard every day to keep plenty of crops and animal products in the market to keep that from happening.A farmer has various responsibilities within their particular field. Whether it is the purchasing and planting of seeds on a cash crop farm, the purchasing of quality breeding stock on an animal husbandry farm, or the diet and care of a specific type of livestock on an animal production farm, a farmer needs to have a wide knowledge base of the agricultural industry as a whole.</p>
      </div>
      <div className="text-center p-2" style={{backgroundColor: 'darkgray'}}>
        <p className="text-danger" style={{fontWeight:'600'}}>CONTACT DETAILS</p>
        <p><IoCall/> Phone : 9299967565</p>
        <p><IoMailOpen/> Email : farmers123@gmail.com</p>
      </div>  
        </div>

    )
}

export default Home;
