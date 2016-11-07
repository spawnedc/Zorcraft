import './scss/base.scss';
import App from './app/App';

const mapCanvas = document.getElementById('map-canvas');
const width = window.innerWidth;
const height = window.innerHeight;

let zorcraft = new App(mapCanvas, width, height);
zorcraft.init();
