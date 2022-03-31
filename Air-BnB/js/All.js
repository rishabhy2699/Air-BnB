
document.getElementById('btn').addEventListener('click' , getdata)
function getdata(){
  document.getElementById('blur').style.display = "none"
  document.body.style.backgroundImage = "url(../images/hotelsearch.jpg)"
  var city = document.getElementById('sr').value;
  var xhr = new XMLHttpRequest;
  var url = "https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query="+city;
  

  xhr.open('GET',url,true)

  xhr.setRequestHeader('x-rapidapi-key' , '2dab7a2a62msh0ec62f0923694abp102b86jsnf503d443787e');

  xhr.onload = function() {
   
    if(this.status == 200){

             var data = JSON.parse(this.responseText);
              var sn = 1;
              var output = '<h1>-----For Hotel Detail Click on More Detail Column-----</h1><div class = "users"> <table border = 1px solid blue class = "center" ><tr>';
              output +=   '<th> Sr No. </th>'+
                          '<th> Group </th>'+
                          '<th> DestinationID </th>'+
                         '<th> Name </th>' +
                         '<th> Type </th>' +
                         '<th id = "cap1"> Caption </th>' +
                         '<th> Hotels Details </th>' + '</tr>';
                         for(var i = 0; i<= data.suggestions["length"] - 1; i++)
                         {
                      //   html += data.suggestions[0].entities[0].caption;
                        
                           for(var j = 0 ; j<= data.suggestions[i].entities["length"] - 1 ; j++)
                          {
                             output += 
                             
                           '<tr>' + 
                           '<td>' + sn++ + '</td>' +
                           '<td>' + data.suggestions[i].group + '</td>' +
                           '<td>' + data.suggestions[i].entities[j].destinationId + '</td>' +
                           '<td>' + data.suggestions[i].entities[j].name + '</td>'+
                           '<td>' + data.suggestions[i].entities[j].type + '</td>'+
                           '<td id = "cap">' +  data.suggestions[i].entities[j].caption +'</td>' +
                          '<td><a id = "an" href="javascript:void(0);" onclick="javascript:hotel(this);">More Details</a></td>' 
                           //'<td><a href="javascript:void(0);" onclick="javascript:hotel(this);">'  + data.suggestions[i].entities[j].caption + '</a></td>' +
                           '</tr>'; 
                          }
                           
                         
                         } 
                         output += '</table></div>'
                         
              document.getElementById('users').innerHTML = output;
            //  console.log("Searched");
        
    }

  }

  xhr.send();
}











