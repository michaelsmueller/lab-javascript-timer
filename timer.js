/* jshint esversion: 6 */

class Chrono {
    constructor() {
        this.timer = 0;
    }
    showTime () {
        const hours = Math.floor(this.timer / 3600);
        const minutes = Math.floor( (this.timer - hours * 3600) / 60);
        const seconds = this.timer - hours * 360 - minutes * 60;
        console.log(`${hours}h, ${minutes}m, ${seconds}s`);
    }
    start () {
        try {
            const self = this;
            if (!self.intervalID) {
                self.intervalID = setInterval( function () {
                    self.timer++;
                }, 1000);
            } else {
                throw new Error("Timer is already started.");
            }
        } catch(error) {
            console.log(error);
        }
    }
    // start () {
    //     this.intervalID = setInterval( function () {
    //         this.timer++;
    //     }.bind(this), 1000);
    // }
    stop () {
        clearInterval(this.intervalID);
    }
    reset () {
        this.timer = 0;
    }
}

let myTimer = new Chrono();
myTimer.showTime();
console.log(`Chrono object is named myTimer`);
console.log(`Chrono methods are showTime(), start(), stop() and reset(). `);

