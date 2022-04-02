import { makeAutoObservable } from 'mobx'
export default class TestKey {
  key = ''
  constructor () {
    this.key = ''
    makeAutoObservable(this)
  }

  setKey (val: string) {
    this.key = val
    window.localStorage.setItem('key', val)
  }
}
