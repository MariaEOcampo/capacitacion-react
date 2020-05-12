import React from 'react';
import './style-card.scss';

const CardComment = ({ firstName, lastName, email, commentsNew,id}) => {
  console.log(firstName,lastName,email, commentsNew,id)
  return (
    <React.Fragment>
      <section className="card__container">
          <span className="card__name">
            {firstName} {lastName}
          </span>
          <div className="card__mail">
            {email}
          </div>
          <div className="card__comment">
            <p className="card__comment-p">
              {commentsNew}
            </p> 
          </div>     
      </section>
    </React.Fragment>
  )
 
}

export default CardComment