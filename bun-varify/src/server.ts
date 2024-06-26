import { notFound, useGetAllUsers } from "./controller"

export const server = () => {
    const start = performance.now()

    const server = Bun.serve({
        port: 6060,
        fetch(req) {
            const url = new URL(req.url)

            if (url.pathname === "/") return useGetAllUsers()

            return notFound()
        },
    })

    console.log(`Listening on http://localhost:${server.port} ...`)

    const end = performance.now()

    console.log(end - start)
}
