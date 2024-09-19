import { FC } from 'react'

const Navbar: FC = () => {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <span className="has-text-weight-bold	is-family-code">Ai Code Assistant</span>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <span style={{ fontSize: '1.3rem' }}>
            <i className="fa-solid fa-robot"></i>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
