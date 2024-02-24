
const time = document.querySelectorAll('.time');

function calculateTimeLeft(){


    let futureDate = new Date(2024, 3, 24);

    futureDate = futureDate.getTime();

    const todayDate = new Date().getTime();
    const t = futureDate - todayDate;

    const month = Math.floor(t/(30*24*60*60*1000));
    const day = Math.floor(t % (30*24*60*60*1000) / (24*60*60*1000));
    const hour = Math.floor((t % (24*60*60*1000)) / (60*60*1000));
    const minutes = Math.floor ((t % (60*60*1000) / (60*1000)));
    const seconds = Math.floor ((t%(60*1000) / 1000));


    const values = [month, day, hour, minutes, seconds];

    time.forEach(function(item, index){
        let digit = item.innerHTML = values[index];
        
        if(digit < 10){
            item.innerHTML = `0 ${values[index]}`
        }
    })

    startCountdown();

}

function startCountdown(){
    setInterval(calculateTimeLeft, 1000)
}


calculateTimeLeft()
document.addEventListener("DOMContentLoaded", animationEffect)


function animationEffect(){
    
    const times = document.querySelectorAll('.count-div');
    
    


    times.forEach((time, index) => {


        time.style.scale = '1'
        time.style.opacity = '1'
        setTimeout(() => {
            time.style.transform = 'translateY(0)';
        }, index * 100);
    });

};

const stayText = document.querySelector('#stays');

function dropElement(){
setTimeout(stayText.style.transform = 'translateY(0)', 1000);
}

window.onload = dropElement

