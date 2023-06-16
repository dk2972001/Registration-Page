function login() {
    var userRef = "author1@gmail.com";
    var passRef = "author";
    var userRef1 = "author2@gmail.com";
    var passRef1 = "author";
    var userRef2 = "author3@gmail.com";
    var passRef2 = "author";
    var userRef3 = "author4@gmail.com";
    var passRef3 = "author";
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var user =  document.getElementById("Username").value;
    var pass = document.getElementById("Password").value;
  if(! filter.test(user))
    {
    alert("Enter valid Email Id")
    }
    else if ((user == userRef& pass == passRef)||(user == userRef1 & pass == passRef1)||(user == userRef2 & pass == passRef2)||(user == userRef3 & pass == passRef3)) 
    {
      window.location.href="index.html";
      alert("Login Sucessful")
      $(document).on("click", "#Check", function(login){
        var date = new Date($('#date').val());
        day = date.getDate() + 1;
        month = date.getMonth() + 1;
        year = date.getFullYear();
        alert( "$('select#Add-Schedule').val() + $('select#Add-Room').val() + $('select#Add-Cart').val() + [year, month, day].join('/')"); 
    })
      //const date = new Date();

      //let day = date.getDate();
      //let month = date.getMonth() + 1;
      //let year = date.getFullYear();
      //let currentDate = `${day}-${month}-${year}`;
      //alert(console.log(Date));
    }
    else if(pass.length<6||pass.length>6)
    {
    alert("Password must contain 6 characters")
    }
    else
    {
    alert("Invalid Username or Password")
    }
  }
  function register()
  {
    if(! filter.test(user))
    {
    alert("Enter valid Email Id")
    }
    else if(pass.length<6||pass.length>6)
    {
    alert("Password must contain 6 characters")
    }
    else
    {
        window.location.href="index.html";
        alert("Registered succesfully")
    }
    
  }

const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };
  