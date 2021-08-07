function validateForm() {
    var customer_name =  document.getElementById('name').value;
    if (customer_name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    var customer_email =  document.getElementById('email').value;
    if (customer_email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(customer_email)){
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";


    
        Email.send({
            // Host : "smtp.gmail.com",
            // Username :"srikant.shubham@science.christuniversity.in" ,
            // Password : 82128414,
            SecureToken:"8547ce9a-1266-4ae3-b6d3-59940bbd09ac",
           
            To : "srikantshubham.personal@gmail.com",
            From : customer_email,
            Subject : subject,
            Body : ` <h1>Name of the customer :${customer_name} </h1> <br/> <h2>Email: ${customer_email} </h2> <br/><p> Message: ${message} </p>.`
        }).then(
        message =>{
            if(message =='OK'){
            alert("Message delivered successfully")
        }
        else{
            alert("Couldn't deliver mail.")
        }
        }
        );
    
 
  

  }




