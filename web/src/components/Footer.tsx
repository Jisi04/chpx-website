export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner footer-grid">
        <div className="footer-col footer-brand">
          <div className="footer-brand-row">
            <img src="/assets/logo-full.png" alt="CHOPPEDSTYX" className="footer-logo" width={63} height={28} />
          </div>
          <p>Built by creators, for creators. A collective where talent, creativity, and culture collide.</p>
          <p className="footer-domain">CHPX.PH</p>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Navigate</p>
          <a href="#top">Home</a>
          <a href="#about">About CHPX</a>
          <a href="#meet">Meet CHPX</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Follow Us</p>
          <a href="https://youtube.com/@choppedstyxph" target="_blank" rel="noopener">YouTube</a>
          <a href="https://discord.gg/choppedstyxph" target="_blank" rel="noopener">Discord</a>
          <a href="https://tiktok.com/@choppedstyxph" target="_blank" rel="noopener">TikTok</a>
          <a href="https://facebook.com/choppedstyxph" target="_blank" rel="noopener">Facebook</a>
          <a href="https://instagram.com/choppedstyxph" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
      <div className="footer-inner footer-bottom">
        <p>© {year} Choppedstyx (CHPX). All rights reserved.</p>
        <p className="footer-bottom-tagline">
          <span className="footer-accent">CHPX</span> — Built by creators, for creators.
        </p>
      </div>
    </footer>
  );
}
