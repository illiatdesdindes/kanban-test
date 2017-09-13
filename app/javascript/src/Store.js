import {observable} from 'mobx'
import axios from 'axios'

class Store {
  @observable stages = [];

  constructor(stages) {

  }

  fetchStages() {
    axios.get('/stages')
      .then((response) => {
        console.log(response)
      })
  }
}

export default Store
