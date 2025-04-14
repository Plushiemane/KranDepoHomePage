import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Initialize Facebook widget
    if ((window as any).FB) {
      (window as any).FB.XFBML.parse();
    }

    // Initialize carousel when component mounts
    if ((window as any).bootstrap) {
      const carouselElement = document.getElementById('carousel-2');
      if (carouselElement) {
        new (window as any).bootstrap.Carousel(carouselElement);
      }
    }
  }, []);

  return (
    <Layout title="Strona Główna">
      <div className="moving-text py-8">
        <span className='roboto-font' aria-hidden="true">| W RESTAURACJI MAMY DLA PAŃSTWA OFERTY SPECJALNE, O SZCZEGÓŁY PROSIMY PYTAĆ OBSŁUGĘ |</span>
        <span className='roboto-font'>| W RESTAURACJI MAMY DLA PAŃSTWA OFERTY SPECJALNE, O SZCZEGÓŁY PROSIMY PYTAĆ OBSŁUGĘ |</span>
      </div>
      
      <div data-aos="fade-up" data-aos-duration="600" data-aos-once="true" 
           className="menuutil  w-[75%] h-[40%] opacity-100 mb-[2%] mx-[12.5%] 
                      bg-[var(--bs-secondary-color)] bg-[url('/assets/img/g081fcc5524a8dbf6e56604304ae091b9767f7222e88619608dddee1b5fe4b0241f684f87aec77d3103ce0effb98c4fa63bf325e7bef3b67c4ecc48e8e7b5e23c_640.webp')] 
                      rounded-[25px] mt-[5%] border-[10px] border-[#995e43] border-t-[10px] border-t-[#995f45] p-[2%] my-4 font-['Alkatra']">
        <h3 className="text-break text-center text-xl mx-auto my-[2%] px-[5%] font-['Alkatra'] font-bold rounded-0">
          <span className="text-white bg-transparent text-base mx-auto my-[2%] px-[5%] font-['Alkatra'] font-bold rounded-0">
            Kran Nadziei, nowy lokal w Policach.
          </span><br/>
          <span className="text-white text-base bg-transparent  ">
            Oferujemy dania z wołowiny i schabu, a także sałatki i małe przekąski.
          </span><br/>
          <span className="text-white bg-transparent text-base">
            W ofercie mamy też napoje niskoalkoholowe jak piwo i wino, które idą idealnie w parze ze stekiem czy schabem na kości.&nbsp;
          </span><br/><br/>
          <strong>
            <span className="text-white text-base bg-black/75">
              Organizujemy również imprezy okolicznościowe o klasycznym klimacie.
            </span>
          </strong>
        </h3>
      </div>
      
      <div className="flex justify-center items-center w-[70%] h-auto opacity-100 mx-auto mb-[2.5%] 
                     bg-[var(--bs-secondary-color)] rounded-[25px] transform-none min-w-[300px]"
           data-aos="fade" data-aos-duration="600">
        <div className="carousel slide flex-grow-0 flex-shrink-0 w-[80%] h-auto mx-auto min-w-[300px] max-w-[600px]"
             data-bs-ride="carousel" data-aos="fade" data-aos-duration="600" id="carousel-2">
          <div className="carousel-inner" data-aos="fade">
            <div className="carousel-item active mx-auto">
              <img className="w-full block rounded-[25px]" src="/assets/img/IMG-20241021-WA0002.webp" alt="Zdjęcie deski serów, szynek" />
            </div>
            <div className="carousel-item">
              <img className="w-full block rounded-[25px]" src="/assets/img/IMG_0784.webp" alt="Frytki z krążkami cebulowymi" />
            </div>
            <div className="carousel-item">
              <img className="w-full block rounded-[25px]" src="/assets/img/IMG_0723.webp" alt="Danie Granity, w tle orzechy, lampka wina i szklanka piwa." />
            </div>
            <div className="carousel-item">
              <img className="w-full block rounded-[25px]" src="/assets/img/IMG_0736.webp" alt="Żeberka z frytkami i pomidorami, w tle szklanka piwa." />
            </div>
            <div className="carousel-item">
              <img className="w-full block rounded-[25px]" src="/assets/img/IMG_0840.webp" alt="Sałatka z krewetkami" />
            </div>
            <div className="carousel-item">
              <img className="w-full block rounded-[25px]" src="/assets/img/IMG_0816.webp" alt="Sałatka Cezar" />
            </div>
          </div>
          
          <div>
            <a className="carousel-control-prev" href="#carousel-2" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-2" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
          
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carousel-2" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#carousel-2" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carousel-2" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#carousel-2" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#carousel-2" data-bs-slide-to="4"></button>
            <button type="button" data-bs-target="#carousel-2" data-bs-slide-to="5"></button>
          </div>
        </div>
      </div>

      {/* Hours and Facebook section */}
      <div data-aos="fade-up" className="rounded-0 border-0 w-auto mx-auto mr-[1%] ml-[1%]">
        <div className="container">
          <div className="row mt-[5%]">
            <div className="col-md-6">
              <OpeningHoursTable />
            </div>
            <div className="col-md-6 d-md-flex justify-content-center align-content-center justify-content-md-center align-items-md-center">
            <div id="fb-root"></div>
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v22.0"></script>
              <div 
                className="fb-page mt-1" 
                data-href="https://www.facebook.com/profile.php?id=61566859973402" 
                data-tabs="timeline" 
                data-width="400" 
                data-height="600" 
                data-small-header="false" 
                data-adapt-container-width="false" 
                data-hide-cover="false" 
                data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/profile.php?id=61566859973402" className="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/profile.php?id=61566859973402"></a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Google Maps */}
      <div className="text-center w-[60%] h-auto mx-auto justify-center min-w-[200px] max-w-[1339px] mt-5">
        <iframe 
          width="100%" 
          height="500" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d296.3185233569755!2d14.563463745821755!3d53.547981059522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa73db0d241557%3A0x1fbe7e5be8bda96d!2sKran%20Nadziei!5e0!3m2!1spl!2spl!4v1732135487408!5m2!1spl!2spl" 
          className="border-0 object-[50%_50%]" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps - Kran Nadziei location">
        </iframe>
      </div>
      
      {/* Spacer at the bottom */}
      <div className="block h-[30px]"></div>
    </Layout>
  );
};

