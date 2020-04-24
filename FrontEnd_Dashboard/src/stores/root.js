import SpinnerStore from './spinner';
import FormInputStore from './forminputs';

class RootStore {
  constructor() {
    this.spinner = new SpinnerStore(this);
    this.fstore = new FormInputStore(this);
  }
}

export default RootStore;
