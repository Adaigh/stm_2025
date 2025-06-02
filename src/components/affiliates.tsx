
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
    ["audi-logo.png", "Audi USA", "https://www.audi.com"],
    ["vw-logo.png", "Volkswagen USA", "https://www.vw.com"],
    ["tz-logo.webp", "Tunezilla", "https://www.tunezilla.com"],
    ["vcds-logo.png", "VCDS", "https://www.ross-tech.com"],
    ["liqui-moly-logo.png", "LiquiMoly", "https://www.liqui-moly.com"],
    ["eurodyne-logo.png", "Eurodyne", "https://www.eurodyne.ca"],
    ["bmw-logo.png", "BMW USA", "https://www.bmw.com"],
]