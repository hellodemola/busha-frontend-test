import React from "react"

export interface IButton {
    children: React.ReactChild,
    handleOnClick?: () => void,
    isDisable?: boolean,
    isLoading?: boolean,
}