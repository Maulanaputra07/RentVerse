import searchIcon from '/icons/search-normal.png'

export default function SearchBar() {
    return (
        <div className="md:px-2 md:py-3 py-2 flex items-center bg-white min-w-1/2 justify-center gap-5 rounded-xl shadow-xl">
            <div className="relative w-full">
                <img 
                    src={searchIcon} 
                    className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
                />
                <input 
                    type="text"
                    placeholder="Search by location"
                    className="w-full border border-gray-300 rounded-xl py-2 pl-10 pr-4 font-satoshi focus:outline-main"
                />
            </div>

            <button className="bg-main text-white px-4 py-2 rounded-xl font-satoshi font-semibold">
                Search
            </button>
        </div>
    )
}
