const { Router } = require('express');
const jwt = require('jsonwebtoken');

const router = Router();

router.post('/', (req, res) => {
    // Mock user
    const user = { 
      username: 'token123',
      email: 'token@gmail.com'
    }
    //token yang diperoleh akan expired setelah 2 menit kemudian
    jwt.sign({user}, 'secretkey',{ expiresIn: '120s' }, (err, token) => {
      res.json({
        token
      });
    });
  });
module.exports = router;