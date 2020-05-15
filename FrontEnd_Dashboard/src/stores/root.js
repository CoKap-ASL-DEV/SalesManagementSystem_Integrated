import SpinnerStore from './spinner';
import FormInputStore from './forminputs';
import RewardTotalStore from './rewardtotal';

class RootStore {
  constructor() {
    this.spinner = new SpinnerStore(this);
    this.fstore = new FormInputStore(this);
    this.rewardTotal = new RewardTotalStore(this);
  }
}

export default RootStore;
