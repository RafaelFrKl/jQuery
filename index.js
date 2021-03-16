//Manipulating Styles
$("button");                                    //Selects all button elements
$("h1").addClass("big-title");                  //Selects element.manipulates style -> Adds CSS style to element
$("h1").removeClass("big-title");               //Removes CSS style from element
$("h1").addClass("big-title margin-50");        //Add multiple CSS style classes to element
$("h1").hasClass("margin-50");                  //Returns true or false boolean

//Manipulating Text
$("h1").html("<em>Hey</em>");                   //Changes html of element
$("h1").text("Bye");                            //Changes text of element

//Manipulating Attributes
$("a").attr("href","https://www.yahoo.com/");   //Get amd Set attribute of element
$("h1").attr("class");                          //Get attribute of element

//Adding and Removing Elements
$("h1").before("<button>New</button>");         //Before adds new element before selected element
//<button>New</button><h1>Hello</h1>
$("h1").after("<button>New</button>");          //After adds new element after selected element
//<h1>Hello</h1><button>New</button>
$("h1").prepend("<button>New</button>");        //Prepend adds new element ahead of selected element on same line
//<h1><button>New</button>Hello</h1>
$("h1").append("<button>New</button>");         //Append adds new element behind of selected element on same line
//<h1>Hello<button>New</button></h1>
$("button").remove();                           //Removes all instances of Seleced element

$("h1").before("<button>New</button>");

//Event Listeners
$("h1").on("click", function() {                //On click of h1, equivalent to $("h1").click(function({});
    $("h1").css("color", "purple");
});
$("button").on("click", function() {            //On click of button
    $("h1").css("color", "yellow");
});
$("h1").on("mouseover", function() {            //On mouseover of h1
    $("h1").css("color", "blue");
});

$("input").keypress(function(event){            //Log keypress input
    $("h1").text(event.key)
});