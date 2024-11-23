import { children, useEffect } from "react";

export default function ClassicInput({
  infos,
  value,
  type,
  fonction,
  children,
}) {
  return (
    <div>
      <label htmlFor={infos} className="mb-2 block">
        {children}
      </label>
      <input
        type={type}
        id={infos}
        value={value}
        required
        className="border border-gray-300 rounded w-full p-2 mb-4"
        onChange={(e) => fonction(e.target.value)}
      />
    </div>
  );
}
