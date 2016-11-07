import Map from './Map';

class App {
  constructor(mapCanvas, width, height) {
    this.canvas = {
      map: mapCanvas
    };
    this.width = width;
    this.height = height;

    for (let c of Object.values(this.canvas)) {
      c.width = this.width;
      c.height = this.height;
    }
  }

  init() {
    console.info('Zorcraft.');
    let mapCtx = this.canvas.map.getContext('2d');
    this.map = new Map(mapCtx, this.width, this.height);
    this.map.init();
  }
}

export default App;
