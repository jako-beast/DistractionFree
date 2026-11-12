
import InstagramEmbed from './InstagramEmbed'
import { useEffect, useState } from 'react'
import './App.css'

const platforms = [
  { name: 'Instagram', icon: '◎', color: '#D94B83' },
  { name: 'Snapchat', icon: '👻', color: '#D6B800' },
  { name: 'Facebook', icon: 'f', color: '#1877F2' },
  { name: 'TikTok', icon: '♪', color: '#171717' },
]

const sections = ['Home', 'Inbox', 'Notifications']

function App() {
  const [activeSection, setActiveSection] = useState('Home')
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('social-theme') === 'dark'
  })

  useEffect(() => {
    localStorage.setItem('social-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  function openPlatform(platformName: string) {
    setActiveSection(platformName)
  }

  return (
    <div className={`app-shell ${darkMode ? 'dark-mode' : ''}`}>
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">S</div>
          <span>social<span className="brand-dot">.</span></span>
        </div>

        <div className="sidebar-label">MENU</div>

        <nav>
          {sections.map((section) => (
            <button
              key={section}
              className={`nav-item ${activeSection === section ? 'active' : ''}`}
              onClick={() => setActiveSection(section)}
            >
              <span className="nav-icon">
                {section === 'Home' ? '⌂' : section === 'Inbox' ? '✉' : '♧'}
              </span>
              {section}
              {section === 'Inbox' && <span className="nav-count">3</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-label platform-label">YOUR PLATFORMS</div>

        <div className="platform-list">
          {platforms.map((platform) => (
            <button
              key={platform.name}
              className={`platform-item ${activeSection === platform.name ? 'selected' : ''}`}
              onClick={() => openPlatform(platform.name)}
            >
              <span
                className="platform-icon"
                style={{ backgroundColor: platform.color }}
              >
                {platform.icon}
              </span>
              {platform.name}
            </button>
          ))}
        </div>

        <div className="sidebar-bottom">
          <div className="avatar">Y</div>
          <div>
            <strong>Your profile</strong>
            <span>Personal account</span>
          </div>
          <span className="settings-icon">⚙</span>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="mobile-brand">social<span>.</span></div>
          <div className="page-heading">
            <span className="eyebrow">
              {activeSection === 'Instagram' ? 'YOUR FRIENDS, YOUR FEED' : 'YOUR SOCIAL SPACE'}
            </span>
            <h1>{activeSection}</h1>
          </div>
          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? '☀' : '☾'}
            </button>
            <button
              className="profile-button"
              onClick={() => setActiveSection('Profile')}
            >
              <span className="avatar">Y</span>
            </button>
          </div>
        </header>

        {activeSection === 'Home' && (
          <>
            <section className="welcome">
              <div>
                <h2>Your people. Your platforms.</h2>
                <p>Just the updates you actually want to see.</p>
              </div>
              <span className="welcome-decoration">✳</span>
            </section>

            <section className="platform-section">
              <div className="section-heading">
                <div>
                  <h2>Your platforms</h2>
                  <p>Choose where you want to catch up.</p>
                </div>
              </div>
              <div className="platform-grid">
                {platforms.map((platform) => (
                  <button
                    key={platform.name}
                    className="platform-card"
                    onClick={() => openPlatform(platform.name)}
                  >
                    <span
                      className="large-platform-icon"
                      style={{ backgroundColor: platform.color }}
                    >
                      {platform.icon}
                    </span>
                    <strong>{platform.name}</strong>
                    <span className="card-arrow">↗</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="feed-section">
              <div className="section-heading">
                <div>
                  <h2>Your friends' updates</h2>
                  <p>Only content from people you follow.</p>
                </div>
                <span className="friends-badge">FRIENDS ONLY</span>
              </div>
              <div className="empty-state">
                <div className="empty-icon">☀</div>
                <h3>Your feed starts here</h3>
                <p>Choose a platform to see its dedicated friends-only experience.</p>
                <span className="empty-note">No suggested posts or endless scrolling.</span>
              </div>
            </section>
          </>
        )}

        {activeSection === 'Instagram' && (
          <section className="instagram-page">
            <InstagramEmbed />
          </section>
        )}

        {activeSection === 'Inbox' && (
          <section className="placeholder-page">
            <div className="empty-icon">✉</div>
            <h2>One inbox. All your conversations.</h2>
            <p>Your Instagram, Snapchat, Facebook, and TikTok messages will live here.</p>
            <span className="coming-soon">INBOX — COMING SOON</span>
          </section>
        )}

        {activeSection === 'Notifications' && (
          <section className="placeholder-page">
            <div className="empty-icon">♧</div>
            <h2>Only notifications that matter.</h2>
            <p>See activity from your friends without promotional alerts or suggested content.</p>
            <span className="coming-soon">NOTIFICATIONS — COMING SOON</span>
          </section>
        )}

        {activeSection === 'Profile' && (
          <section className="placeholder-page">
            <div className="avatar large-avatar">Y</div>
            <h2>Your profile</h2>
            <p>Your personal Social account and preferences will appear here.</p>
          </section>
        )}

        {activeSection === 'Snapchat' && (
          <section className="placeholder-page">
            <div className="empty-icon">👻</div>
            <h2>Snapchat</h2>
            <p>Your dedicated Snapchat experience is coming next.</p>
          </section>
        )}

        {activeSection === 'Facebook' && (
          <section className="placeholder-page">
            <div className="empty-icon">f</div>
            <h2>Facebook</h2>
            <p>Your dedicated Facebook experience is coming soon.</p>
          </section>
        )}

        {activeSection === 'TikTok' && (
          <section className="placeholder-page">
            <div className="empty-icon">♪</div>
            <h2>TikTok messages</h2>
            <p>Messages only. No video browsing feed.</p>
          </section>
        )}

        <footer>
          <span>social<span className="brand-dot">.</span></span>
          <span>Less scrolling. More connecting.</span>
        </footer>
      </main>

      <nav className="mobile-nav">
        {sections.map((section) => (
          <button
            key={section}
            className={activeSection === section ? 'mobile-active' : ''}
            onClick={() => setActiveSection(section)}
          >
            <span>{section === 'Home' ? '⌂' : section === 'Inbox' ? '✉' : '♧'}</span>
            {section}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App
