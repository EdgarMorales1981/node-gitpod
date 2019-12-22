const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://edgar:edgar123@cluster0-zeaxr.mongodb.net/gitpod?retryWrites=true&w=majority',
{useNewUrlParser: true,
useUnifiedTopology: true    

})
.then(() => console.log('DB is connected '))
.catch(e => console.log(e));

