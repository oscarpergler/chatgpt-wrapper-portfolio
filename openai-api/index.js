const OpenAI = require('openai');
const openai = new OpenAI();
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 8080;

app.use(express.json());
app.use(cors(
    {
        origin: ["http://localhost:5173"]
    }
));

/*
    Random OpenAI bullshittery (livets hårda skola):

        When using JSON mode, always instruct the model to produce JSON via some message in the conversation, 
        for example via your system message. If you don't include an explicit instruction to generate JSON, 
        the model may generate an unending stream of whitespace and the request may run continually until it reaches the token limit.


*/
app.post("/query"), async (req, res) => {
    try{
        const { query } = req.body;
        if (!query) return res.status(400).json({message: 'Attempted query without param'});

        const completion  = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "You are a helpful assistant designed to output JSON." }
            ],
            model: "gpt-3.5-turbo",
            response_format: { "type": "json_object" },
        });

        console.log(completion);
        res.json(completion.choices[0].message.content);
    }
    catch (error){
        console.log(error);
        res.status(500);
    }
}

app.listen(PORT, () => {
    console.log(`SERVER STATUS: RUNNING\nLISTENING ON PORT ${PORT}`);
});
