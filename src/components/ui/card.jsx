export default function Card({ status, title, location, price, priceUnit, bedrooms, bathrooms, sqft, image }) {
    return (
        <div className="w-80 h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
            
            {/* Image + status */}
            <div className="relative w-full h-48">
                <img 
                    src={image} 
                    alt="Property"
                    className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-main text-white text-sm px-3 py-1 rounded-md shadow">
                    {status}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-1 p-5 text-left">

                {/* Title and location */}
                <div>
                    <h2 className="font-satoshi font-semibold text-lg">{title}</h2>
                    <p className="text-gray-500 text-sm mt-1 truncate">{location}</p>
                </div>

                {/* Price */}
                <p className="text-main font-semibold text-lg mt-3">
                    RM{price}
                    <span className="text-sm font-normal">/{priceUnit || 'mo'}</span>
                </p>

                {/* Divider line */}
                <div className="border-t border-gray-200 mt-2 pt-2"></div>

                {/* Bedrooms, bathrooms, sqft */}
                <div className="flex items-center justify-between mt-2">
                    <div className="flex flex-col items-center text-sm">
                        <div className="flex items-center gap-1">
                            <img src="/icons/bed.png" className="w-5 h-5" />
                            <span>{bedrooms}</span>
                        </div>
                        <span className="text-gray-500 text-xs">Bedrooms</span>
                    </div>

                    <div className="flex flex-col items-center text-sm">
                        <div className="flex items-center gap-1">
                            <img src="/icons/bathup.png" className="w-5 h-5" />
                            <span>{bathrooms}</span>
                        </div>
                        <span className="text-gray-500 text-xs">Bathrooms</span>
                    </div>

                    <div className="flex flex-col items-center text-sm">
                        <div className="flex items-center gap-1">
                            <img src="/icons/frame.png" className="w-5 h-5" />
                            <span>{sqft} Sqft</span>
                        </div>
                        <span className="text-gray-500 text-xs">Total Area</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
