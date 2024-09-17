

const url = 'htmlfile.html'
const eleH1 = document.querySelector('h1')
eleH1.addEventListener('click',fileData)


function fileData(){
    fetch(url)
    .then((response)=>{
        console.log(response)
        if(response.status == 200){
            return response.text()
        }
        else{
            console.log("Error Message!")
        }
    })
    .then((data)=>{
        eleH1.innerHTML += data
    })
}