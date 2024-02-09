import { ReactNode } from "react";

// export type TPath = {
//     key: string,
//     label: string,
//     path?: string,
//     element?: ReactNode,
//     children?: TPath[]
// }

export type TSideBar = {
    key: string,
    label: ReactNode,
    children?: TSideBar[],

}
export type TRoute = {
    path: string,
    element: ReactNode,
}


export type TPath = {
    name: string,
    path?: string,
    element?: ReactNode,
    children?: TPath[]
}