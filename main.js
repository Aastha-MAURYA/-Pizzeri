menu_list_array = ["1 Margherita Pizza.","Golden Corn Pizza" ," Jalapeno & Red Paprika Pizza",  "Double Cheese Margherita Pizza","Crisp Capsicum & Fresh Tomato Pizza","Farmhouse Pizza" ,"Spicy Triple Tango","Paneer Special Pizza"
];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>";
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<li>'+ menu_list_array[i] + '</li>'
        
        }
        htmldata=htmldata+"<ol>"
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<div class="cards">'+'<img src="download(11).jpg" style="width :100px; height:88px;"/>'+menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
    
function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
