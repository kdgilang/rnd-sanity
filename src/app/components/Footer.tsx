import Image from "next/image";

export default function Footer() {
  return (

    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-content d-flex align-items-center justify-content-between">

              <div className="copywrite-text">
                <p>Link back to Colorlib ca be removed. Template is licensed under CC BY 3.0.
                  Copyright &copy;{(new Date().getFullYear())} All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  Link back to Colorlib c be removed. Template is licensed under CC BY 3.0.</p>
              </div>
              <div className="footer-logo">
                <a href="#">
                  <Image src="/vercel.svg" height={30} width={100} alt="" />
                </a>
              </div>
              <div className="social-info">
                <a href="#"><i className="ti-facebook" aria-hidden="true"></i></a>
                <a href="#"><i className="ti-twitter-alt" aria-hidden="true"></i></a>
                <a href="#"><i className="ti-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i className="ti-pinterest" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}