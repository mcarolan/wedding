import React from "react"
export interface LoadingSpinnerProps {
    isLoading: boolean
}

export function LoadingSpinner(props: LoadingSpinnerProps) {
    if (props.isLoading) {
        return <>
            <div id="dim"></div>
            <div className="loader"></div>
        </>
    }
    else {
        return <></>;
    }
}