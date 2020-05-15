import { observable, action } from 'mobx';

export default class RewardTotalStore {
  @observable techTotal = 0;
  @observable diffTotal = 0;

  @action setTechTotal = value => {
    this.techTotal = value;
  };

  @action setDiffTotal = value => {
    this.diffTotal = value;
  };
}
