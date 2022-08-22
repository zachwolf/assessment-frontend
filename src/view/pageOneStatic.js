import React from "react";
import Image from "../ui/image/image";
import Location from "../component/location";

export default function PageOneStatic() {
    return (
        <div>
            <Image src="/img/shoes.png" alt="Phone displaying athletic shoe app" />
            <Location longitude="40.748607102729295" latitude="-73.98563758004718" />
        </div>
    );
}
