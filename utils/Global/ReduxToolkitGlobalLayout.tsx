'use client'
import { store } from "@/Redux-Toolkit/store";
import React from 'react'
import { Provider } from "react-redux";
const ReduxToolkitGlobalLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ReduxToolkitGlobalLayout
