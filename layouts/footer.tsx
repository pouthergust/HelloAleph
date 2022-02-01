import React from 'react'

export default function Footer() {
    const linkedIn = 'https://www.linkedin.com/in/gabriel-henrique-5a562020a'
    const github = 'https://github.com/pouthergust'
    

  return (
  <footer className="l-footer">
    <section className="l-footer__container">
      <a href={linkedIn}>LinkedIn</a> | <a href={github}>Github</a>
    </section>
  </footer>
  )
}
