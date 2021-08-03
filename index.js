const bingoBoard = document.getElementById('bingo-board')
let personKey
async function getData() {
    let response = await fetch("content.json")
    let personalities = await response.json()
    return personalities
}

// const checkbox = document.querySelector("input[type=checkbox]");
// const drinkingIcon = "fas fa class"

// checkbox.addEventListener( 'change', function() {
//     if(this.checked) {
//         console.log('yes')
//         // Checkbox is checked..

//     } else {
//         console.log('no')
//         // Checkbox is not checked..
//     }
// });


getData().then(personalities =>{
    let contentHTML = personalities.map(personality =>{
        personkey = personality.key
        return `<div class="bingo-card">
        <div class="bingo-card-front theme-${personality.theme}">
            <div class="indicator-icon-area">
                <i class="${personality.icon}"></i>
            </div>
            <div class="mark-done">
                <button class="check-btn" >
                    <i data-key=${personality.key} class="fas fa-check" onclick=doThis(event)></i>
                </button>
            </div>
            <div class="bingo-content">
                <p>${personality.quote}</p>
            </div>
            <div class="bingo-acknowledgment">
                <span class="personal-emoji">${personality.emoji}</span>
                <p class="acknowledgment-text">${personality.name}</p>
            </div>
            <div class="bingo-card-rear" data-key=${personality.key}>
                <p class="spied">X</p>
                <p class="speaker">${personality.name}</p>
            </div>
        </div>
        </div>`
    }).join('')
    bingoBoard.innerHTML+=contentHTML 
    return bingoBoard
})


function doThis(event){
    let myTarget = event.target
    let cardRearArr=document.querySelectorAll('.bingo-card-rear')
        cardRearArr.forEach((value)=>{
            if (value.dataset.key === myTarget.dataset.key){
                value.classList.add('marked-done')
                setTimeout(()=>{value.classList.add('marked')},20
                )
            }
        }
    )
} 
