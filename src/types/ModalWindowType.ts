import React from "react";

export interface IModalWindowEdit<T>{
    open: boolean,
    setOpen: React.ComponentState,
    entity: T
}

export interface IModalWindowCreate<>{
    open: boolean,
    setOpen: React.ComponentState,
}