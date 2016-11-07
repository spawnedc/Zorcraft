class Map {
  constructor(context, width, height) {
    this.ctx = context;
    this.width = width;
    this.height = height;
  }

  init(mapName='default') {
    this.mapName = mapName;
    this
      .loadMap()
      .then((mapData) => {
        this.mapData = mapData;
        this.loadTileSet().then((img) => {
          this.tileSet = img;
          this.drawMap();
        });
      });
  }

  loadMap() {
    console.info('Loading map data:', this.mapName);
    const mapUrl = `./maps/${this.mapName}/map.json`;
    return fetch(mapUrl, {method: 'get'})
      .then((response) => {
        console.info('Map data loaded:', this.mapName);
        return response.json();
      });
  }

  loadTileSet() {
    const imgUrl = `./maps/${this.mapName}/${this.mapData.tileset.image}`;
    return fetch(imgUrl, {method: 'get'})
      .then((response) => {
        console.info('Tileset loaded:', imgUrl);
        return response.blob().then((blobData) => {
          return createImageBitmap(blobData);
        });
      });
  }

  drawMap() {
    this.ctx.translate(this.width / 2, this.mapData.tileSize.height);

    for (let x = this.mapData.rows-1; x >= 0; x--) {
      for (let y = this.mapData.cols-1; y >= 0; y--) {
        this.drawTile(x, y);
      }
    }
  }

  drawTile(x, y) {
    let ctx = this.ctx;
    let tileWidth = this.mapData.tileSize.width;
    let tileHeight = this.mapData.tileSize.height;
    let tileName = this.mapData.data[x][y];
    let tile = this.mapData.tiles[tileName];
    let tileX = (tile.index % this.mapData.tileset.cols) * tileWidth;
    let tileY = Math.floor(tile.index / this.mapData.tileset.cols) * tileHeight;

    ctx.save();
    ctx.translate((x - y) * tileWidth / 2, (x + y) * tileHeight / 2);

    // ctx.drawImage(this.tileSet, index * tileWidth, tileHeight, tileWidth, tileHeight, -tileWidth / 2, tileHeight, tileWidth, tileHeight);
    ctx.drawImage(this.tileSet, tileX, tileY, tile.width, tile.height, -tileWidth / 2, tileHeight, tile.width, tile.height);

    ctx.restore();
  }
}

export default Map;
