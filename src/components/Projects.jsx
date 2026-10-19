export default function List({ d }) {
  return (
    <div className="pl">
      {d.projects.map((p, i) => (
        <a key={i} data-rv href={p.link || undefined} target={p.link ? '_blank' : undefined} rel="noreferrer">
          <h3>{p.t}</h3>
          <em>{p.g}</em>
          <p>{p.d}</p>
          {p.img && <img className="pli" src={p.img} alt={p.t} loading="lazy" />}
        </a>
      ))}
    </div>
  )
}
