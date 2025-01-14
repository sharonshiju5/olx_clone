const API="http://localhost:5000";

let profile;
document.getElementById("profile").addEventListener('change',async(e)=>{
    //console.log(e.target.files[0]);  
    profile= await convertBase64(e.target.files[0]);
    console.log(profile);
    
    
})


document.addEventListener("DOMContentLoaded", () => {
  
    const form = document.getElementById("form");

   
    form.addEventListener("submit", async (event) => {
       
        event.preventDefault();

       
        const username = document.getElementById("username").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const cpassword = document.getElementById("cpassword").value;

        console.log(username,phone,email,password,cpassword);
        

        try {
            const res= await fetch(API+"/api/adduser",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username,phone,email,password,cpassword,profile})
            })
            if(res.status==201){
                const {msg}=await res.json();
                alert(msg);
                window.location.href="./login.html"
            }else{
                const {msg}=await res.json();
                alert(msg);
            }
    
            
        } catch (error) {
            console.log(error);
            
        }

        
    });
});



function convertBase64(file){
    return new Promise((resolve,reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror=(error)=>{
            reject(error)
        }
    })
}

