export default function ProfileDetail() {
    return (
        <div className="text-[#1b1b1b] text-sm">
          <div>MY DETAILS</div>
            <div className="mt-6">
                <div className="text-gray-500">Name</div>
                <div className="leading-6">I'm WANGYE</div>
            </div>
            <div className="mt-6">
                <div className="text-gray-500">E-mail</div>
                <div className="leading-6">wye2455@gmail.com</div>
            </div>
            <div className="mt-6">
                <div className="text-gray-500">Mobile phone number</div>
                <div className="leading-6">I'm WANGYE</div>
            </div>
            <div className="mt-6">
                <div className="text-gray-500">Newsletter</div>
                <div className="leading-4 pt-1">Yes, you're subscribed and will be the first to know about our newest arrivals, special offers and store events near you.</div>
            </div>
            <button className="w-10 py-4 bg-black text-white w-[70%] mt-8">EDIT</button>
            <a href="http://localhost:3000/profile" className="block mt-6 underline">change password</a>
        </div>  
    )
}