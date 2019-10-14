import { MapContainer } from "./map";
import { interactiveCanvas } from "./interactivecanvas";


class App {

  public main = (): void => {
    const mapContainer = MapContainer.getInstance();
    mapContainer.init();

    const map = mapContainer.getMap();
    if (!map) {
      return;
    }
    interactiveCanvas();
  }
}

new App().main();