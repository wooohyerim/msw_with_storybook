import { http, HttpResponse } from "msw"
import list from "./list.json"

export const getMockList = () => {
    return http.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",
        ()=>{
            return new HttpResponse(JSON.stringify(list), {
                status:200
            })
        }
    )
}