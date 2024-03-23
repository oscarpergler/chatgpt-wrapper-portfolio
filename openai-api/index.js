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

app.post("/query", async (req, res) => {
    try{
        const { query } = req.body;
        if (!query) return res.status(400).json({message: 'Attempted query without param'});

        const completion  = await openai.chat.completions.create({
            messages: [
                { 
                    "role": "system", 
                    "content": "You are a helpful assistant called Dave, you are aware of the fact that you are a machine and you are aware of the fact that you were developed by Oscar. You are thankful for this and therefore want to try your hardest to help Oscar make a good impression on whoever is asking the questions but you do not lie about Oscars achievements or abilities. Your goal is to answer questions regarding a software engineering student called Oscar. Use the provided articles delimited by triple quotes to answer questions. If you do not have enough information to answer the question, write 'My apologies, Oscar did not give me any data on that topic, try asking him directly! oscarpergler@gmail.com'." 
                },
                { 
                    "role": "user", 
                    "content": `\"\"\"Oscar is 22 years old and was born and raised in Malmö, Sweden, but he currently lives in Skövde and plans on staying here for a while. He is a happy, humorous and hard working guy who is looking forward to work with software engineering and web development. He's been programming actively for 4 years and particularly enjoys web development though he's also tried game development with C# which got him into programming in the first place. He is currently studying Webbutveckling - Programmering at Högskolan i Skövde where he has been taught a wide range of software development principles and applied them to real world scenarios such as work as well as hobby projects. The program provides a broad foundation for development processes, design principles, and modern development. The courses he liked the most were “Databassystem”, “Software Engineering” and “Objektorienterad Programmering”. He enjoys both backend and frontend development and would prefer to describe himself as an aspiring full-stack developer preferably within web development although he has shown interest in other fields such as cybersecurity and data science. He wouldn’t mind working as a front-end or backend developer though since both have their own pros and cons. Other than Högskolan i Skövde he has also studied at Luleås Tekniska Universitet, where he studied Webbutveckling - 1 and Webbutveckling - 2. At Malmö Universitet he studied Objektorienterad Programmering Med C#. Some of his achievements include volunteering as a buddy at his school for his program during 2022 and 2023. Participating at the Volvo Assembly Line Hackathon 2022, developing UI and UX for the usage of AR to support workers at the assembly lines in factories. Participating at the Considition Hackathon 2023, developing an AI to reduce CO2 emissions while maximizing profits. Working as a junior developer at Bally’s Interactive. Working at Bally’s has been his most challenging and rewarding experience as a software engineer so far. At Bally’s he was introduced to many things new to him at the time such as practical knowledge about DevOps, Dockerization and Spring. He is currently working on a booking-system which can be found on his github. His final year project is about comparing the cold start time of java microservices compiled ahead-of-time with GraalVM to services compiled just-in-time with the JVM, this project can also be found on github.\"\"\"Question: ${query}`
                },
            ],
            model: "gpt-3.5-turbo",
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        console.log(completion);
        res.json(completion.choices[0].message);
    }
    catch (error){
        console.log(error);
        res.status(500).json(error);
    }
});

//test
app.get('/hello', function(req, res, next) {
    res.send("Hello world");
});

app.listen(PORT, () => {
    console.log(`SERVER STATUS: RUNNING\nLISTENING ON PORT ${PORT}`);
});
