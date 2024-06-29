import { app } from "./src/app";


app.listen(process.env.PORT,()=>{
    console.log(`Server one in port ${process.env.PORT}`);
});