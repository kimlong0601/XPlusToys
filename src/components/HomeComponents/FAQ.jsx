import React, {useState } from 'react'

import faqData from '../../data/faq';

const FAQ = () => {

  const [selected,setSelected] = useState(null)
  const answerToggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }



  return (
    <div className="faq">
      <div className="container">
          <div className="content">
              <div className="container">
                  <div className="content-container">
                      <div className="content-box">
                          <h1 className="content-box__heading__large">FAQ</h1>
                          <h2 className="content-box__heading__small">Check out some of our frequenty asked questions.</h2>
                      </div>
                  </div>
              </div>
          </div>


          <div className="faq-container">
            <div className="faq-box">
                <h1 className="faq-box__name">
                  All about space cyclop and X plus
                </h1>
                {
                  faqData.map((item,i) => (
                    <div className="faq-box__detail" key={i}>
                      <h4 className="faq-box__detail__question" onClick={() => answerToggle(i)}>
                        {item.question} 
                        <span>{selected === i ? '-' : '+'}</span>
                      </h4>
                      <p className={selected === i ? 'faq-box__detail__answerShow' : 'faq-box__detail__answer'}> 
                        {item.answer}
                      </p>
                    </div>
                  ))
                }
            </div>
          </div>
      </div>
    </div>
  )
}

export default FAQ