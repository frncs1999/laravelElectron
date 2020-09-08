const axios = require('axios')


formSub.addEventListener('click', function() { 

    var user = document.getElementById('user');
    var password = document.getElementById('pass')

    var bodyFormData = new FormData();

    bodyFormData.append('username', user.value);
    bodyFormData.append('password', password.value);

    console.log(user.value)
    console.log(password.value)

    axios({
        requestId: 'login',
        method: 'post',
        url: 'http://localhost:8000/api/auth/login',
        data: bodyFormData,
        // dataType: "json",
        headers: {'Content-Type': 'multipart/form-data' }
        })

        .then(function (response) {

          var json = JSON.stringify(eval(response.data));
          console.log(json);

          // if (json == `{"auth":true}`) {
          //   console.log('SUCCESS');


            const myModule = require('./win');
            myModule.prodwin();
          
            
          // }

        })
        .catch(function (error) {

            console.log(error);
        });

    

        
      
   


});