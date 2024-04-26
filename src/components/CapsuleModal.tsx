import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface Capsule {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string;
  missions: { name: string; flight: number }[];
  landings: number;
  type: string;
  details: string | null;
  reuse_count: number;
}

interface CapsuleModalProps {
  capsule: Capsule;
  onClose: () => void;
}

const CapsuleModal: React.FC<CapsuleModalProps> = ({ capsule, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 max-w-md w-full rounded shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{capsule.capsule_serial}</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <p className="text-gray-700 mb-2"><span className="font-semibold">Status:</span> {capsule.status}</p>
        <p className="text-gray-700 mb-2"><span className="font-semibold">Original Launch:</span> {capsule.original_launch}</p>
        <p className="text-gray-700 mb-2"><span className="font-semibold">Number of Landings:</span> {capsule.landings}</p>
        <p className="text-gray-700 mb-2"><span className="font-semibold">Type:</span> {capsule.type}</p>
        <p className="text-gray-700 mb-4"><span className="font-semibold">Reuse Count:</span> {capsule.reuse_count}</p>
        <div>
          <h3 className="text-lg font-semibold mb-2">Missions:</h3>
          {capsule.missions.length > 0 ? (
            <ul className="list-disc list-inside">
              {capsule.missions.map((mission, index) => (
                <li key={index}>{mission.name} (Flight {mission.flight})</li>
              ))}
            </ul>
          ) : (
            <p>No missions available</p>
          )}
        </div>
        <p className="text-gray-700 mt-4">{capsule.details || 'No details available'}</p>
      </div>
    </div>
  );
};

export default CapsuleModal;