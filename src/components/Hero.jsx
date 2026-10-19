import Cta from '../components/Cta.jsx'
import { skillsOf } from '../hooks.js'

export default function Giant({ d }) {
  const s = skillsOf(d)
  const loop = [...s, ...s, ...s, ...s]
  return (
    <header className="hero hg">
      <div className="w">
        <p className="tag" data-rv>{d.name} · {d.role}</p>
        <h1 data-rv>{d.tagline}</h1>
        <Cta d={d} />
      </div>
      <div className="mq" aria-hidden="true">
        <div>{loop.map((x, i) => <span key={i}>{x}</span>)}</div>
      </div>
    </header>
  )
}
