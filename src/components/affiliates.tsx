
export default function Affiliates() {
    return (
        <div className="d-flex flex-wrap flex-column flex-md-row justify-content-between border-card">
            {sources.map((val, index) => {
                return (
                    <div key={index} className="col p-3 text-center my-auto">
                        <img
                            src={val[0]}
                            alt={val[1]}
                            style={{
                                width: 150
                            }} />
                    </div>
                )
            })}
        </div>
    )
}

const sources = [
    ["../../public/audi-logo.png", "Audi USA"],
    ["../../public/vw-logo.png", "Volkswagen USA"],
    ["../../public/tz-logo.webp", "Tunezilla"],
    ["../../public/vcds-logo.png", "VCDS"],
    ["../../public/liqui-moly-logo.png", "LiquiMoly"],
    ["../../public/eurodyne-logo.png", "Eurodyne"],
    ["../../public/bmw-logo.png", "BMW USA"],
]