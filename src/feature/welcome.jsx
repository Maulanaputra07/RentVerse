import { useState } from "react";
import Card from "../components/ui/card";
import SearchBar from "../components/ui/serachBar";
import propertyData from "../data/propertyData";

export default function WelcomePage(){
    const [filteredProperties, setFilteredProperties] = useState(propertyData);

    const handleSearch = (query) => {
        const filtered = propertyData.filter(item =>
            item.location.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProperties(filtered);
    };

    return(
        <div className="w-full">
            <div className="title-hero flex items-center justify-center w-full md:h-96 h-52 text-4xl">
                <div className="font-satoshi text-white md:w-1/2 w-2/3 text-center">
                    <h1 className="font-display md:text-4xl text-2xl md:px-24">Build Your Dream Home Live the Lifestyle You Crave.</h1>
                    <p className="text-sm md:font-semibold pt-5">Realize your dream home. We craft spaces that are functional, inspiring joy, tranquility, and connection.</p>
                </div>
            </div>
            <div className="w-full flex items-center justify-center relative md:-top-10 -top-5">
                <SearchBar onSearch={handleSearch}/>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center px-5">
                <h1 className="text-main text-center font-display py-5 md:text-4xl text-2xl">Trusted by Hundreds, Recognized for Excellence</h1>
                <div className="stats-info flex md:flex-row flex-col gap-5 py-5">
                    <div className="md:max-w-max">
                        <p className="text-main font-display md:text-4xl text-2xl">750+</p>
                        <p className="md:w-full w-2/3 md:text-lg text-sm">Successfully built over 750 unique homes tailored to each client's vision.</p>
                    </div>
                    <div className="md:max-w-max">
                        <p className="text-main font-display md:text-4xl text-2xl">200+</p>
                        <p className="md:w-full w-2/3 md:text-lg text-sm">Expertise in building functional and inspiring spaces, from offices to retail.</p>
                    </div>
                    <div className="md:max-w-max">
                        <p className="text-main font-display md:text-4xl text-2xl">15+</p>
                        <p className="md:w-full w-2/3 md:text-lg text-sm">A decade of dedicated expertise ensuring timeless quality.</p>
                    </div>
                    <div className="md:max-w-max">
                        <p className="text-main font-display md:text-4xl text-2xl">50+</p>
                        <p className="md:w-full w-2/3 md:text-lg text-sm">Honored with numerous industry awards for our innovative .</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center px-5">
                <h1 className="text-main font-display py-5 md:text-4xl text-2xl text-center">Find the property that defines your lifestyle</h1>
                <div className="
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    lg:grid-cols-3
                    gap-6 
                    py-8
                ">
                    {filteredProperties.map(item => (
                        <div
                            key={item.id}
                            className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <Card {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}