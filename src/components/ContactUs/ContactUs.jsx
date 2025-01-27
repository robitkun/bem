import './ContactUs.css';
const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="John Doe" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="johndoe@gmail.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="" rows="5" required></textarea>
        </div>
        <button className="send">Kirim</button>
      </form>
    </div>
  );
};

export default ContactUs;
