import React from "react";
import Image from "../ui/image/image";
import Location from "../component/location";

console.log("Image", Image);
console.log("?");

export default function PageOneStatic() {
    return (
        <div>
            <Image src="/img/shoes.png" alt="Phone displaying athletic shoe app" />
            <Location />
        </div>
    );
}
