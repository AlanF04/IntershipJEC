import { Link } from "react-router-dom";

const cont = {
    display : 'flex',
    justifyContent: 'space-between',
    /*marginLeft: '10px',*/
    backgroundColor: 'red',
    borderRadius: '10px',
    //padding: '10px',
    color: 'white',
    
}
const buttonstyle = {
    marginTop: '40px',
    height: '40px',
    width: '70px',
    marginRight: '20px',
    borderRadius: '10px',
    marginBottom: '0px'
}
function Navbar(){
    return(
        <div style = {cont}>
            <h1 style ={{fontSize: '50px'}}>Aln</h1>
            <button style={buttonstyle}>Login</button>
        </div>
    )
}

export default Navbar;