/**
 * Affiliates.tsx
 * This file serves as the Affiliates section of the app,
 * generating elements containing icons and links to the
 * shop's affiliates.
 * 
 * Author: Alexander Daigh
 * Date: 06-10-2025
 * Version: 1.0.0
 */

export default function Affiliates() {
    return (
        <div className="d-flex flex-wrap flex-column flex-md-row gap-4 gap-md-0 justify-content-between border-card">
            {sources.map((val, index) => {
                return (
                    <div key={index} className="col p-2 text-center my-auto">
                        <a href={val[2]} target="_blank" rel="noopener noreferrer">
                            <img
                                src={val[0]}
                                alt={val[1]}
                                style={{
                                    width: 180,
                                }} />
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

const sources = [
    ["/images/audi-logo.webp", "Audi USA", "https://www.audi.com"],
    ["/images/vw-logo.webp", "Volkswagen USA", "https://www.vw.com"],
    ["/images/tz-logo.webp", "Tunezilla", "https://www.tunezilla.com"],
    ["/images/vcds-logo.webp", "VCDS", "https://www.ross-tech.com"],
    ["/images/liqui-moly-logo.webp", "LiquiMoly", "https://www.liqui-moly.com"],
    ["/images/eurodyne-logo.webp", "Eurodyne", "https://www.eurodyne.ca"],
    ["/images/bmw-logo.webp", "BMW USA", "https://www.bmw.com"],
]