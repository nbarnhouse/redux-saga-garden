const express = require('express');
const plantsRouter = require('./routes/plants.router');
const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(express.static('build'));

app.use('/api/plants', plantsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
