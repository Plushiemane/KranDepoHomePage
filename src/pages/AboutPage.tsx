import React from 'react';
import Layout from '../components/Layout';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, content }) => {
  return (
    <div className="flex items-center p-3 mx-auto w-full">
      <div className="bs-icon-md bs-icon-rounded bs-icon-primary flex flex-shrink-0 justify-center items-center inline-block bs-icon bg-[rgb(153,95,69)]">
        {icon}
      </div>
      <div className="px-2 flex-grow">
        <h6 className="mb-0 font-semibold">{title}</h6>
        <p className="mb-0">{content}</p>
      </div>
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <Layout title="O nas">
      <section className="w-[95%] min-h-fit mx-auto mb-8 py-6 px-4
                         bg-[#dca471] bg-[url('https://indieground.net/wp-content/uploads/2022/07/Freebie-VintagePaperTextures-Preview-05.jpg')] bg-cover
                         rounded-[63px] border-[10px] border-[#995e43] border-t-[10px] border-t-[#995f45]">
        <div className="mx-auto text-center my-4">
          <img className="w-[30%] max-w-[250px] mx-auto" 
               src="/assets/img/sigma.webp" alt="Logo 'Kranu Nadziei'" />
        </div>
        
        <div className="container py-4">
          <div className="row mb-4">
            <div className="col-md-8 col-xl-9 text-center mx-auto 
                          bg-[url('/assets/img/g081fcc5524a8dbf6e56604304ae091b9767f7222e88619608dddee1b5fe4b0241f684f87aec77d3103ce0effb98c4fa63bf325e7bef3b67c4ecc48e8e7b5e23c_640.webp')] bg-cover
                          rounded-[25px] w-[95%] sm:w-[90%] md:w-[80%] p-4">
              <h2 className="text-white font-bold bg-black py-2 rounded-[25px] font-['Alkatra'] w-full border-0 mx-auto my-2">
                Kran Nadziei
              </h2>
              <p className="font-['Alkatra'] text-white px-2 py-2">
                Każdego dnia dbamy o to, aby zapewnić Państwu najwyższy standard i niezrównaną atmosferę w naszym lokalu.
                <br/><br/>
                Tworzymy przestrzeń, gdzie wyrafinowane smaki spotykają się z elegancją i komfortem. Nasze menu oparte jest na starannie wyselekcjonowanych składnikach, które łączymy w wyjątkowe kompozycje kulinarne, idealnie dopasowane do najbardziej wymagających gustów. Obsługa dba o każdy detal, aby każdy moment spędzony u nas był pełen klasy i wyjątkowego smaku.
                <br/><br/>
                W tle mogą państwo przeżywać emocje sportowych rozgrywek, które wyświetlamy na żywo, oferując wyjątkowe wrażenia zarówno dla miłośników kulinariów, jak i sportu. Zapraszamy do odwiedzenia naszego lokalu.
              </p>
            </div>
          </div>
        </div>
        
        <section className="bg-black/80 text-white w-[95%] mx-auto rounded-[25px] p-4 mb-8"
                 data-aos="fade-down">
          <h3 className="text-center font-['Alkatra'] mb-4">Kontakt</h3>
          
          {/* Phone Contact */}
          <div className="flex items-center p-3 w-full mx-auto">
            <div className="bs-icon-md bs-icon-rounded bs-icon-primary flex flex-shrink-0 justify-center items-center inline-block bs-icon bg-[rgb(153,95,69)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-telephone">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
              </svg>
            </div>
            <div className="px-2 flex-grow">
              <h6 className="mb-0 font-semibold">Telefon</h6>
              <p className="mb-0">537 220 230 / 531 644 605</p>
            </div>
          </div>
          
          {/* Email Contact */}
          <ContactItem 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-envelope">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"></path>
              </svg>
            } 
            title="Email" 
            content="krannadziei@gmail.com" 
          />
          
          {/* Location Contact */}
          <ContactItem 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-pin">
                <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001m-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282"></path>
              </svg>
            } 
            title="Lokalizacja" 
            content="Siedlecka 2b, 72-010 Police" 
          />
        </section>
      </section>
    </Layout>
  );
};

export default AboutPage;
