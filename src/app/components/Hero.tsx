export default function Hero() {
  return (
    <section className="welcome-area">
      <div className="welcome-slides owl-carousel">
          <div className="single-welcome-slide bg-img bg-overlay" style={{ backgroundImage: 'url(img/bg-img/2.jpg)'}}>
              <div className="container h-100">
                  <div className="row h-100 align-items-center">
                      <div className="col-12 col-lg-8 col-xl-6">
                          <div className="welcome-text">
                              <h2 data-animation="bounceInDown" data-delay="900ms">Hello <br />Im Jackson</h2>
                              <p data-animation="bounceInDown" data-delay="500ms">I photograph very instinctively. I see how it is taken like that. I do not follow certain styles, philosophies or teachers.</p>
                              <div className="hero-btn-group" data-animation="bounceInDown" data-delay="100ms">
                                  <a href="#" className="btn alime-btn mb-3 mb-sm-0 mr-4">Get a Quote</a>
                                  <a className="hero-mail-contact" href="mailto:hello.alime@gmail.com">hello.alime@gmail.com</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="single-welcome-slide bg-img bg-overlay" style={{ backgroundImage: 'url(img/bg-img/2.jpg)'}}>
              <div className="container h-100">
                  <div className="row h-100 align-items-center">
                      <div className="col-12 col-lg-8 col-xl-6">
                          <div className="welcome-text">
                              <h2 data-animation="bounceInUp" data-delay="100ms">Hello <br/>Im Alime</h2>
                              <p data-animation="bounceInUp" data-delay="500ms">I photograph very instinctively. I see how it is taken like that. I do not follow certain styles, philosophies or teachers.</p>
                              <div className="hero-btn-group" data-animation="bounceInUp" data-delay="900ms">
                                  <a href="#" className="btn alime-btn mb-3 mb-sm-0 mr-4">Get a Quote</a>
                                  <a className="hero-mail-contact" href="mailto:hello.alime@gmail.com">hello.alime@gmail.com</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}