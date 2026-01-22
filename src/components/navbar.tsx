const Navbar = () => {
  return (
    <nav className="flex flex-col gap-3 bg-white p-6 text-neutral-900 border-b border-neutral-300 drop-shadow">
      <h1 className="flex flex-row gap-3 items-center justify-start text-center md:text-3xl text-2xl font-bold">
        <span>
          <img src="src/assets/react.svg" alt="react logo" className="w-6 h-6" />
        </span>
        Volunteer Event
      </h1>
      <p className="text-sm text-neutral-700 font-medium">
        Find meaningful volunteer opportunities and make a difference
      </p>
    </nav>
  );
};

export default Navbar;
