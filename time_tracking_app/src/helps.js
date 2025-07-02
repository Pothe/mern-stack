// src/helps.js

 export const helps = {
  newTimer: (duration) => {
    return {
      duration,
      remaining: duration,
      isRunning: false,

      start() {
        this.isRunning = true;
      },

      stop() {
        this.isRunning = false;
      },

      reset() {
        this.remaining = this.duration;
        this.isRunning = false;
      },

      tick() {
        if (this.isRunning && this.remaining > 0) {
          this.remaining -= 1;
        }
      }
    };
  }
};

