import { useQuery } from "@tanstack/react-query"
import { getList } from "./api/getList"
import "./App.css"

function App() {
  const {data,isError,isLoading} = useQuery({
    queryKey:['list'],
    queryFn:()=>getList(),
  })

  if(isLoading){
    return <div>Loading</div>
  }

  if(isError){
    return <div>Error</div>
  }

  return (
    <>
   {JSON.stringify(data)}
    </>
  )
}

export default App
