const axios = require('axios')


formAdd.addEventListener('click', function() { 

    var productname = document.getElementById('productname');
    var productdes = document.getElementById('productdes')

    var bodyFormData = new FormData();

    bodyFormData.append('productname', productname.value);
    bodyFormData.append('productdes', productdes.value);

    console.log(productname.value)
    console.log(productdes.value)

    axios({
        method: 'post',
        url: 'http://localhost:8000/api/product/add',
        data: bodyFormData,
        headers: {'Content-Type': 'multipart/form-data' },
        enctype: "multipart/form-data"
        })

        .then(function (response) {

            var json = JSON.stringify(eval(response.data));
            console.log(json);
  
            if (json == `{"auth":true}`) {
              console.log('SUCCESS');
  
              
              // import { prodwin } from './win.js';
              // prodwin();
  
              const myModule = require('./win');
              myModule.prodwin();
            
              
            }
          

        })
        .catch(function (error) {

            console.log(error);
        });


});