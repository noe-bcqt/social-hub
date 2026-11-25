import { useEffect, type CSSProperties } from "react";
import { ArrowUpRight, MapPin, Moon, Sun } from "lucide-react";
import { config as c } from "./config";
import { icons } from "./icons";
import { useTheme } from "./useTheme";

// Délai d'apparition échelonné (voir .rise dans index.css)
const step = (i: number) => ({ "--i": i }) as CSSProperties;

export default function App() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";

  useEffect(() => {
    document.title = c.name;
  }, []);

  return (
    <div className="wrap">
      <header className="top">
        <span className="handle">{c.handle}</span>
        <div className="top-right">
          {c.status.show && (
            <span className="status">
              <i aria-hidden="true" />
              {c.status.label}
            </span>
          )}
          <button
            className="icon-btn"
            onClick={toggle}
            aria-label={dark ? "Passer au thème clair" : "Passer au thème sombre"}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="avatar rise" style={step(0)}>
            <img src={c.avatar} alt={c.name} width={112} height={112} />
          </div>
          <h1 className="rise" style={step(1)}>{c.name}</h1>
          <p className="bio rise" style={step(2)}>{c.bio}</p>
          <p className="meta rise" style={step(3)}>
            <span>{c.role}</span>
            {c.location && (
              <span className="loc"><MapPin size={14} aria-hidden="true" />{c.location}</span>
            )}
          </p>
        </section>

        <section className="rise" style={step(4)} aria-labelledby="socials">
          <h2 id="socials" className="label">{c.socialsTitle}</h2>
          <ul className="cards">
            {c.socials.map((s) => (
              <li key={s.id}>
                <a className="card" href={s.url} target="_blank" rel="noopener noreferrer">
                  <span className="ico">{icons[s.id]}</span>
                  <span className="txt">
                    <b>{s.name}</b>
                    {s.description && <small>{s.description}</small>}
                  </span>
                  <ArrowUpRight className="go" size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {c.now.show && (
          <section className="now rise" style={step(5)} aria-labelledby="now">
            <h2 id="now" className="label">{c.now.title}</h2>
            <a className="track" href={c.now.url} target="_blank" rel="noopener noreferrer">
              {icons.spotify}
              <span className="txt">
                <b>{c.now.track}</b>
                <small>{c.now.artist}</small>
              </span>
            </a>
            <p className="phrase">{c.now.phrase}</p>
            <blockquote>
              “{c.now.quote}”
              {c.now.quoteAuthor && <cite>{c.now.quoteAuthor}</cite>}
            </blockquote>
          </section>
        )}
      </main>

      <footer className="foot">
        <span>© {new Date().getFullYear()} {c.name}</span>
        <span>{c.footer.tagline}</span>
        <a href={c.contact.href}>{c.contact.label}</a>
      </footer>
    </div>
  );
}