// Opening hours table component
const OpeningHoursTable: React.FC = () => {
  const openingHours = [
    { day: 'poniedziałek', hours: 'zamknięte' },
    { day: 'wtorek', hours: '12:00–22:00' },
    { day: 'środa', hours: '12:00–22:00' },
    { day: 'czwartek', hours: '12:00–22:00' },
    { day: 'piątek', hours: '12:00–22:00' },
    { day: 'sobota', hours: '12:00–22:00' },
    { day: 'niedziela', hours: '12:00–22:00' }
  ];

  return (
    <div
      className="table-responsive flex flex-grow-1 flex-shrink-1 flex-fill justify-center items-center content-center flex-wrap justify-content-xxl-center align-items-xxl-center
                 bg-black/70 border border-solid border-black rounded-[10px] w-[80%] h-auto min-w-[300px] max-w-[600px] my-[2%] p-0
                 text-white text-center mx-auto px-[10%] font-['Alkatra']"
      data-aos="fade-down"
    >
      <table className="table bg-black/70 border-0 rounded-0 table-borderless table-striped table-hover">
        <thead className="text-white bg-black rounded-0 bg-dark">
            <tr className="text-center rounded-0 border-0">
                <th className="border border-white h-[10%] w-[200px] px-2 bg-dark text-white">
                    Dzień tygodnia
                </th>
                <th className="border border-white h-[10%] w-[200px] px-2 bg-dark text-white">
                    Godziny otwarcia
                </th>
            </tr>
        </thead>
        <tbody>
          {openingHours.map((item, index) => (
            <tr key={index} className="w-auto min-h-[80px] h-[80px]">
              <td className="text-white border border-solid border-white h-[10%] w-[200px] bg-dark">
                {item.day}
              </td>
              <td className="text-white border border-solid border-white h-[10%] w-[200px] bg-dark">
                <span>{item.hours}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
