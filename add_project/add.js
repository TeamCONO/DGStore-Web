const server = "http://192.168.0.21:5877";
const dd = document.querySelector("#dd");
let input = document.createElement('input');
input.type = "file";
input.accept = "image/*";
input.id="targetImg"

dd.appendChild(input);

input.click();
input.onchange = function(event){
    processFile(event.target.files[0]);
}



function processFile(file){
    let reader = new FileReader();
    reader.onload = function(){
        let result = reader.result;
        Output.innerText = result
        document.getElementById('targetImg').setAttribute('src',result);
        
    };
    reader.readAsDataURL(file);
    return reader;
}

function finish(){
    const title = document.querySelector("#proj_name").value;
    const GitHub = document.querySelector("#proj_git").value;
    const de = document.querySelector("#proj_info").value;
    const team = document.querySelector("#proj_team").value;
    const window = document.querySelector("#platform");
    const thumb = input.src;

    console.log(thumb);

    axios.post(`${server}/items/`,{
        description : de,
        developer : team,
        github : GitHub,
        title : title,
        platformType:window
    })
    .then(e=>console.log(e))
    .catch(e=>console.log(e))
}


// function toDataURL(url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.onload = function() {
//       var reader = new FileReader();
//       reader.onloadend = function() {
//         callback(reader.result);
//       }
//       reader.readAsDataURL(xhr.response);
//     };
//     xhr.open('GET', url);
//     xhr.responseType = 'blob';
//     xhr.send();
//   }
  
  
  

// const img = document.querySelector('#testImg');

// img.addEventListener('load', function (event) {
//    getDataUrl(event.currentTarget);
//    //console.log(dataUrl);
// });