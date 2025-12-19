// src/routes/api/[...slugs]/+server.ts
import { Elysia, t } from 'elysia';

const app = new Elysia({ prefix: '/api' })
    .get('/', () => 'hi')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })
    .get('/ghRepo', ({ body }) => body, {
        body: t.Object({
            name: t.String(),
            date: t.String(),
            link: t.String(),
            icoLink: t.String(),
        })
    })
    .get('/subRss', ({ body }) => body, {
        body: t.Object({
            name: t.String(),
            date: t.String(),
            link: t.String(),
        })
    })

type RequestHandler = (v: { request: Request }) => Response | Promise<Response>

export const fallback: RequestHandler = ({ request }) => app.handle(request)