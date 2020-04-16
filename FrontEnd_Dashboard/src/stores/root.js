import SpinnerStore from './spinner';

class RootStore {
  constructor() {
    this.spinner = new SpinnerStore(this);
  }
}

export default RootStore;