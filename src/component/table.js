import React from 'react'

import ReadExcell from '../service/excell'

let result=null;

export default function table() {
 
    return (
        <div>
       <input type="file" onChange={(e)=>{
           const file=e.target.files[0];
           let data= ReadExcell(file);
         data.then((d)=>{
           d.map(person=>{
              document.querySelector("#table").innerHTML+= `<tr>
              <td>${person.ISIM}</td>
              <td>${person.SOYISIM}</td>
              <td>${person.YAS}</td>
              <td>${person.ALDIGI_MAAS}</td>
              <td>${person.CINSIYETI}</td>
              </tr>`
           })
        })
   
       }}></input>
          <table>
              <thead>
                  <th>ISIM</th>
                   <th>SOYISIM</th>
                   <th>YAS</th>
                   <th>ALDIGI MAAS</th>
                   <th>CINSIYETI</th>
              </thead>
           <tbody id="table"></tbody>
          </table>
        </div>
    )
}