
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15);

//Create and add titleLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]
})



//Initialize empty marker 

let marker;

//Create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    //remove icon 

    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})


// add new photo field

function addPhotoField(){
    //console.log('ok')
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o input está vazio, e parar a função se esiver vazio
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    //limpar o campo da url
    input.value = ""    
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
//console.log(event)
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length < 2){
        //limpar o valor do campo 
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove()
}

//Select yes or no

function toggleSelect(event) {
    
    
    //retirar a classe .active dos dois botões
    document.querySelectorAll('.button-select button').forEach(button => button.classList.remove('active'))

    //pegar o botão selecionado
    const button = event.currentTarget

    //colocar a classe .active no selecionado
    button.classList.add('active')

    //atualizar o hidden com o valor selecionado
    const input = document.querySelector('[name="open-on-weekends"]')
    //console.log(input)
    
    //verificar qual botão é
    input.value = button.dataset.value
}



/////////////////////////////////////////////////////
/* function validate(event){
    //validar se lat e lng estão preenchidos

    //document.query pra pegar os valores de lat e lng(?)
    const needsLatAndLng = true;
    if(needsLatAndLng){
    event.preventDefault()
    alert('Selecione')}
} */