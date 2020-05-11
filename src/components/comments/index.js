import React from 'react';

const CardComments = ({values = []}) => {
  console.log(values)
  return (
    <section>
      <h1>Comentarios</h1>
      {values.length != 0 &&
      values.map(comment => (
        <div className="comments-section__container">
          <h2>{comment.firstName}{comment.lastName}</h2>
          <h3>{comment.mail}</h3>
          <p >{comment.comment}</p>
        </div>
      ))}
    </section>
  )
}

export default CardComments;