// src/routes/api/[...slugs]/+server.ts
import { Elysia, t } from 'elysia'
import  {getGhRepos}  from '@/handler/fetch'

const app = new Elysia({prefix:"/api"})
  .get(
      '/ghRepo',
      async () => {
        return await getGhRepos()
      },
      {
        response: t.Array(
          t.Object({
            name: t.String(),
            description: t.String(),
            link: t.String()
          })
        )
      }
    )

export const GET = ({ request }: { request: Request }) =>
  app.handle(request)
