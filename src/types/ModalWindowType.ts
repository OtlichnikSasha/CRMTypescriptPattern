import React from "react";

export interface EditModalWindowType<T>{
    open: boolean,
    setOpen: React.ComponentState,
    entity: T
}

export interface AddModalWindowType<>{
    open: boolean,
    setOpen: React.ComponentState,
}