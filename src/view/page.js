import React from "react";
import { useParams } from "react-router";
import Location from "../component/location";
import LocationImage from "../component/locationImage";
import { useGetPage } from "../data/getPage";

/**
 * Converts API data into render-able array
 *
 * [1] Loading states
 *
 * [2] As far as I can parse, `lists` seems to contain many pages(?)
 *     but only `id: 0` is rendered(???)
 *
 * [3] Match API response's `type` to a known component
 *
 * [4] Abstract api `key, values` allowing friendlier component prop naming.
 *     Said differently, doing so allows api design to not dictate individual
 *     component interfaces.
 */
export default function Page() {
    const { id: pageId } = useParams();
    const { isLoading, lists, components } = useGetPage(pageId);

    const componentTypeMap = {
        image: LocationImage,
        weather: Location,
    };

    const componentOptionsMap = {
        image: {
            src: "src",
            alt: "alt",
        },
        weather: {
            lon: "longitude",
            lat: "latitude",
        },
    };

    if (isLoading || typeof lists !== "object") {
        return null; // [1]
    }

    const pageList = lists.find((list) => list.id === 0); // [2]

    return pageList.components.map((componentId) => {
        const componentData = components.find((component) => component.id === componentId);

        const C = componentTypeMap[componentData.type]; // [3]

        if (!C) {
            // todo: handle unknown type
            return null;
        }

        const optionsMap = componentOptionsMap[componentData.type]; // [4]
        const props = Object.entries(componentData.options).reduce((res, [key, val]) => {
            res[optionsMap[key]] = val;
            return res;
        }, {});

        return <C key={componentId} {...props} />;
    });
}
