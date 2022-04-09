var time = moment();
$("#clock").text(time.format("MMM Do, YYYY"));

var currentime =moment().format("h")

Hours();

function Hours(){
    var currentime =parseInt(moment().format("H"))

    console.log(currentime)
    
    $(".time-block").each(function() {
        var Timeblocktime = parseInt($(this).attr("id"));
        console.log(Timeblocktime)
        console.log(this);
        if(Timeblocktime === currentime){
            console.log("current")
            console.log(this.Timeblocktime)
            $(this).addClass("present");
        }  
        
        if (Timeblocktime > currentime){
            console.log("timeahead")
            console.log(this.Timeblocktime)
            $(this).addClass("future");
        }
        
        if (Timeblocktime < currentime){
            console.log("timeahead")
            console.log(this.Timeblocktime)
            $(this).addClass("past");
        }
    })
 
}



$(".saveBtn").on("click", function(){
    var time = $(this).siblings(".hour").text();
    var textbox = $(this).siblings(".text").val();
    localStorage.setItem(time, textbox);
})

//display for each under hour class using each iterate the function i.e 0,1,2 going down the hours.
// 2 variables var ctime targets the time and everything else at that moment in time
//if ctextbox is not empty target that box and 

function display(){
    $(".hour").each(function(){
        var ctime = $(this).text();
        var ctextbox = localStorage.getItem(ctime)
        console.log(ctextbox)
        console.log(ctime)
        if (ctextbox !== null){
            $(this).siblings(".text").val(ctextbox)
        }
    });
    
}

display()