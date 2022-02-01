import React from 'react';

export default function Details() {
  const professionalProfile = 'Perfil Profissional'
  const knowledge = 'Conhecimentos'
  const courses = 'Cursos'
  const exp = 'Experiências'
  const interests = 'Interesses'
  
  const listKnowledge = ['HTML, CSS, JS', 'React e Angular', 'Js, Ts e Elixir', 'Node e Deno']
  const listCourses = ['Design Digital', 'UX Design' ,'Certified Tech Developer']
  const listInterests = ['Phoenix', 'Elixir', 'Tailwind CSS', 'Alpine Js', 'LiveView']

  return(
    <article className="l-details">
      <div className="l-details__container">
        <section className="l-details__wrapper">
          <h2>{professionalProfile}</h2>
          <p>
            Tenho interesse em desenvolver meus conhecimentos e explorar novas 
            tecnologias para construção de novos projetos, 
            sempre procurando alcançar o proximo nivel
          </p>
        </section>

        <section className="l-details__wrapper">
          <h2>{exp}</h2>
          <p className="l-details__occupation"><strong>Designer Gráfico</strong></p>
          <p> <strong className="--pri">LetraPlac</strong> e <strong className="--pri">PR2</strong> 
          - 2018 ~ 2021 </p>
          <p className="l-details__occupation"><strong>Dev Frontend Jr</strong></p>
          <p> <strong className="--pri">Tantto</strong> - Atualmente</p>
        </section>

        <section className="l-details__wrapper">
          <h2>{knowledge}</h2>
          <ul>
            {listKnowledge.map((knowledge, key) => {
              return <li key={key}>{knowledge}</li>;
            })}
          </ul>
        </section>

        <section className="l-details__wrapper">
          <h2>{courses}</h2>
          <ul>
            {listCourses.map((course, key) => {
              return <li key={key}>{course}</li>
            })}
          </ul>
        </section>

        <section className="l-details__wrapper">
          <h2>{interests}</h2>
          <ul>
            {listInterests.map((interest, key) => {
              return <li className="l-details__interest" key={key}>{interest}</li>
            })}
          </ul>
        </section>       
      </div>
    </article>
  )
}