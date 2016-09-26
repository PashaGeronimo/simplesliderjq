$(document).ready(function(){ 

var ImgArr = ['work-1.jpg', 'work-2.jpg', 'work-3.jpg', 'work-4.jpg', 'work-5.jpg', 'work-7.jpg', 'work-6.jpg']; 

function imagess(){
 $('.im_left').css({
    'background-image':'url(img/'+ ImgArr[0]+ ')'
});
$('.im_center').css({
    'background-image':'url(img/'+ ImgArr[1]+ ')'
});
$('.im_right').css({
    'background-image':'url(img/'+ ImgArr[2]+ ')'
});
};


$('.bt_l').click(function(){
  ImgArr.unshift(ImgArr.pop());  //сдвиг влево
imagess();
})


$('.bt_r').click(function(){
  ImgArr.push(ImgArr.shift());  //сдвиг влево
imagess();
})

})