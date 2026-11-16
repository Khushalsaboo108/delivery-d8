import { worldMap } from "./world-map-data";

// Jodhpur, Rajasthan — estimated from its published lat/long relative to
// India's bounding box on this map, then checked to fall inside India's
// outline below.
const ORIGIN = { x: 680, y: 384 };

// A handful of destination countries spread across continents, used only
// to illustrate worldwide reach — each point is that country's own
// largest-landmass centroid, not a specific city.
const DESTINATIONS = [
  { id: "us", name: "United States", x: 195, y: 341 },
  { id: "gb", name: "United Kingdom", x: 468, y: 282 },
  { id: "ae", name: "United Arab Emirates", x: 627, y: 394 },
  { id: "sg", name: "Singapore", x: 766, y: 459 },
  { id: "au", name: "Australia", x: 852, y: 538 },
  { id: "za", name: "South Africa", x: 545, y: 548 },
];

function arcPath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const offset = 0.15;
  const cx = mx - dy * offset;
  const cy = my + dx * offset;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

export function ServiceAreaMap() {
  return (
    <figure className="service-area-map">
      <svg
        viewBox={worldMap.viewBox}
        role="img"
        aria-label="World map showing Shree Balaji Enterprises' shipments from Jodhpur, Rajasthan to destinations worldwide"
      >
        {worldMap.locations.map((location) => (
          <path
            key={location.id}
            d={location.path}
            className={
              location.id === "in"
                ? "service-area-state service-area-state-home"
                : "service-area-state"
            }
          />
        ))}
        {DESTINATIONS.map((d) => (
          <path
            key={d.id}
            d={arcPath(ORIGIN.x, ORIGIN.y, d.x, d.y)}
            className="service-area-route"
          />
        ))}
        {DESTINATIONS.map((d) => (
          <circle
            key={d.id}
            cx={d.x}
            cy={d.y}
            r={4}
            className="service-area-pin"
          >
            <title>{d.name}</title>
          </circle>
        ))}
        <circle
          cx={ORIGIN.x}
          cy={ORIGIN.y}
          r={7}
          className="service-area-pin service-area-pin-home"
        >
          <title>Jodhpur, Rajasthan</title>
        </circle>
      </svg>
      <figcaption className="service-area-credit">
        Map:{" "}
        <a href="https://mapsvg.com" target="_blank" rel="noreferrer">
          MapSVG
        </a>
        , CC BY 4.0
      </figcaption>
    </figure>
  );
}
