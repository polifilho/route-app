import React from "react";
import { SubRoute } from '../types';

interface SubRouteProps {
  subRoutes: SubRoute[];
}

export const SubRoutes: React.FC<SubRouteProps> = ({ subRoutes }) => {
  const formattedDateTime = (date: string) => new Date(date).toLocaleTimeString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  })

  return (
    <>
      <h5 style={{ marginTop: 30, marginBottom: 0 }}>Sub-routes:</h5>
      <ul>
        {subRoutes.map((subRoute, index) => (
          <li key={`${subRoute.rideId}-${index}`}>
            <strong>{`${subRoute.route}: `}</strong>{`${subRoute.fullRouteName}`}
            <dl>
              <dt><u>Departure:</u></dt>
              <dd className="time-item">
                {`- ${subRoute.stopFromCityName} ➝ ${formattedDateTime(subRoute.departure)}`}
              </dd>

              <dt><u>Arrival:</u></dt>
              <dd className="time-item">
                {`- ${subRoute.stopToCityName} ➝ ${formattedDateTime(subRoute.arrival)}`}
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SubRoutes;
