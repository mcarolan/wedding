import React from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

export interface ErrorsProps<T extends FieldValues> {
    errors: FieldErrors<T>
}

function errorMessages(errors: object): string[] {
    const results: string[] = [];
    for (const [_, value] of Object.entries(errors)) {
        if (value && value['message']) {
            results.push(value['message'] as string);
        }
        else if (Array.isArray(value)) {
            const arr = value as object[];
            for (const message of arr.flatMap((o) => errorMessages(o))) {
                results.push(message);
            }
        }
        else {
            for (const message of Object.entries(value).flatMap(([_, o]) => errorMessages(o as object))) {
                results.push(message);
            }
        }
    }
    return results;
}

function renderErrorList<T extends FieldValues>(errors: FieldErrors<T>) {
    console.log(errorMessages(errors));
    return <>
        <div className="errors">
            Sorry, we need a bit more information:
            <ul>
                {errorMessages(errors).map((error) =>
                    <li key={error}>{error}</li>)}
            </ul>
        </div>
    </>
}

export function Errors<T extends FieldValues>(props: ErrorsProps<T>) {
    const keys = Object.keys(props.errors);

    if (keys.length > 0) {
        return renderErrorList(props.errors);
    }
    else {
        return <></>;
    }
}