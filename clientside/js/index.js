let API="http://localhost:5000";

async function log(){
    const token=localStorage.getItem("token")
    console.log(token);

    const res= await  fetch(API+"/api/home",{
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    if(res.status==200){
        const {username,profile}= await res.json()
       
        document.getElementById("navbar").innerHTML=`
                <div class="nav-div">
                <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/OLX_green_logo.svg/147px-OLX_green_logo.svg.png" alt="logo">
                <div class="location">
                    <img class="searchicon" src="./assets/search (2).png" alt="">
                    <input type="text" placeholder="India">
                    <img class="dropdownicon" src="./assets/drop-downicon.png" alt="">
                </div>
                <div class="search-div">
                    <input type="text" placeholder="Find Cars,Mobile Phones and more...">
                    <div><img src="./assets/search (2).png" alt=""></div>
                </div>
                <div class="language-div">
                    <p>ENGLISH</p>
                    <img src="./assets/drop-downicon.png" alt="">
                </div>
               <a href="./pages/profile.html">
                    <div class="profile-div" style="">
                        <img class="profilepic" src="${profile}" alt="">
                        <img class="profile-dropdown" src="./assets/drop-downicon.png" alt="">
                    </div>
                    
               </a>
               
               <a href="./pages/sell.html">
                    <div class="selldiv">
                        <div class="sell">
                            <img src="./assets/plus.png" alt="">
                            <p>SELL</p>
                        </div>
                    </div>
                </a>
                <a href="./pages/login.html" class="login"> LogOut</a>
            </div>
        `
        
        
    }else{
        document.getElementById("navbar").innerHTML=`
                
               <div class="nav-div">
                <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/OLX_green_logo.svg/147px-OLX_green_logo.svg.png" alt="logo">
                <div class="location">
                    <img class="searchicon" src="./assets/search (2).png" alt="">
                    <input type="text" placeholder="India">
                    <img class="dropdownicon" src="./assets/drop-downicon.png" alt="">
                </div>
                <div class="search-div">
                    <input type="text" placeholder="Find Cars,Mobile Phones and more...">
                    <div><img src="./assets/search (2).png" alt=""></div>
                </div>
                <div class="language-div">
                    <p>ENGLISH</p>
                    <img src="./assets/drop-downicon.png" alt="">
                </div>
               <a href="./pages/profile.html">
                    <div class="profile-div" style="display: none">
                        <img class="profilepic" src="./assets/man_4140048.png" alt="">
                        <img class="profile-dropdown" src="./assets/drop-downicon.png" alt="">
                    </div>
                    
               </a>
               
               <a href="./pages/sell.html">
                    <div class="selldiv">
                        <div class="sell">
                            <img src="./assets/plus.png" alt="">
                            <p>SELL</p>
                        </div>
                    </div>
                </a>
                <a href="./pages/login.html" class="login"> Login</a>
            </div>
        `
        
    }
    
}

log()