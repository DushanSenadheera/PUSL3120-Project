const AboutUs = () => {
    return (
      <div className="about-us" id="about">
        <h3>Get To Know</h3>
  
        {/* First section */}
        <section>
          <div className="about-img">
            <img src="../src/assets/about1.png" alt="" />
          </div>
          <div className="about-content">
            <h3>Title</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium delectus
              expedita. Optio praesentium ipsam suscipit cum quod perspiciatis corrupti.
            </p>
          </div>
        </section>
  
        <section id="about-us-reverse">
          <div className="about-content">
            <h3>Title</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium delectus
              expedita. Optio praesentium ipsam suscipit cum quod perspiciatis corrupti.
            </p>
          </div>
          <div className="about-img">
            <img src="../src/assets/about2.png" alt="" />
          </div>
        </section>
  
        {/* Third section */}
        <section>
          <div className="about-img">
            <img src="../src/assets/about3.png" alt="" />
          </div>
          <div className="about-content">
            <h3>Title</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium delectus
              expedita. Optio praesentium ipsam suscipit cum quod perspiciatis corrupti.
            </p>
          </div>
        </section>
      </div>
    );
  };
  
  export default AboutUs;
  