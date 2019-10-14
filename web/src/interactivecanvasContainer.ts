import mapboxgl from "mapbox-gl";

export const interactiveCanvasContainer = (interactiveCanvas: any, map: mapboxgl.Map) => {
  // map.jumpTo({
  //   center: new mapboxgl.LngLat(136.881537, 35.170915)
  // });

  const callbacks = {
    onUpdate(data: any) {
      if ("nagoya" in data) {
        console.log('名古屋に移動します！！！！');
        map.jumpTo({
          center: new mapboxgl.LngLat(136.881537, 35.170915)
        });
      }
      // if ("reset" in data) {
      //   self.reset();
      // }
    }
  };

  interactiveCanvas.ready(callbacks);
};