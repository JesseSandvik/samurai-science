const Footer = ({appData}) => {
  return (
    <footer>
      <div id="copyright" className="container">
        <p>
          &copy; {appData.copyright} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
