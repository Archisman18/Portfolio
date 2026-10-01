import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with React + Vite.
        </p>
      </div>
    </footer>
  )
}