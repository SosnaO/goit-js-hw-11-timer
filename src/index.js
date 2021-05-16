const refs = {
    daysBtn:document.querySelector('[data-value="days"]'),
    hoursBtn:document.querySelector('[data-value="hours"]'),
    minsBtn:document.querySelector('[data-value="mins"]'),
    secsBtn:document.querySelector('[data-value="secs"]')
}
class CountdownTimer{
     constructor({ selector, targetDate }) {
         this.selector = selector;
         this.targetDate = targetDate;
    };
            intervalId=setInterval (() => {
            const currentDate = Date.now();
            const deltaTime = this.targetDate - currentDate;
            const time = this.getTimeComponent(deltaTime);
            this.upDate(time);
        },1000);

    pad(value) {
    return String(value).padStart(2, '0');
    }
      getTimeComponent(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours =  this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins =  this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return {days, hours, mins, secs}
    }
  
    upDate({ days, hours, mins, secs }) {
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

