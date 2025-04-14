import { makeAutoObservable } from "mobx";

export class UiStore {
  isLodaing: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
  isBusy() {
    this.isLodaing = true;
  }
  isIdle() {
    this.isLodaing = false;
  }
}
