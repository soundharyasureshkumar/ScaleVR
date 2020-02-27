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
  function upload() {
    //get your select image
    var image=document.getElementById("image").files[0];
    //now get your image name
    var imageName=image.name;
    //firebase  storage reference
    //it is the path where yyour image will store
    var storageRef=firebase.storage().ref('images/'+imageName);
    //upload image to selected storage reference

    var uploadTask=storageRef.put(image);

    uploadTask.on('state_changed',function (snapshot) {
        //observe state change events such as progress , pause ,resume
        //get task progress by including the number of bytes uploaded and total
        //number of bytes
        var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log("upload is " + progress +"% completed");
        if(progress==100)
        {
          alert("Upload Complete");
        }
    },function (error) {
        //handle error here
        console.log(error.message);
    },function () {
       //handle successful uploads on complete

        uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
            //get your upload image url here...
            console.log(downloadURL);
        });
    });
}
