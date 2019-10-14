import { MapContainer } from "./map";
import { interactiveCanvasContainer } from "./interactivecanvasContainer";

class App {

  public main = (): void => {
    const mapContainer = MapContainer.getInstance();
    mapContainer.init();

    const map = mapContainer.getMap();
    if (!map) {
      return;
    }
    interactiveCanvasContainer();
  }
}

new App().main();