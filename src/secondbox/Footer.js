import { FaFacebook,FaStackOverflow, FaQuora, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <p className="para"> Find me on social media.</p>
      
      <a className="links" href="https://www.quora.com/profile/Peter-Moses-Mohemos"><FaQuora/></a>
      <a className="links" href="https://stackoverflow.com/users/5482255/peter-moses"><FaStackOverflow/></a>
      <a className="links" href="https://web.facebook.com/mohemos?_rdc=1&_rdr"><FaFacebook/></a>
      <a className="links" href="https://twitter.com/mohemos"><FaTwitter/></a>
      <p className="para para2"> © Moses Hennuho Peter, 2018</p>
      
    </div>
  );
}

export default Footer;