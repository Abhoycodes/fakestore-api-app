alert("Hello! I am an alert box!!");
fetch("https://fakestoreapi.com/products").then((data)=>{
 
    return data.json();
}).then((objectdata)=>{
    console.log(objectdata[0].title);
    let tabledata="";
    objectdata.map((value)=>{
       tabledata+=` <tr>
       <th >${value.title}</th>
       <td>${value.description}</td>
       <td>${value.price}</td>
       <td><img  src="${value.image}" /></td>
     </tr>`;
    
    });
    document.getElementById("tablebody").innerHTML=tabledata;
})