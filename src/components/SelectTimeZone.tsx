import React from "react";

interface SelectTimeZoneProps {
  timezone: "UTC" | "CET";
  setTimezone: (e: any) => void;
}

const SelectTimeZone: React.FC<SelectTimeZoneProps> = ({ timezone, setTimezone }) => {
  return (
    <select id="timezone" value={timezone} onChange={(e) => setTimezone(e.target.value as "UTC" | "CET")}>
      <option value="UTC">Original time zone</option>
      <option value="CET">CET (Europa Central)</option>
    </select>
  );
};

export default SelectTimeZone;
