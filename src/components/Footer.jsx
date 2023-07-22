import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut
          iure ipsam ab sint dolor incidunt ad laborum reprehenderit eum! Totam,
          sapiente aliquid? At reprehenderit possimus tempore dolor rerum nisi.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} className="hover:drop-shadow-green transition-all cursor-pointer" />
          <FaDribbbleSquare size={30} className="hover:drop-shadow-green transition-all cursor-pointer" />
          <FaGithubSquare size={30} className="hover:drop-shadow-green transition-all cursor-pointer" />
          <FaInstagramSquare size={30} className="hover:drop-shadow-green transition-all cursor-pointer" />
          <FaTwitterSquare size={30} className="hover:drop-shadow-green transition-all cursor-pointer" />
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] transition-colors">Analytics</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] transition-colors">Marketing</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] transition-colors">Commerce</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] transition-colors">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] transition-colors">Pricing</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] transition-colors">Documentation</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] transition-colors">Guides</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] transition-colors">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] transition-colors">About</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] transition-colors">Blog</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] transition-colors">Jobs</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] transition-colors">Press</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] transition-colors">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] transition-colors">Claim</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] transition-colors">Policy</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] transition-colors">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
