import React from "react";

const Film = () => {
  return (
    <div id="film-container" className="">
      <h1 className="text-4xl" style={{lineHeight: '5rem', marginBottom: 20}}>FILM + DOC</h1>
      <div className="nav-subheader">DOCUMENTARY</div>
      <ul className="py-4">
        <li>
          <a target="_blank" href="https://vimeo.com/772612578">[2021] Sky Boy <span className="film-role">profile</span></a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/watch?v=amSIwDqeFzo">[2020] Only in America <span className="film-role">profile</span></a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/watch?v=amSIwDqeFzo">[2018/2019] One Way Tickets <span className="film-role">feature in post</span></a>
        </li>
      </ul>
      <div className="py-5 nav-subheader">MUSIC VIDEO</div>
      <ul>
        <li>
          <a target="_blank" href="https://www.youtube.com/watch?v=7ANjebTG3vI">[2021] Crying During Sex, Carol Ades<span className="film-role">Producer</span></a>
        </li>
        <li>
          <a target="_blank" href="https://youtu.be/6CB5BzBNKYY?si=5WwNN0MhaB5swrhJ">[2020] Power Freaks, Jean Dawson<span className="film-role">PA</span></a>
        </li>
        <li>
          <a target="_blank" href="https://youtu.be/YYUiCP3eMAA?si=3idqPszbafpRC0Kv">[2020] Clear Bones, Jean Dawson<span className="film-role">Grip/Unit</span></a>
        </li>
        <li>
          <a target="_blank" href="https://youtu.be/C3hYjI3UnEY?si=sOmAbVytJW_EQb1s">[2020] Starface, Jean Dawson<span className="film-role">Swing</span></a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/watch?v=y94EovoyQw4">[2020] Sabotage, Jawny Utah<span className="film-role">Unit</span></a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/watch?v=AP67Gb1v1zE">[2020] Super Bad Mantra, Jawny Utah<span className="film-role">Unit</span></a>
        </li>
        <li>
          <a target="_blank" href="https://youtu.be/elSZfsrjOxQ?si=N8JHy_PS_lYfWEtS">[2019] Bruise Boy, Jean Dawson<span className="film-role">PA</span></a>
        </li>
      </ul>
      <div className="py-5 nav-subheader">OTHER</div>
      <ul>
        <li>
          <span>[2023] After Shock (feature film)<span className="film-role">Asst. Carpenter</span></span>
        </li>
        <li>
          <span>[2022] MASTERCARD w/ Alma Lake<span className="film-role">Set Decorator</span></span>
        </li>
      </ul>

    </div>
  );
}

export default Film;
