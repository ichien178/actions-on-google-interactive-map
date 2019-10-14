import mapboxgl from "mapbox-gl";
import { MapConst } from "./const";

export const interactiveCanvasContainer = (interactiveCanvas: any, map: mapboxgl.Map) => {

  const callbacks = {
    onUpdate(data: any) {
      if ("nagoya" in data) {
        map.flyTo({
          center: MapConst.POINT_NAGOYA_STATION
        });
      }
      // if ("reset" in data) {
      //   self.reset();
      // }
    }
  };

  interactiveCanvas.ready(callbacks);
};