import dateFormat from 'dateformat';

const getURLParameter = name => decodeURIComponent((new RegExp(`[?|&]${name}=([^&;]+?)(&|#|;|$)`).exec(location.href) || [undefined, ''])[1].replace(/\+/g, '%20')) || null;

const getCookie = (name) => {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  const arr = document.cookie.match(reg);
  if (arr && arr.length > 2) { return decodeURIComponent(arr[2]); }
  return null;
};

const getRad = d => (d * Math.PI) / 180.0;

const computeDistance = (lat1, lng1, lat2, lng2) => {
  if (lat1 === lat2 && lng1 === lng2) {
    return 0;
  }
  const f = getRad((lat1 + lat2) / 2);
  const g = getRad((lat1 - lat2) / 2);
  const l = getRad((lng1 - lng2) / 2);

  let sg = Math.sin(g);
  let sl = Math.sin(l);
  let sf = Math.sin(f);

  const a = 6378137.0;
  const fl = 1 / 298.257;

  sg *= sg;
  sl *= sl;
  sf *= sf;

  const s = (sg * (1 - sl)) + ((1 - sf) * sl);
  const c = ((1 - sg) * (1 - sl)) + (sf * sl);

  const w = Math.atan(Math.sqrt(s / c));
  const r = Math.sqrt(s * c) / w;
  const d = 2 * w * a;
  const h1 = ((3 * r) - 1) / 2 / c;
  const h2 = ((3 * r) + 1) / 2 / s;

  return d * (1 + (fl * ((h1 * sf * (1 - sg)) - (h2 * (1 - sf) * sg))));
};

const computeDistanceByPoint = (p1, p2) => computeDistance(p1[1], p1[0], p2[1], p2[0]);
const computeDistanceByPointObj = (p1, p2) => computeDistance(p1.latitude, p1.longitude, p2.latitude, p2.longitude);

const calZoomByDistance = distande => 24 - Math.floor(Math.log2(distande));
const calZoomAndCenterByTwoPoints = (p1, p2) => ({ zoom: calZoomByDistance(computeDistanceByPoint(p1, p2)), center: [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2] });

const calZoomAndCenterByPoints = (points) => {
  if (points.length === 0) {
    return null;
  }
  if (points.length === 1) {
    return { zoom: 12, center: points[0] };
  }
  if (points.length === 2) {
    return calZoomAndCenterByTwoPoints(points[0], points[2]);
  }
  const top = points.reduce((a, b) => (a[1] > b[1] ? a : b));
  const bottom = points.reduce((a, b) => (a[1] < b[1] ? a : b));
  const left = points.reduce((a, b) => (a[0] < b[0] ? a : b));
  const right = points.reduce((a, b) => (a[0] > b[0] ? a : b));
  const vDistance = computeDistanceByPoint(top, bottom);
  const hDistance = computeDistanceByPoint(left, right);
  const zoom = calZoomByDistance(Math.max(hDistance, vDistance));
  const center = [(left[0] + right[0]) / 2, (top[1] + bottom[1]) / 2];
  return { zoom, center };
};

const getZeroPointDate = date => new Date(dateFormat(date, 'yyyy-mm-dd'));

export {
  getURLParameter,
  getCookie,
  computeDistanceByPoint,
  computeDistanceByPointObj,
  calZoomByDistance,
  calZoomAndCenterByTwoPoints,
  calZoomAndCenterByPoints,
  getZeroPointDate,
};

