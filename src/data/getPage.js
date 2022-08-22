import { useState, useEffect } from "react";

async function getPage(id, setIsLoadingFn, setPageDataFn) {
    setIsLoadingFn(true);

    const response = await fetch(`/page/${id}`, {
        method: "get",
    });

    if (!response.ok) {
        // todo: error states
        setIsLoadingFn(false);
        return;
    }

    const { data } = await response.json();

    setIsLoadingFn(false);
    setPageDataFn(data);
}

export function useGetPage(pageId) {
    const [isLoading, setIsLoading] = useState(null);
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        getPage(pageId, setIsLoading, setPageData).catch(console.error);

        return () => {
            // todo: cleanup?
        };
    }, [pageId, setIsLoading, setPageData]);

    return {
        isLoading,
        ...pageData,
    };
}
