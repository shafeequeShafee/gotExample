import express from "express";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    console.log("hiiiii")
    res.status(200).send("hii");
});

import got from 'got';
app.post("/gotTestExample", async (req, res) => {
    const options = {
        headers: {
            Authorization: "Hello",
            HeadingHead:"sfq"
        },
    };
    const result = await got
        .get('https://jsonplaceholder.typicode.com/posts/1',options)
    console.log(result);

    res.status(200).send("hiiiii");
});


app.listen(3000, (error) => {
    if (error) {
        throw new Error(error);
    }

    console.log("Backend is running");
});