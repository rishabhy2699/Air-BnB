
function hotel(ctrl){
    document.body.style.backgroundImage = "url(../images/hotelbook.jpg)";
    var destinationId = "";
    destinationId = $(ctrl).closest("tr").find("td:nth-of-type(3)").text().trim();
    var xhr = new XMLHttpRequest;
    var url = "https://hotels4.p.rapidapi.com/properties/list?currency=USD&locale=en_US&sortOrder=PRICE&destinationId="+destinationId+"&pageNumber=1&checkIn=2020-01-08&checkOut=2020-01-15&pageSize=25&adults1=1";
  
    xhr.open('GET',url,true)
  
    xhr.setRequestHeader('x-rapidapi-key' , 'd2ccf3eb5cmshca4ee487778244bp134ed0jsn7e322ac693fb');
  
    xhr.onload = function() {
     
      if(this.status == 200){
  
               var data = JSON.parse(this.responseText);
                var sn = 1;
                var output = '<h1>-----HOTEL DETAILS-----</h1><div class = "main"> <table border = 1px solid blue class = "center" ><tr>';
                output +=   '<th> Sr No. </th>'+
                             '<th> Name </th>'+
                            '<th>Image</th>'+
                            '<th>Star Rating</th>'+
                           '<th> Address </th>' +
                           '<th> Price </th>' 
                            + '</tr>';
                           for(var i = 0; i<= data.data.body.searchResults.results["length"] - 16; i++)
                        //   html += data.suggestions[0].entities[0].caption;
                            {
                               output += 
                               
                             '<tr>' + 
                             '<td>' + sn++ + '</td>' +
                             '<td>' + data.data.body.searchResults.results[i].name + '</td>' +
                             '<td>' + '<img src="' + data.data.body.searchResults.results[i].thumbnailUrl + '" width = "300" height = "150">'+ '</td>' +
                              '<td>' + data.data.body.searchResults.results[i].starRating + '</td>' +
                             '<td>' + data.data.body.searchResults.results[i].address.streetAddress + '<br>' +
                                      data.data.body.searchResults.results[i].address.extendedAddress + '<br>' +
                                      data.data.body.searchResults.results[i].address.locality + '<br>' +
                                      data.data.body.searchResults.results[i].address.postalCode + '<br>' +
                                      data.data.body.searchResults.results[i].address.region + '<br>' +
                                      data.data.body.searchResults.results[i].address.countryName + '<br>' +      
                               '</td>'+
                             '<td>' + data.data.body.searchResults.results[i].ratePlan.price.current + '</td>'+ 
                             //'<td><a href="javascript:void(0);" onclick="javascript:hotel(this);">'  + data.suggestions[i].entities[j].caption + '</a></td>' +
                             '</tr>'; 
                            }
                             
                           output += '</table></div>'                  
                document.getElementById('users').innerHTML = output;
              //  console.log("Searched");
          
      }
  
    }
  
    xhr.send();
  }