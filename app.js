let img = document.getElementById('image');

function generate(){
    
    fetch('https://dog.ceo/api/breeds/image/random').then(response =>{
        return response.json();
    }).then(data =>{
        img.setAttribute('src', data.message);
        
    })
}
