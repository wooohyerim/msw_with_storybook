import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {  FC, PropsWithChildren } from "react"



const Providers :FC<PropsWithChildren> = ({children}) => {
  return( 
  <QueryClientProvider client={new QueryClient()}>
    {children}
  </QueryClientProvider>)
}

export default Providers