import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import Image from "next/image";

export const Footer: React.FC = () => {
    return (
        <div className="w-full h-[345px] bg-[#141416] flex flex-col items-center justify-center px-24 py-18 ">
            <div className="w-full flex justify-between">
                <h2 className="text-3xl text-white font-semibold mr-52 flex items-center gap-3 font-[Poppins]">
                    <Image
                        src="/Image/WaveLogoWhite.png"
                        alt="NFT Card"
                        width={260}
                        height={260}
                        className="relative z-10 w-[65px] h-[65px] object-cover"
                    />
                    DiveSea</h2>
                <ul className="flex items-center gap-18 text-lg text-[#B9B9B9]">
                    <li className="cursor-pointer hover:text-white transition-colors duration-300">Privacy Policy</li>
                    <li className="cursor-pointer hover:text-white transition-colors duration-300">Terms of Service</li>
                    <li className="cursor-pointer hover:text-white transition-colors duration-300">About us</li>
                    <li className="cursor-pointer hover:text-white transition-colors duration-300">Contact</li>
                </ul>
            </div>
            <div className="w-full h-[1px] opacity-25 bg-[#818181] mt-10 mb-13"></div>
            <div className="w-full flex justify-between">
                <p className="text-base font-medium text-[#999999]">© 2023 EATLY All Rights Reserved</p>
                <ul className="flex gap-12 text-[#B9B9B9]">
                    <li className="cursor-pointer hover:text-white transition-colors duration-300 "><FaInstagram className="w-5.5 h-5.5"/></li>
                    <li className="cursor-pointer hover:text-white transition-colors duration-300"><FaLinkedinIn className="w-5.5 h-5.5"/></li>
                    <li className="cursor-pointer hover:text-white transition-colors duration-300"><FaFacebookF className="w-5.5 h-5.5"/></li>
                    <li className="cursor-pointer hover:text-white transition-colors duration-300"><FaTwitter className="w-5.5 h-5.5"/></li>
                </ul>
            </div>
        </div>
    );
}