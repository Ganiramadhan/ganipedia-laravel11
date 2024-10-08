export default function Footer() {
    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[date.getDay()];

    return (
        <footer className="relative bg-white border-t border-gray-200 py-6">
            <div className="container mx-auto text-center">
                <h1 className="text-xl font-semibold text-gray-700">GaniPedia</h1>
                <p className="text-sm mt-2 text-gray-500">© 2024 Gani Pedia. All rights reserved.</p>
                <div className="mt-4 space-x-4">
                    <a href="#" className="text-gray-500 hover:text-gray-700">Privacy Policy</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">Terms of Service</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">Contact Us</a>
                </div>
            </div>

            {/* Tampilkan hari di pojok kanan atas footer */}
            <div className="absolute top-0 right-0 mt-2 mr-4 text-gray-500 text-sm">
                Happy {dayName}!
            </div>
        </footer>
    );
}
