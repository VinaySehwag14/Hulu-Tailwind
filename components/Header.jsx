import Image from "next/image";

const Header = () => {
  return (
    <header className="">
      <h1>This is header</h1>
      <Image
        className="object-contain"
        src="https://www.nicepng.com/png/full/242-2424140_hulu-png-logo-hulu-logo-white-png.png"
        width={200}
        height={100}
        alt="this is image"
      />
    </header>
  );
};

export default Header;
