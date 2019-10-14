import { MapContainer } from "./map";
import window from './util/window';
import { InteractiveCanvasContainer } from "./interactivecanvasContainer";

class App {
  /**
   * メイン処理
   */
  public main = (): void => {
    MapContainer.getInstance().init();

    const map = MapContainer.getInstance().getMap();
    if (!map) {
      return;
    }

    const interactivecanvasContainer = new InteractiveCanvasContainer(window.interactiveCanvas, map);
    interactivecanvasContainer.readyCallback();
  }
}

new App().main();