import Logo from "../../public/logo.png";

const Header = () => {
  return (
    <div
      className={`fixed top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-80 bg-base-100 gap-6 transition-transform duration-300 shadow`}
    >
      <div className="flex flex-row items-center justify-center w-full h-14">
        <img
          src={Logo.src}
          alt="CodeNoobs logo"
          className="h-12 w-12 rounded"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-56 gap-4">
        <h1 className="text-5xl text-center text-primary tracking-widest sm:text-7xl">
          CodeNoobs Example
        </h1>
        <h2 className="text-2xl text-slate-600 tracking-wider sm:text-3xl">
          Make a header that appears when user scrolls up
        </h2>
      </div>
    </div>
  );
};

export default Header;
