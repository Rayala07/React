const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-left">
        <i class="ri-secure-payment-fill nav-logo"></i>
        <p>BoomFi</p>
      </div>
      <div className="nav-center">
        <p>USD Bloom</p>
        <p>Business</p>
        <p>Treasury</p>
        <p>Developers</p>
        <p>Join Us</p>
      </div>
      <div className="nav-right">
        <button>Launch BETA</button>
      </div>
    </div>
  );
};

export default Navbar;
