import { makeAutoObservable } from "mobx";

export default class Counter {
  title = "Counter";
  count = 0;
  events: string[] = [`initial count is ${this.count}`];

  constructor() {
    makeAutoObservable(this);
  }

  increament = (amount = 1) => {
    this.count += amount;
    this.events.push(`incremented by ${amount} - count is now ${this.count}`);
  };

  decreament = (amount = 1) => {
    this.count -= amount;
  };

  reset = () => {
    this.count = 0;
    this.events.length = 1;
  };
  get eventCount() {
    return this.events.length - 1;
  }
}
