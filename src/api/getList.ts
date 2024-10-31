export const getList = async() => {
    // console.log("리액트 쿼리의 리트라이")
    // throw new Error('error')
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0").then((res)=>res.json())
    
    return response
}