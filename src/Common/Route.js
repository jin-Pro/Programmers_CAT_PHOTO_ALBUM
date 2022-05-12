class Route {
  constructor(){}

  push(url){
      history.pushState(null,null,url)
      this.render(url);
  }

  pop(){
      history.back();
      this.render();
  }

  render(location){
      const url = getUrl(location);

      switch(url){
          case "/":
              return 1;
          default:
              return 2;
      }
  }
}

export const route = new Route();

const getUrl = (location) => '/'