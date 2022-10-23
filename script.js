$(document).ready(function() {

        $("#share-img").click(function(){
            if($( window ).width() < 850){
                $("footer").toggleClass("footer-active-state");
                $(".share-comp").toggleClass("share-comp-active-state");
                $("figure").toggleClass("figure-active-state");
                $("#share-img").toggleClass("share-img-active-state");
                $("#share-img").toggleClass("share-img-unactive-state");
            }
            else
                {
                    $(".share-comp").toggleClass("share-comp-active-state-desktop");
                    $("#share-img").toggleClass("share-img-active-state");
                    $("#share-img").toggleClass("share-img-unactive-state");
                }
            
        });

    
});