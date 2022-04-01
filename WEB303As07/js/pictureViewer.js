
$(function () {
    var dialogbox = new Modal();
    var $content = $('#share-options').detach();
   $('.thumb').click(function(e){
    e.preventDefault(); 
    console.log("click", e.target.parentNode.href);
    var ahref = e.target.parentNode.href;
    var ahrefvalue = ahref.split('/')
    var photoframe =   ahrefvalue[ahrefvalue.length-1]
    $("#imageViewer").attr('src', `img/${photoframe}`);
    $(".photo-frame").append("<img style='width: '800px!important'; height: '400px!important''>").attr('src', `img/${photoframe}`);  
    $("a.photo-frame").attr('href',`img/${photoframe}`);
});

$("a.photo-frame").click(function(e){
e.preventDefault(); 
console.log("event", e.target.currentSrc);
console.log("click", e.target.currentSrc)
dialogbox.open({
        content: $content,
        width: 800,
        height: 450
    });
var ahref = e.target.currentSrc;
var ahrefvalue = ahref.split('/')
var photoframe =   ahrefvalue[ahrefvalue.length-1];   
$('.modal-content').append("<div id='share-options'></div>");
$(".modal-content").append("<img id='loader'  src='img/load.gif' style='width: 800px!important; height: 450px!important; border: 1px solid black' alt=''>")
setTimeout(function(){
$("#loader").remove();
$("#share-options").append("<img id='imageViewerModal' style='border: 1px solid black'  alt=''>");
$("#imageViewerModal").attr('src', `img/${photoframe}`);
}, 2000)     
})
});