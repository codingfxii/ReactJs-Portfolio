import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-orange-100 pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-black">
            JEFFERSON AGUILAR
          </p>
          <p className="font-semibold text-md text-black">
            ©2023 AGUILAR. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;