const Footer = () => {
    const footerStyle = {
      width:'100%', backgroundColor:'#81B622', marginTop: '50px', color: 'white', fontSize: '17px', fontWeight: 'bold', boxShadow: '4px 4px 8px 8px rgba(0, 0, 0, 0.2)', bottom:'0'
    }
    const contentStyle={
      display: 'flex', justifyContent: 'space-between', width:'80%', margin:'auto', padding:'20px 0 20px 0'
    }

  return (
    <footer style={footerStyle}>
        <div style={contentStyle}>
          <div>
            <p>Netlab Bookstore</p> 
            <p>Universitas Indonesia</p>
            <p>Depok, Jawa Barat</p>
            <p>&#169;2022 by Netlab Bookstore</p>
          </div>
          <div>
            <p>Gutri Rahmad Zuwa</p>
            <p>Netlab Bookstore</p>
            <p>320200401009</p>
          </div>
        </div>

    </footer>
  )
}

export default Footer