import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header class="container-fluid bg-dark">
      <div class="container">
        <div class="row align-items-center">
          <div>
            <img class="img" src={logo} />
          </div>
          <div id="main-menu-mobile" class="justify-end">
            <span class="mdi mdi-menu color-white mdi-36px"></span>
          </div>
          <ul id="main-menu" class="display-flex justify-content color-white">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Bussines</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Princing</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
