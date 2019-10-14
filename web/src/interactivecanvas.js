export const exec = (map) => {
  const callbacks = {
    onUpdate(data) {
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

  interactiveCanvas.ready(callbacks);
};