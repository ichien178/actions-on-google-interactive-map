import { MapContainer } from "./map";
import { interactiveCanvasContainer } from "./interactivecanvasContainer";
import window from './util/window';


class App {
  interactiveCanvas: any;

  public main = (): void => {
    const mapContainer = MapContainer.getInstance();
    mapContainer.init();

    const map = mapContainer.getMap();
    if (!map) {
      return;
    }
    console.log(window);
    interactiveCanvasContainer(window.interactiveCanvas, map);
  }
}

new App().main();