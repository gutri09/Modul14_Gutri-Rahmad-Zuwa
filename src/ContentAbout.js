import {useState} from "react";
const ContentAbout = () => {
    const [me, setMe] = useState({
        name: "Gutri Rahmad Zuwa",
        nim: "320200401009",
        university: "Universitas Pertahanan",
        country: "Indonesia"
    });
    return (
      <body style={{
          color: 'black', textAlign: 'center'
      }}>
            <h1 style={{marginBottom:'50px'}}>About</h1>
            <p>This website is the task of the Web Development Practicum.</p>
            <p>Netlab Bookstore</p> 
            <p>Universitas Indonesia</p>
            <p>Depok, Jawa Barat</p>
            <p>&#169;2022 by Netlab Bookstore</p>
            <h3 style={{marginTop:'100px'}}>My name is {me.name}</h3>
            <p>
                I am from {me.university} with NIM {me.nim} . I love {me.country}
            </p>
      </body>
    )
  }
  
  export default ContentAbout