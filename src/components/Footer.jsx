import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-top__box">
              <h5 className="footer-top__box__title">Follow us</h5>
              <p className="footer-top__box__details">
                Follow us on Twitter for updates on drops, promos, pre-sales and more from another dimension.
              </p>
              <a href='#' className="footer-top__box__icons">
                <i class='bx bxl-twitter'></i>
              </a>
            </div>
            <div className="footer-top__box">
              <h5 className="footer-top__box__title">X PLUS CO., LTD.</h5>
              <ul className="footer-menu">
                <li>Japan, Osaka, Chuo Ward, Hiranomachi 1-8-8, Takahashi Building</li>
                <li>
                  9F812000107536
                </li>
                <li>
                  Matsubara Kazuma
                </li>
                <li>
                  <a href="#">xpluscrypto@xplus.co.jp</a>
                </li>
                <li>
                  8120001075369
                </li>
              </ul>
            </div>
            <div className="footer-top__box">
              <h5 className="footer-top__box__title">CREDITS</h5>
              <ul className="footer-menu">
                <li>
                  ©XPLUS 2022. All Rights Reserved.
                </li>
                <li>
                  Built by Long
                </li>
                <li className='policy'>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Service</a>
                  <a href="#">Refund Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer