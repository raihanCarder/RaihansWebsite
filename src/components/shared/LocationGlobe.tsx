type LocationGlobeProps = {
  lat: number;
  lon: number;
  label: string;
};

const UOFT_ASCII = String.raw`██╗   ██╗  ██████╗  ███████╗ ████████╗
██║   ██║ ██╔═══██╗ ██╔════╝ ╚══██╔══╝
██║   ██║ ██║   ██║ █████╗      ██║
██║   ██║ ██║   ██║ ██╔══╝      ██║
╚██████╔╝ ╚██████╔╝ ██║         ██║
 ╚═════╝   ╚═════╝  ╚═╝         ╚═╝`;

const CANADA_FLAG_ASCII = String.raw`████                    ████
████          *         ████
████         ***        ████
████      *  ***  *     ████
████      *********     ████
████     ***********    ████
████      *********     ████
████         ***        ████
████          *         ████
████          |         ████`;

const RADIUS = 90;
const VIEW_LAT = 20;
const VIEW_LON = -50;

const toRad = (deg: number) => (deg * Math.PI) / 180;

function project(lat: number, lon: number) {
  const phi = toRad(lat);
  const lambda = toRad(lon - VIEW_LON);
  const phi0 = toRad(VIEW_LAT);

  const cosC =
    Math.sin(phi0) * Math.sin(phi) +
    Math.cos(phi0) * Math.cos(phi) * Math.cos(lambda);

  const x = RADIUS * Math.cos(phi) * Math.sin(lambda);
  const y =
    -RADIUS *
    (Math.cos(phi0) * Math.sin(phi) - Math.sin(phi0) * Math.cos(phi) * Math.cos(lambda));

  return { x, y, visible: cosC >= 0 };
}

function buildLatitudePath(latDeg: number) {
  const segments: string[] = [];
  let started = false;
  for (let lonDeg = -180; lonDeg <= 180; lonDeg += 4) {
    const { x, y, visible } = project(latDeg, lonDeg);
    if (!visible) {
      started = false;
      continue;
    }
    segments.push(`${started ? "L" : "M"}${x.toFixed(2)},${y.toFixed(2)}`);
    started = true;
  }
  return segments.join(" ");
}

function buildMeridianPath(lonDeg: number) {
  const segments: string[] = [];
  let started = false;
  for (let latDeg = -90; latDeg <= 90; latDeg += 3) {
    const { x, y, visible } = project(latDeg, lonDeg);
    if (!visible) {
      started = false;
      continue;
    }
    segments.push(`${started ? "L" : "M"}${x.toFixed(2)},${y.toFixed(2)}`);
    started = true;
  }
  return segments.join(" ");
}

export default function LocationGlobe({ lat, lon, label }: LocationGlobeProps) {
  const pin = project(lat, lon);

  const latitudes = [-60, -30, 30, 60];
  const meridians = [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150];

  const leaderEndX = pin.x;
  const leaderEndY = RADIUS + 6;

  return (
    <div className="globe-wrap">
      <pre className="term-ascii globe-ascii" aria-hidden="true">{UOFT_ASCII}</pre>
      <pre className="term-ascii globe-flag" aria-hidden="true">{CANADA_FLAG_ASCII}</pre>

      <svg
        className="globe"
        viewBox="-100 -100 200 200"
        role="img"
        aria-label={`Globe showing location of ${label}`}
      >
        <defs>
          <radialGradient id="globe-disc-glow" cx="35%" cy="35%" r="70%">
            <stop offset="0%" stopColor="rgba(213, 208, 199, 0.12)" />
            <stop offset="55%" stopColor="rgba(213, 208, 199, 0.04)" />
            <stop offset="100%" stopColor="rgba(213, 208, 199, 0)" />
          </radialGradient>
          <clipPath id="globe-disc-clip">
            <circle cx="0" cy="0" r={RADIUS} />
          </clipPath>
        </defs>

        <circle
          className="globe-glow"
          cx="0"
          cy="0"
          r={RADIUS}
          fill="url(#globe-disc-glow)"
        />

        <circle className="globe-disc" cx="0" cy="0" r={RADIUS} />

        <g clipPath="url(#globe-disc-clip)">
          {latitudes.map((latDeg) => (
            <path
              key={`lat-${latDeg}`}
              className="globe-latitude"
              d={buildLatitudePath(latDeg)}
            />
          ))}
          <path className="globe-equator" d={buildLatitudePath(0)} />
          {meridians.map((lonDeg, i) => (
            <path
              key={`lon-${lonDeg}`}
              className="globe-meridian"
              d={buildMeridianPath(lonDeg)}
              strokeDasharray={i % 2 === 0 ? undefined : "1.2 4"}
            />
          ))}
        </g>

        {pin.visible && (
          <>
            <line
              className="globe-pin-leader"
              x1={pin.x}
              y1={pin.y}
              x2={leaderEndX}
              y2={leaderEndY}
            />
            <circle
              className="globe-pin globe-pin-outer"
              cx={pin.x}
              cy={pin.y}
              r="8"
            />
            <circle
              className="globe-pin globe-pin-mid"
              cx={pin.x}
              cy={pin.y}
              r="4"
            />
            <circle
              className="globe-pin globe-pin-inner"
              cx={pin.x}
              cy={pin.y}
              r="1.6"
            />
          </>
        )}
      </svg>

      <p className="globe-caption">
        <span className="globe-caption-line">
          <span className="term-prompt">&gt;</span>{" "}
          <span className="term-out">{label.toLowerCase()}</span>
        </span>
      </p>
    </div>
  );
}
