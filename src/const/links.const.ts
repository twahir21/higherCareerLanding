const isProduction = true;

export const links = {
    server: isProduction ? 
            "https://api.highercareer.academy" :
            "http://localhost:8080",
    client: isProduction ?
            "https://www.highercareer.academy" :
            "http://localhost:5173"
}