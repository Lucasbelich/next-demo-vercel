import { FC } from "react";

interface Props  {
  children: React.ReactNode
}

export const LightLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "5px",
        color: "gray",
        padding: "10px",
      }}
    >
      <h3>Light-Layout</h3>
      <div>{children}</div>
    </div>
  );
}
