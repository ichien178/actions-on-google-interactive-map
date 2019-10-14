import mapboxgl from "mapbox-gl";
import { MapConst } from "./const";

export class InteractiveCanvasContainer {
  constructor(
    private interactiveCanvas: any,
    private map: mapboxgl.Map) {
  }

  public readyCallback() {
    const callbacks = this.createCallback(this.map);
    this.interactiveCanvas.ready(callbacks);
  }

  private createCallback(map: mapboxgl.Map) {
    const callbacks = {
      onUpdate(data: any) {
        if ("nagoya" in data) {
          map.flyTo({
            center: MapConst.POINT_NAGOYA_STATION
          });
        }
      }
    };
    return callbacks;
  }
}