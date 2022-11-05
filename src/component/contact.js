import React from 'react'

export const Contact = () => {
  return (
    <div style={{textAlign: 'center', margin:'auto'}}>
     <aside>
            <header>
                <h2>Profil Saya</h2>
                <figure>
                    <img src={require('../assets/foto.JPG')} alt="" style={{width:'15%'}}/>
                </figure>
            </header>
            <section>
                <table border="1" style={{margin:'auto'}}>
                    <tr>
                        <th>Nama</th>
                        <td>Gutri Rahmad Zuwa</td>
                    </tr>
                    <tr>
                        <th>Tempat Lahir</th>
                        <td>Painan</td>
                    </tr>
                    <tr>
                        <th>Tanggal Lahir</th>
                        <td>02 Agustus 2002</td>
                    </tr>
                    <tr>
                        <th>Pekerjaan</th>
                        <td>Mahasiswa</td>
                    </tr>
                    <tr>
                        <th>Institusi</th>
                        <td>Universitas Pertahanan Republik Indonesia</td>
                    </tr>
                    <tr>
                        <th>Telepon</th>
                        <td>088213912648</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>gutri363696@gmail.com</td>
                    </tr>
                </table>
            </section>
        </aside>
    </div>
  )
}
export default Contact
