import { observable, action } from 'mobx'

class UserStore {
  @observable
  username = ''

  @action
  signIn = () => {
    this.username = 'lianglihao'
  }

  // @action
  // getBosUsersList = async params => {
  //   const result = await getBosUsersList(params);
  //   if(!result) return;
  //   this.onlineCount = result.data.online_count;
  //   this.bosUsersList = result.data.items;
  // }
}

export default new UserStore()
