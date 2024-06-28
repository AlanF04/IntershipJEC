import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

const middle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderStyle: 'solid',
    // padding: '10px',
    // borderColor: 'black',
     marginLeft: '130px',
     marginRight: '530px',
     //marginTop: '10px',
    // borderRadius: '10px',
    // borderWidth: '1px',
    //textAlign: 'center',
    /*font-style: oblique;*/
    //marginBottom: '10px'
    
    
}
const buttonstyle = {
    width: '100px',
    backgroundColor: 'red',
    borderRadius: '10px',
    borderStyle: 'hidden',
    marginRight: '430px',
    marginBottom: '150px',
    height: '40px'

};
function Err(){
    return (
        <div style={middle}>
            { <h1 style={{fontStyle:"oblique"}}><p style={{fontSize:'60px'}}>404 <br/> SOMETHING WENT<br/>WRONG !</p></h1> } 
            <Link to='/home'><button style={buttonstyle}>Home Page</button></Link>
        </div>
    )
}

export default Err;