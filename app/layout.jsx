import '../assets/styles/global.css'

export const metadata = {
    title: 'PropertyPulse | Find The Perfect Rental Property',
    description: 'Find your dream rental property',
    keywords: 'rental property, property rental, find rental property, property listings, rental homes, apartments for rent, houses for rent, rental search, property search, real estate rentals',
}

const MainLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}

export default MainLayout


