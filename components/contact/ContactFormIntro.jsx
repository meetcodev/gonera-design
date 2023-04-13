import React from "react";

const ContactFormIntro = ({children}) => {
  const introContentForm = {
    name: "GONERA DESIGN",
    subname: "by Jacek Gonera",
    designation: "Formularz kontaktowy",
    text: (
      <> 
        <em>         {/*  //BUG poprawić to  */}
        <p className="first" >
            Jestem absolwentem kierunku Architektury Wnętrz i&nbsp;Wzornictwa na Akademii Sztuk Pięknych we&nbsp;Wrocławiu. Zajmuję się aranżacją przestrzeni od&nbsp;ponad czterech lat, a&nbsp;własne studio projektowe prowadzę od 2020 r.
        </p>
            <div className="second">
                Moim celem jest tworzenie ponadczasowych wnętrz idealnie dopasowanych do&nbsp;klienta. 
            </div>
        <p className="first" >Dobrze zaprojektowane wnętrza podnoszą jakość życia ich użytkowników.
            W&nbsp;swoich projektach kieruje się zasadą, że&nbsp;prawdziwe piękno jest ukryte w&nbsp;detalach. Wierze w&nbsp;to, że&nbsp;dobre projektowanie oparte jest na&nbsp;umiejętnym słuchaniu i&nbsp;empatii względem drugiego człowieka - w&nbsp;tym przypadku mojego Inwestora. Analizuję możliwości jakie oferuje zastana przestrzeń pod kątem funkcji i&nbsp;ergonomii.
            Staram się łączyć użytkowość projektów z&nbsp;estetyką i&nbsp;trwałością materiałów których używam w&nbsp;swoich aranżacjach.
         </p>
      </em>
      </>
    ),
  };

  return (
    <>
      {/* <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div> */}
    <div className="tokyo_tm_about">
        <div className="about_title">
            <h4>{introContentForm.name}</h4>
            <h3>{introContentForm.subname}</h3>
        </div>
            <span>{introContentForm.designation}</span>
        {/* <div className="about_text">{introContentForm.text}</div> */}
        {children ? children : ""}
    </div>
    </>
  );
};

export default ContactFormIntro;
