export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer footer-center bg-base-300 text-base-content p-10">
      <nav className="grid grid-flow-col gap-4">
        <a href="mailto:youremail@example.com" className="link link-hover">
          youremail@example.com
        </a>
        <a
          href="https://github.com/vgandolfi"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/vgandolfi"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
        >
          LinkedIn
        </a>
      </nav>
      <aside>
        <p>© {currentYear} Vinicius Gandolfi. All rights reserved.</p>
      </aside>
    </footer>
  );
}
