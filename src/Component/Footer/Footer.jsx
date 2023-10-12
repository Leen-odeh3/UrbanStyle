import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>Connect With Us</p>
      <div style={{marginBottom:"30px"}}>
      <a href="https://github.com/leen-3 " target="_blank" rel="noreferrer">
        <i className="fa fa-github fa-2x" aria-hidden="true"></i>
      </a>
      <a
        href=" https://www.instagram.com/leen.odeh12/?next=%2F"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
      </a>
      <a
        href=" https://www.linkedin.com/in/leen-odeh3/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
      </a>
      </div>
      <div style={{marginBottom:"30px"}}> 
      <h3>Email: leenodeh287@gmail.com</h3>
      <h3>Phone: 110041548, 9599999555</h3>
      </div>
      <span>UrbanStyle: Where Fashion Meets Comfort!</span>
    </div>
  );
};

export default Footer;
