import React from "react";

interface Props {
    name: number
}

const IndexPage = ({ name = "test" }: Props) => (
    <div>Hello world {name}</div>
);

export default IndexPage;
