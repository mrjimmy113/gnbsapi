const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const app = express();
const productRouter = require('./routerModules/productRouter');
const typeRouter = require('./routerModules/typeRouter');
const colorRouter = require('./routerModules/colorRouter');
app.use(cors());
app.use(fileUpload());
app.use(express.json())
app.listen(process.env.PORT || 3000);
app.use('/type',typeRouter);
app.use('/product', productRouter);
app.use('/color',colorRouter);

