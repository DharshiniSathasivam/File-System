import express from 'express'
import IndexRouter from './src/Router/index.js'
const PORT =process.env.PORT || 8000;
const app =express()
app.use('/',IndexRouter)

app.listen(PORT,()=>{
    console.log(`successs ${PORT}`)
})