function newItem(){

    //1. Adding a new item to the list of items: 
       // creating new element
       let li = $('<li></li>'); 
       let inputValue = $("input").val();
       // let text = document.createTextNode(inputValue);
       li.append(inputValue); 
    
       if (inputValue === '') {
         alert("You must write something!");
       } else {
         $('#list').append(li);
       }
    
     //2. Crossing out an item from the list of items:
        function crossOut() {
             li.toggleClass("strike"); 
         }
         
         // double click event listener
         li.on("dblclick", function crossOut() {
            li.toggleClass("strike");
        });

    
     //3(i). Adding the delete button "X": 

         // creating new element
         let crossOutButton = $('<crossOutButton></crossOutButton>'); 

         // crossOutButton.appendChild(document.createTextNode("X"))
         crossOutButton.append('X');
         li.append(crossOutButton);
    
         // click event listener
         crossOutButton.on('click', deleteListItem);


     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
       function deleteListItem(){
             li.addClass("delete")
         }

     // 4. Reordering the items: 
       $('#list').sortable();
    }
