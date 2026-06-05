import {
  Sparkles,
  User,
  UserCog,
  UserPlus,
  UserCheck,
  SquareUser,
  UserX,
} from "lucide-react";

import { Link } from "react-router-dom";
import teamMembers from "../data/json/team.json";
import ReactCountryFlag from "react-country-flag";

const iconMap = {
  User,
  Sparkles,
  UserCog,
  UserPlus,
  UserCheck,
  SquareUser,
  UserX,
};

const statusConfig = {
  verified: {
    icon: UserCheck,
    color: "text-green-400",
    label: "Verified",
  },
  nA: {
    icon: UserX,
    color: "text-red-400",
    label: "Not Available",
  },
  pending: {
    icon: UserCog,
    color: "text-yellow-400",
    label: "trainee/employee",
  },
};
const memberCount = teamMembers.length;  

export default function Team() {
  return (
    <>
      <div className="flex flex-col gap-10 text-center text-white font-bold mt-10 items-center">
        <Sparkles size={64} />
        <p className="text-4xl font-bold">Our Team</p>
        <p className="text-lg">{memberCount} registered members</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-1 gap-10 my-10">
        {teamMembers.map((person) => {
          const Icon = iconMap[person.icon] || User;

          const Status =
            statusConfig[person.status]?.icon || UserCog;

          const statusColor =
            statusConfig[person.status]?.color || "text-gray-400";
          
          const StatusText =
            statusConfig[person.status]?.label || "Account is not fully set up";
          
          return (
            <div
              key={person.id}
              className="relative gap-10 w-200 mx-5 flex flex-col rounded-xl p-6 border-y border-purple-650 bg-[#001111] transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
            >  
                 {/* Country Badge */}
             {person.country && (
  <div className="absolute top-3 right-3">
    <ReactCountryFlag
      countryCode={person.country}
      svg
      style={{
        width: "28px",
        height: "20px",
        borderRadius: "4px",
      }}
      title={person.country}
    />
  </div>
)}


              {/* Avatar */}
              <div className="flex justify-center">
                {person.avatar ? (
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="w-24 h-24 rounded-full object-cover border border-[yellow]"
                  />
                ) : (
                  <div className="w-24 h-24 flex items-center justify-center border border-[yellow] rounded-full text-[yellow]">
                    <Icon size={40} />
                  </div>
                )}
              </div>

              {/* Name */}
              <div className="text-center text-[yellow]">
                <p className="text-xl font-bold">{person.name}</p>
                {person.role && (
                  <p className="text-sm opacity-70">{person.role}</p>
                )}
              </div>

              {/* Description */}
              {person.description && (
                <p className="text-[yellow] text-sm text-center">
                  {person.description}
                </p>
              )}

              {/* Contact (optional safe render) */}
              {(person.phone || person.email) && (
                <div className="p-4 border border-[yellow] rounded-lg">
                  <ul className="list-none space-y-2">
                    {person.phone && (
                      <li>
                        <Link
                          to={`tel:${person.phone}`}
                          className="font-bold text-[yellow] hover:text-white"
                        >
                          Tel: {person.phone}
                        </Link>
                      </li>
                    )}

                    {person.email && (
                      <li>
                        <Link
                          to={`mailto:${person.email}`}
                          className="font-bold text-[yellow] hover:text-white"
                        >
                          Email: {person.email}
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Status */}
              <div className="flex justify-center items-center gap-2">
                <Status className={`w-5 h-5 ${statusColor}`} />
                <span className={`text-sm ${statusColor}`}>
                  {StatusText}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
