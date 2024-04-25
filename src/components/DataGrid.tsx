import React, { useState } from 'react';

interface Rocket {
    id: number;
    active: boolean;
    rocket_name: string;
    rocket_type: string;
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: string;
    country: string;
    company: string;
    height: {
        meters: number;
        feet: number;
    };
    diameter: {
        meters: number;
        feet: number;
    };
    mass: {
        kg: number;
        lb: number;
    };
    payload_weights: {
        id: string;
        name: string;
        kg: number;
        lb: number;
    }[];
    first_stage: {
        reusable: boolean;
        engines: number;
        fuel_amount_tons: number;
        burn_time_sec: number;
        thrust_sea_level: {
            kN: number;
            lbf: number;
        };
        thrust_vacuum: {
            kN: number;
            lbf: number;
        };
    };
    second_stage: {
        engines: number;
        fuel_amount_tons: number;
        burn_time_sec: number;
        thrust: {
            kN: number;
            lbf: number;
        };
        payloads: {
            option_1: string;
            option_2?: string;
            composite_fairing: {
                height: {
                    meters: number;
                    feet: number;
                };
                diameter: {
                    meters: number;
                    feet: number;
                };
            };
        };
    };
    engines: {
        number: number;
        type: string;
        version: string;
        layout: string;
        engine_loss_max: number;
        propellant_1: string;
        propellant_2: string;
        thrust_sea_level: {
            kN: number;
            lbf: number;
        };
        thrust_vacuum: {
            kN: number;
            lbf: number;
        };
        thrust_to_weight: number;
    };
    landing_legs: {
        number: number;
        material: string | null;
    };
    wikipedia: string;
    description: string;
}

// eslint-disable-next-line
interface DataGridProps {
    rockets: Rocket[];
}


const DataGrid: React.FC<DataGridProps> = ({ rockets }) => {
    // eslint-disable-next-line
    // const [rockets, setRockets] = useState<Rocket[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    // eslint-disable-next-line
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // eslint-disable-next-line
    const currentItems = rockets.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">Rocket Data</h1>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Cost per Launch</th>
                        <th>Success Rate (%)</th>
                        <th>First Flight</th>
                        <th>Country</th>
                        <th>Company</th>
                        <th>Height (meters)</th>
                        <th>Diameter (meters)</th>
                        <th>Mass (kg)</th>
                        <th>Payload Weights</th>
                        <th>First Stage</th>
                        <th>Second Stage</th>
                        <th>Engines</th>
                        <th>Landing Legs</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {rockets.map((rocket, index) => (
                        <tr key={index}>
                            <td>{rocket.rocket_name}</td>
                            <td>{rocket.rocket_type}</td>
                            <td>{rocket.active ? 'Active' : 'Inactive'}</td>
                            <td>{rocket.cost_per_launch}</td>
                            <td>{rocket.success_rate_pct}</td>
                            <td>{rocket.first_flight}</td>
                            <td>{rocket.country}</td>
                            <td>{rocket.company}</td>
                            <td>{rocket.height.meters}</td>
                            <td>{rocket.diameter.meters}</td>
                            <td>{rocket.mass.kg}</td>
                            <td>
                                <ul>
                                    {rocket.payload_weights.map((payload, index) => (
                                        <li key={index}>
                                            {payload.name}: {payload.kg} kg ({payload.lb} lb)
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                Reusable: {rocket.first_stage.reusable ? 'Yes' : 'No'} <br />
                                Engines: {rocket.first_stage.engines} <br />
                                Fuel Amount (tons): {rocket.first_stage.fuel_amount_tons} <br />
                                Burn Time (sec): {rocket.first_stage.burn_time_sec} <br />
                                Thrust Sea Level: {rocket.first_stage.thrust_sea_level.kN} kN ({rocket.first_stage.thrust_sea_level.lbf} lbf) <br />
                                Thrust Vacuum: {rocket.first_stage.thrust_vacuum.kN} kN ({rocket.first_stage.thrust_vacuum.lbf} lbf) <br />
                            </td>
                            <td>
                                Engines: {rocket.second_stage.engines} <br />
                                Fuel Amount (tons): {rocket.second_stage.fuel_amount_tons} <br />
                                Burn Time (sec): {rocket.second_stage.burn_time_sec} <br />
                                Thrust: {rocket.second_stage.thrust.kN} kN ({rocket.second_stage.thrust.lbf} lbf) <br />
                                Payload Option 1: {rocket.second_stage.payloads.option_1} <br />
                                {rocket.second_stage.payloads.option_2 && (
                                    <>Payload Option 2: {rocket.second_stage.payloads.option_2} <br /></>
                                )}
                                {/* Composite Fairing Height: {rocket.second_stage.payloads.composite_fairing.height.meters} m ({rocket.second_stage.payloads.composite_fairing.feet} ft) <br /> */}
                                {/* Composite Fairing Diameter: {rocket.second_stage.payloads.composite_fairing.diameter.meters} m ({rocket.second_stage.payloads.composite_fairing.feet} ft) <br /> */}
                            </td>
                            <td>
                                Number: {rocket.engines.number} <br />
                                Type: {rocket.engines.type} <br />
                                Version: {rocket.engines.version} <br />
                                Layout: {rocket.engines.layout} <br />
                                Engine Loss Max: {rocket.engines.engine_loss_max} <br />
                                Propellant 1: {rocket.engines.propellant_1} <br />
                                Propellant 2: {rocket.engines.propellant_2} <br />
                                Thrust Sea Level: {rocket.engines.thrust_sea_level.kN} kN ({rocket.engines.thrust_sea_level.lbf} lbf) <br />
                                Thrust Vacuum: {rocket.engines.thrust_vacuum.kN} kN ({rocket.engines.thrust_vacuum.lbf} lbf) <br />
                                Thrust to Weight: {rocket.engines.thrust_to_weight} <br />
                            </td>
                            <td>
                                Number: {rocket.landing_legs.number} <br />
                                Material: {rocket.landing_legs.material || 'N/A'} <br />
                            </td>
                            <td>
                                {rocket.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-8 flex justify-between">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                >
                    Previous Page
                </button>
                <button
                    onClick={nextPage}
                    disabled={indexOfLastItem >= rockets.length}
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                >
                    Next Page
                </button>
            </div>
        </div>
    );
}

export default DataGrid;