export const interactiveCanvas = (map) => {
  const callbacks = {
    onUpdate(data) {
      if ("nagoya" in data) {
        console.log('名古屋に移動します！！！！');
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