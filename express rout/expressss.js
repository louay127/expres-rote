const express = require("express")
const app = express()
// console.log(app)

const checkWorkingHours = (req,res,next) => {
    const now = new Date();
    const day = now.getDay(); 
    const hour = now.getHours();
    
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next();
      } else {
        res.send(`
          <html>
            <head>
              <title>Closed</title>
              <style>
                body { font-family: Arial, sans-serif; background-color: #f2f2f2; text-align: center; padding: 50px; }
                h1 { color: #FB9528; }
                p { color: #333; font-size: 18px; }
              </style>
            </head>
            <body>
              <h1>Sorry, we're closed</h1>
              <p>The web application is only available during working hours (From Monday To Friday, 9:00 To 17:00).</p>
            </body>
          </html>
        `);
      }
    };
    
app.use(checkWorkingHours);


app.get("/", (req, res) => {
    res.sendFile(__dirname+"/static/home.html");
});

app.get("/services", (req, res) => {
    res.sendFile(__dirname+"/static/services.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname+"/static/contact.html");
});

app.get("/style.css",(req,res)=>{
   res.sendFile(__dirname+"/static/style.css")
})



PORT = 5000
app.listen(PORT, (err) => 
err ? console.log(err) : console.log("my server is running on port", PORT));