
const ContactUs = () => {
  return (
    <div className="contact-us" id="contact">
      <h3>Get In Touch</h3>
      <div className="contact-us-content">
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-phone-alt"></i>
              <span>011 412 1234, 076 212 1234</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>abccinema@mail.com</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>No. 12/3, street Road, City</span>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <form className="contact-form-inputs" method="POST" action="emailSend">
            <section>
              <input type="text" placeholder="First Name" name="fname" />
              <input type="text" placeholder="Last Name" name="lname" />
            </section>
            <input type="email" placeholder="Email" name="email" />
            <br />
            <textarea
              name="message"
              id="message"
              rows="12"
              cols="85"
              placeholder="Message"
            ></textarea>
            <br />
            <input type="submit" value="Send Feedback" id="msg-submit-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
