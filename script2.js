var firebaseConfig = {
    apiKey: "AIzaSyBbtaVdbHR2aWapCqtnv9bogdKPcvwDf4I",
    authDomain: "login-f6ccf.firebaseapp.com",
    databaseURL: "https://login-f6ccf.firebaseio.com",
    projectId: "login-f6ccf",
    storageBucket: "login-f6ccf.appspot.com",
    messagingSenderId: "694269955161",
    appId: "1:694269955161:web:ea05a6d4c2c67823b4f548"
  };
firebase.initializeApp(firebaseConfig);

var storage=firebase.storage();
var storageRef=storage.ref();
$('#list').find('tbody').html('');
var i=0;
var likes=0;
var dislikes=0;
storageRef.child('images/').listAll().then(function(result)
{
    result.items.forEach(function(imageRef){
    console.log("Image Reference"+imageRef.toString());
    i++;
    displayImage(imageRef);

  });
});
function countLikes()
{
    likes++;
}
function countDislikes()
{
    dislikes++;
}

function displayImage(images)
{
  images.getDownloadURL().then(function(url)
  {
  console.log(url);
  let new_html='';
  new_html +='<tr>';
  new_html +='<td>';
  new_html += '<img src="'+url+'" width="100px" style="float:right" onclick="disp(this)">';
  new_html +='</td>';
  new_html +='<td>';
  new_html += '<i class="fa fa-thumbs-up" onclick="countLikes()">Like</i>';
  new_html += '<br/>';
  new_html += '<i class="fa fa-thumbs-down onclick="countDislikes()"">Dislike</i>';
  new_html += '<br/>';
  new_html += likes+ " upvotes";
  new_html += '<br/>';
  new_html += likes+ " downvotes";
  new_html +='</td>';
  new_html +='</tr>';

  $('#list').find('tbody').append(new_html);
});
}

function disp(img)
{
  var scene = document.createElement('a-scene');
  var sky = document.createElement('a-sky');
  sky.setAttribute('src',img);
  sky.setAttribute('rotation', { x: 0, y: 130, y: 0 });
  scene.appendChild(sky);
  document.body.appendChild(scene);
}
