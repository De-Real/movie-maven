import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
	return <div style={{ padding: "0 50px" }}>{children}</div>;
};

export default Container;
