import mapboxgl from "mapbox-gl";

export namespace MapConst {
  export const ACCESS_TOKEN = 'pk.eyJ1Ijoic2ljaGllbiIsImEiOiJjam03czV6YmQxcGE2M3FuMmpmc2phZ3d4In0.5EZV5nMrrxHVVubT2aNpLA'
  export const POINT_TOKYO_STATION = new mapboxgl.LngLat(139.767125, 35.681236);
  export const POINT_NAGOYA_STATION = new mapboxgl.LngLat(136.881537, 35.170915);

  // Maps service | API | Mapbox - https://docs.mapbox.com/api/maps/#styles
  export namespace StyleId {
    export const STREET = 'mapbox://styles/mapbox/streets-v9';
    export const DARK = 'mapbox://styles/mapbox/dark-v10';
    export const LIGHT = 'mapbox://styles/mapbox/light-v10';
  }
}
