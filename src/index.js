
// const CountdownTimer=new CountdownTimer({
//         selector: '#timer-1', targetDate: new Date('Jul 17, 2019'),
// });
const refs = {
    daysBtn:document.querySelector('[data-value="days"]'),
    hoursBtn:document.querySelector('[data-value="hours"]'),
    minsBtn:document.querySelector('[data-value="mins"]'),
    secsBtn:document.querySelector(' [data-value="secs"]')
}

class CountdownTimer{
     constructor({ selector, targetDate }) {
         this.selector = selector;
         this.targetDate = targetDate;
    };
     //timer.start();
    //const date = new Date();
    //console.log(date)
 //const timer = {
    //  start() {
    //     const targetDate = Date.now();

        intervalId=setInterval (() => {
            const currentDate = Date.now();
            const deltaTime = this.targetDate - currentDate;
            const time = this.getTimeComponent(deltaTime);
            this.upDate(time);
        },1000);

    // };

    //};
   

    // function pad(value) {
    //     return String(value).padStart(2, '0');
    // }
    // function padDays(value) {
    //     return String(value).padStart(3,'0');
    // }

        //function
    pad(value) {
    return String(value).padStart(2, '0');
    }
    //function
    getTimeComponent(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours =  this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins =  this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return {days, hours, mins, secs}
    }



    //function
    upDate({ days, hours, mins, secs }) {
  // daysBtn.textContent = `${days}`;
     refs.daysBtn.innerHTML=`${days}`;
    refs.hoursBtn.innerHTML=`${hours}`;
     refs. minsBtn.innerHTML=`${mins}`;
    refs.secsBtn.innerHTML=`${secs}`;
    };

};



  
const timerNew=new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jun 17, 2021'),
});


//  new CountdownTimer({
//          selector: '#timer-1', targetDate: new Date('Jul 16, 2021'),
// });



// const date = new Date();
// console.log(date)
// const timer = {
//     start() {
//         const targetDate = Date.now();
//         setInterval(() => {
//             const currentDate = Date.now();
//             const deltaTime = targetDate - currentDate;
//             const time = getTimeComponent(deltaTime);
//             upDate(time);
//             console.log(time)
            
            
            //console.log(`${days}: ${hours}: ${mins}: ${secs}`);
//         },1000);

//     },

// };
// timer.start();

// function pad(value) {
//     return String(value).padStart(2, '0');
// }
// function padDays(value) {
//     return String(value).padStart(3,'0');
// }
// function getTimeComponent(time) {
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours =  pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins =  pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs =  pad(Math.floor((time % (1000 * 60)) / 1000));
//     return {days, hours, mins, secs}
// }



// function upDate(days, hours, mins, secs) {
//   // daysBtn.textContent = `${days}`;
//  refs.daysBtn.innerHTML=`${days}`;
// refs.hoursBtn.innerHTML=`${hours}`;
//  refs. minsBtn.innerHTML=`${mins}`;
//  refs.secsBtn.innerHTML=`${secs}`;

// };





// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
