import footer from "../assets/footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-bground flex flex-col justify-center items-center mt-3">
      <div className="pt-4">
        <img src={footer} className="object-contain" />
      </div>
      <div className="w-full h-20 bg-neutral-900 text-neutral-50 flex flex-col justify-center items-center py-20">
        <p className="font-nanum text-2xl font-semibold pb-2">Artikel Boost</p>
        <p className="font-roboto font-semibold">Copyright © 2025</p>
        <p>
          <Link
            to="https://github.com/Raiyader/"
            target="_blank"
            className="underline font-bold"
          >
            Raiyader
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
