import { rest } from 'msw'
import { api } from '../api'
export const handlers = [
    // Handles a POST /login request
    rest.post(api+'/login', async (req, res, ctx) => {
        // Persist user's authentication in the session
        sessionStorage.setItem('is-authenticated', 'true')

        const { username } = await req.json()
    
        return res(
          // Respond with a 200 status code
          ctx.status(200),
          ctx.json({
            id: '2',
            username:"kminchelle"
          }),
        )
      }),
  
  ]