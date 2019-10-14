import { MapContainer } from "./map";
import { MapConst } from "./const";


interface InteractiveCanvas {
  interactiveCanvas: any
}

class App implements InteractiveCanvas {
  // sorry....
  interactiveCanvas: any;

  public main = (): void => {
    const mapContainer = MapContainer.getInstance();
    mapContainer.init();

    const map = mapContainer.getMap();
    if (!map) {
      return;
    }

    const callbacks = {
      onUpdate(data: any) {
        if ("nagoya" in data) {
          map.jumpTo({
            center: MapConst.POINT_NAGOYA_STATION
          });
        }
        // if ("reset" in data) {
        //   self.reset();
        // }
      }
    };

    this.interactiveCanvas.ready(callbacks);
  };
}



new App().main();