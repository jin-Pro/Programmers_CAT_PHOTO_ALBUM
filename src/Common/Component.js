export default class Component {
  $target;
  $state;

  constructor($target,$state){
      this.$target = $target;
      this.$state = $state;
      this.init();
  }

  async init(){
      await this.unmount();
      this.render();
      this.setEvent();
      this.mount();
  }
  async unmount(){}
  
  setState(newState){
      this.$state = [...newState];
      this.render();
  }

  setEvent(){}

  template(){
      return ``;
  }

  mount(){}

  render(){
      this.$target.innerHTML = this.template();
  }
}