
export default function Affiliates() {
    return (
        <div className="container-fluid">
            <div className="row">
            {sources.map((val, index) => {
                return (
                    <div key={index} className="col text-center">
                        {val}
                    </div>
                )
            })}
            </div>
        </div>
    )
}

const sources = [
    "VW",
    "Audi",
    "Eurodyne",
    "Tunezilla",
    "LiquiMoly",
    "VCDS"
]