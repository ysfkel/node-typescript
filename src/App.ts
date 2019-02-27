import  express from 'express';

const App = (): any=> {
   
       const app = express()

       const router = express.Router();

       router.get('/', (req: express.Request, res: express.Response) => {
              res.json({
                  message: 'hellow world'
              })
       })

       app.use('/', router)

       return app


}

export default App