export default function TopSegments({ activeSegment, setActiveSegment }) {
  const segments = ["Անհատներին", "Բիզնեսին", "Ներդրումային"];
  return (
    <nav className="segments" aria-label="Բաժիններ">
      {segments.map((s) => (
        <a
          key={s}
          href="#"
          className={`segments__link${s === activeSegment ? " is-active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setActiveSegment(s);
          }}
        >
          {s}
        </a>
      ))}
    </nav>
  );
}