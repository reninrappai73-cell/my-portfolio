function sendMail(){
    var params={
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        message:document.getElementById("message").value ,

    };

    const serviceID="service_n0enf8g";
    const templateID="template_3th1q5w";
    
    emailjs
        .send(serviceID,templateID,params)
        .then(res=>{
                document.getElementById("name").value="";
                document.getElementById("email").value="";
                document.getElementById("message").value="";
                console.log(res);
                alert("your message sent successfuly")
        })
        .catch((err)=>console.log(err));
}
