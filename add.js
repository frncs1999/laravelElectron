const axios = require('axios')

const {getCurrentWindow} = require('electron').remote;
formAdd.addEventListener('click', function() { 
    var productname = document.getElementById('productname');
    var productdes = document.getElementById('productdes')

    var bodyFormData = new FormData();

    bodyFormData.append('productname', productname.value);
    bodyFormData.append('productdes', productdes.value);

    axios({
        method: 'post',
        url: 'http://localhost:8000/api/product/add',
        data: bodyFormData,
        headers: {'Content-Type': 'multipart/form-data' },
        enctype: "multipart/form-data"
        })

        .then(function (response) {             
            console.log(response.data.message)
            getCurrentWindow().reload()
  
        })
        .catch(function (error) {

            console.log(error);
        });

        

});


$( document ).ready(function() {
    $("#formUpd").hide();

    axios.get('http://localhost:8000/api/product/index')
    .then((response) => {

      var prod = response.data;

        for (var i = 0; i < response.data.length ; i++){
     
            $(".subHolder").append('<div class = "products"><h3>'+prod[i].productname+'</h3><p>'+prod[i].productdes+'</p><a id= "editP" name="'+prod[i].id+'" class="btn btn-primary" onclick = "edit(this.name)">Edit</a><a id = "deleteP" name="'+prod[i].id+'" class="btn btn-danger" onclick = "del(this.name)">Delete</a><hr></div>');
        }
    });

});

function edit(name){
    console.log(name)
    $("#formUpd").show();
    $("#formAdd").hide();

    var productname = document.getElementById('productname');
    var productdes = document.getElementById('productdes')

    axios.get('http://localhost:8000/api/product/show/'+name+'')
    .then((response) => {
        console.log(response)

        productname.value = response.data.productname;
        productdes.value = response.data.productdes;
        var id = response.data.id;
        formUpd.addEventListener('click', function() { 
        
            axios.post('http://localhost:8000/api/product/upd/'+id+'', {
                    productname: productname.value,
                    productdes: productdes.value
                })
                .then(response => {
                    console.log(response);
                    getCurrentWindow().reload()
                })
                .catch(error => {
                    console.log(err);
                });
                
        });
        

    });
}

function del(name){

        var id = name

        var bodyFormData = new FormData();
        bodyFormData.append('id', id);
        console.log(id)
   
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/product/del/'+id+'',
            data: bodyFormData,
            // dataType: "json",
            headers: {'Content-Type': 'multipart/form-data' }
            })
    
            .then(function (response) {
              
                console.log(response.data.message)
                getCurrentWindow().reload()
          
            })
            .catch(function (error) {
    
                console.log(error);
            }); 
}