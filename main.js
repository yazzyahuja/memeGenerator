var memes = ["And I oop-", "Go crazy, go stupid!!", 'Periodt!', "Catch me outside how bout dat", "On Wednesdays we wear pink", "You can't sit with us", "Ohh shoot, it's a RAT", "If you can't go to Bella Noce then where can you go?"];
var button = $("button");
var memehere = $(".memehere");

button.on("click", randomizer);

function randomizer(){
  var random = Math.floor(Math.random()*(memes.length-1));
  var newmemes = memes[random];
  memehere.text(newmemes);
}

// $(".btn").click(function(){
//   $("#picture").attr("src", "https://media.tenor.com/images/01c4b20cc31e4b1a8953eaf55bf24245/tenor.gif");
// });

// $(".btn2").click(function(){
//   $("#picture").attr("src", "https://media.tenor.com/images/80c8fdab687aefe78dd95443d708e00b/tenor.gif");
// });
//
// $(".btn3").click(function(){
//   $("#picture").attr("src", "https://media.giphy.com/media/26gIOEsGb5mcTiQEw/giphy.gif");
// });
