/** add tweets friends **/
window.addEventListener("load", addTweetsFriends);

var friendsTwitter = [{imagen:"e",nameFriend:"E! Latin America",usuario:"@EonlineLatino",time:" 5 min",tweetFriend:"Madonna se preparó para una gran batalla ",tweetBlue:"#AlfombraRojaE! #METgala instagram.com/p/BTkraPNjP5V/",},
                      {imagen:"stalker",nameFriend:"Stalker",usuario:"@SoyStalkeador",time:" 27 jun. 2016",tweetFriend:"Situación Sentimental: Con hambre.",tweetBlue:""},
                      {imagen:"frases-de-canciones",nameFriend:"Frases de Canciones",usuario:"@PhrasesMusicES", time:" 8 min",tweetFriend:"Serás feliz me dijo la vida, pero primero te enseñaré a ser fuerte.",tweetBlue:""},
                      {imagen:"poemas-escritos",nameFriend:"Poemas Escritos.",usuario:"@PoemasEscritos",time:"26 abr.",tweetFriend:"Usted es el único...",tweetBlue:""},
                      {imagen:"frases-de-canciones",nameFriend:"Frases de Canciones",usuario:"@PhrasesMusicES", time:" 9 min",tweetFriend:'"No dejes para hoy, lo que puedes hacer mañana"- El Vago.',tweetBlue:""}
                      ];

function addTweetsFriends(){
  for (var i = 0; i < friendsTwitter.length; i++) {
  var postContainer = document.getElementById("posts-container");

  var divPost = document.createElement("div");
  var image = document.createElement("img");
  var content = document.createElement("div");
  var spanFriend = document.createElement("span");
  var spanUsuario = document.createElement("span");
  var spanTime = document.createElement("span");
  var spanDown = document.createElement("span");
  var divTweet = document.createElement("div");
  var spanBlue = document.createElement("span");
  var spanReply = document.createElement("span");
  var spanRetweet = document.createElement("span");
  var spanHeart = document.createElement("span");

  divPost.setAttribute("class","post small left");
  image.setAttribute("class","radius left");
  image.setAttribute("src","assets/img/"+ friendsTwitter[i].imagen + ".jpg");
  image.setAttribute("alt",friendsTwitter[i].nameFriend + " profile picture");
  content.setAttribute("class","content");
  spanFriend.setAttribute("class","name-friend");
  spanFriend.innerHTML = friendsTwitter[i].nameFriend + " ";
  spanUsuario.innerHTML = friendsTwitter[i].usuario;
  spanTime.innerHTML = " &#8231; "+ friendsTwitter[i].time;
  spanDown.setAttribute("class","icon-down right");
  divTweet.setAttribute("class","tweet-friend");
  divTweet.innerHTML = friendsTwitter[i].tweetFriend;
  spanBlue.setAttribute("class","blue");
  spanBlue.innerHTML = friendsTwitter[i].tweetBlue;
  spanReply.setAttribute("class","big icon-reply");
  spanRetweet.setAttribute("class","big icon-retweet");
  spanHeart.setAttribute("class","big icon-heart");

  postContainer.appendChild(divPost);
  divPost.appendChild(image);
  divPost.appendChild(content);
  content.appendChild(spanFriend);
  content.appendChild(spanUsuario);
  content.appendChild(spanTime);
  content.appendChild(spanDown);
  content.appendChild(divTweet);
  divTweet.appendChild(spanBlue);
  content.appendChild(spanReply);
  content.appendChild(spanRetweet);
  content.appendChild(spanHeart);

  }
}
