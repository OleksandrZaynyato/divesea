export const Footer: React.FC = () => {
    return (
        <div className="w-full h-[345px] bg-[#141416] flex flex-col items-center justify-between px-24 py-20.5">
            <div className="w-full flex justify-between">
                <h2 className="text-2xl text-white font-semibold mr-52">DiveSea</h2>
                <ul className="flex gap-17 text-lg text-[#B9B9B9]">
                    <li className="cursor-pointer hover:text-white transition-colors duration-300">Privacy Policy</li>
                    <li className="cursor-pointer hover:text-white transition-colors duration-300">Terms of Service</li>
                    <li className="cursor-pointer hover:text-white transition-colors duration-300">Contact</li>
                    <li className="cursor-pointer hover:text-white transition-colors duration-300">About us</li>
                </ul>
            </div>
            <div className="w-full h-[1px] bg-[#818181]"></div>

        </div>
    );
}