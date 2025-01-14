let API="http://localhost:5000";
let picture = [];
document.getElementById("photo").addEventListener("change",async(e)=>{
    
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
        const base64 = await convertBase64(files[i]);
        picture.push(base64);
        
    }
    
    document.getElementById("img1").src=picture[0];
    document.getElementById("img2").src=picture[1];
    document.getElementById("img3").src=picture[2];
    document.getElementById("img4").src=picture[3];
})

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    form.addEventListener("submit", async (event) => {
       
        event.preventDefault();

       
        const brand= document.getElementById("brand").value
        const name= document.getElementById("name").value
        const year= document.getElementById("year").value
        const fuel = document.getElementById("fuel").value
        const transmission = document.getElementById("transmission").value
        const km = document.getElementById("km").value
        const owner = document.getElementById("owner").value
        const description = document.getElementById("description").value
        const price = document.getElementById("price").value
        const state = document.getElementById("state").value
        const city = document.getElementById("city").value
        const neighbourhood = document.getElementById("neighbourhood").value
        const phone = document.getElementById("phone").value
        

        

        

        console.log(brand,name,year,fuel,transmission,km,owner,description,price,state,city,neighbourhood,phone);


        try {
            const res= await fetch(API+"/api/addpost",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({brand,name,year,fuel,transmission,km,owner,description,price,state,city,neighbourhood,phone,picture})
            })
            if(res.status==200){
                const {msg}=await res.json();
                alert(msg);
                
                
            }else{
                const {msg}=await res.json();
                alert(msg);
            }  
    
            
        } catch (error) {
            console.log(error);
            
        }

        
        
    });
})


function convertBase64(file){
    return new Promise((resolve, reject) =>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror=(error)=>{
            reject(fileReader.error)
        }
    })
}

