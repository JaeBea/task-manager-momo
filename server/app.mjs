import express, {json, urlencoded} from 'express';

const app = express();
const port = process.env.PORT || 3100;
const frontend = 'http://localhost:3000';

app.use(urlencoded({extended: true}));

app.use(json());
app.use(json({type: 'application/vnd.api+json'}));


app.get('/', (req, res)=>{
  res.send('It works!');
});

app.post('/api/user', (req, res)=>{
  const mockUser = {
    data: {
      type: user,
      id: '32c20ad1-8ade-4f69-b5b6-1bab2cded1dd',
      attributes: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username
      }
    }
  };
  res.json(mockUser);
});

app.post('/api/auth/login', (req, res)=>{
  if (req.body.username && req.body.password) {
    res.redirect(`${frontend}/dashboard`);
  } else {
    const errorMessage = {
      errors: [
        {
          status: '401',
          title: 'Incorrect login',
          detail: 'The username or password provided is incorrect.'
        }
      ]
    };
    res.status(401).json(errorMessage);
  }
});

app.listen(port, ()=>{
  console.log('Running on port ' + port);
});
