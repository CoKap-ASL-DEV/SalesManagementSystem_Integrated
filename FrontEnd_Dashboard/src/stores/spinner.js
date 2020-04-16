import { observable, action } from 'mobx';

export default class SpinnerStore {
  @observable isShowSpinner = false;
  @observable isShowTraining = false;

  @action showSpinner = () => {
    this.isShowSpinner = true;
  }

  @action hideSpinner = () => {
    this.isShowSpinner = false;
  }

  @action showTraining = () => {
    this.isShowTraining = true;
  }

  @action hideTraining = () => {
    this.isShowTraining = false;
  }
}