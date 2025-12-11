import metairFlowIconWhite from '/icons/metairflow-icon_white.png'
import instagramIcon from '/icons/instagram.png'
import youtubeIcon from '/icons/youtube.png'
import xIcon from '/icons/x.png'
import facebookIcon from '/icons/facebook.png'
import tiktokIcon from '/icons/tiktok.png'


export default function Footer() {
    return (
        <footer className="w-full bg-[#1A0F07] text-white py-12 px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img 
                            src={metairFlowIconWhite} 
                            alt="MetairFlow Logo" 
                            className="w-14 h-12"
                        />
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed w-60">
                        The trusted platform for finding your perfect home, 
                        whether you're buying, renting, or selling.
                    </p>
                    <div className="flex gap-4 mt-5">
                        <img src={instagramIcon} className="w-6 h-6 cursor-pointer" />
                        <img src={youtubeIcon} className="w-6 h-6 cursor-pointer" />
                        <img src={facebookIcon} className="w-6 h-6 cursor-pointer" />
                        <img src={tiktokIcon} className="w-6 h-6 cursor-pointer" />
                        <img src={xIcon} className="w-6 h-6 cursor-pointer" />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="hover:text-white cursor-pointer">Property</li>
                        <li className="hover:text-white cursor-pointer">Rent</li>
                        <li className="hover:text-white cursor-pointer">Talk to an expert</li>
                        <li className="hover:text-white cursor-pointer">Blog</li>
                        <li className="hover:text-white cursor-pointer">About us</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-4">Resources</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="hover:text-white cursor-pointer">Help center</li>
                        <li className="hover:text-white cursor-pointer">Guides & Articles</li>
                        <li className="hover:text-white cursor-pointer">Real Estate News</li>
                        <li className="hover:text-white cursor-pointer">Market Trends</li>
                        <li className="hover:text-white cursor-pointer">Mortgage Calculator</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
                    <p className="text-gray-300 text-sm mb-4 w-60">
                        Subscribe to our newsletter for the latest properties 
                        and real estate tips.
                    </p>

                    <div className="flex rounded-lg gap-2 w-full">
                        <input 
                            type="email" 
                            placeholder="Enter Email Address"
                            className="px-3 py-2 bg-white rounded-lg text-black text-sm grow outline-none"
                        />
                        <button className="bg-main text-white px-4 py-2 text-sm rounded-lg">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
