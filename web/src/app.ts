import { MapContainer } from "./map";
import { exec } from "./interactivecanvas";


class App {

  public main = (): void => {
    const mapContainer = MapContainer.getInstance();
    mapContainer.init();

    const map = mapContainer.getMap();
    if (!map) {
      return;
    }
    exec();
  }
}

new App().main();