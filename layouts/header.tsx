import React from 'react'
import ImgProfile from '~/components/ImgProfile.tsx'

export default function Header() {
    const name = 'Gabriel Henrique'
    const occupation = 'Designer e Dev Frontend jr'
    const phone = '(15) 98109-0508'
    const adress = 'R. Voluntarios de Sorocaba, 82'
    

  return (
  <header className="l-header">
    <section className="l-header__container">
    <ImgProfile />
    <div className="l-header__info">
      <h1 className="l-header__name">{name}</h1>
      <p className="l-header__occupation --pri"><strong>{occupation}</strong></p>
      <p className="l-header__phone">{phone}</p>
      <p className="l-header__adress">{adress}</p>
    </div>
    </section>
  </header>
  )
}
