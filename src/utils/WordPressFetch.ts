import type { Cursos } from "@/interface/Cursos";

interface wpQuery{
    query: string;
    variable?: object;
}


export const wordPressFecth = async( { query, variable} : wpQuery):Promise<Cursos['data']>  => {

    const response = await fetch(`${import.meta.env.PUBLIC_WPGRAPHQL_URL}`, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ query, variable }),
    })

    if(!response.ok){
        throw new Error(`Error en la solicitud: ${response.statusText}`);
        
    }

    const {data} = await response.json() as Cursos;
    return data;
}



