import {useState} from 'react';
const contain = {
     backgroundImage : 'url("https://th.bing.com/th/id/R.47be6f01d3231bc3ff41df41ffdec8dc?rik=bHfJtmojpJnEuA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fNWJ4NjV.jpg&ehk=wAItHIK3NrDA36CLyHVc%2b9KS9g%2fFNVV4ALjvGNom%2fpw%3d&risl=&pid=ImgRaw&r=0")',
     backgroundSize : 'cover',
     width: '100vw',
     height: '100vh',
     color : 'white',
     marginTop :'0px'
}
function Hom(){
    return(
        
        <div style={contain}>
            <h1 style={{justifyContent:'center',display:'flex',alignIteam:'center'}}>WELCOME TO JYOTHI</h1>
            {/* <img src="https://i.ytimg.com/vi/Ly6js3HnuBE/maxresdefault.jpg" style={{justifyContent:'center',display:'flex',alignIteam:'center',width:'50%',marginLeft:'auto',marginRight:'auto'}}></img> */}
        </div>
    );
}
export default Hom;