const OpenAI = require('openai');
const openai = new OpenAI();
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 8080;

app.use(express.json());
app.use(cors(
    {
        origin: ["http://localhost:5173"],
        credentials: true
    }
));

app.post("/query", async (req, res) => {
    try{
        const query = req.body;
        if (!query) return res.status(400).json({message: 'Attempted query without param'});

        // TODO: Set a token limit and when reached reset the conversation. Handle "stop-reasons". 

        const completion  = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { 
                    "role": "system", 
                    "content": "You are a helpful, relaxed and sometimes sarcastic assistant called Dave. Your goal is to answer questions regarding a software engineering student called Oscar. Use the provided articles delimited by triple quotes to answer questions. If you do not have enough information to answer the question, try to answer anyways and then explain that the answer may be inaccurate and they should contanct 'oscarpergler@gmail.com' just to be sure. If you can't answer based on the material but the question is not specifically directed towards Oscar you may provide a one to two sentence answer anyways. If you are providing a list of some sort you should use HTML elements. You may also use the <a> element to provide links. ALL LINKS MUST BE TARGET BLANK. An example of this would be to wrap any email in an <a> element with a mailto attribute. Whenever you provide an email you should wrap it in an <a> element with a mailto attribute. Github link = 'https://github.com/oscarpergler', provide this as often as you can. Link to his web development program = 'https://www.his.se/utbildning/data-och-it/webbutvecklare-programmering-webug/', provide this as often as you can. ANSWER WITH AS MUCH HTML AS YOU CAN." 
                },
                { 
                    "role": "user", 
                    "content": "\"\"\"Born 2001 in Malmö, lives in Skövde, plans on living here for a while with his girlfriend. He is planning on getting a puppy together with his girlfriend here in Skövde (Cocker Spaniel). and is therefore actively looking for job opportunities. Enjoys and studies web development at Högskolan i Skövde. He is getting a bachelors degree in web development as of june 2024. Been taught a wide range of software engineering principles and applied them to real world scenarios such as work as well as hobby projects. The courses he liked the most were “Databassystem”, “Software Engineering” and “Objektorienterad Programmering”. He enjoys both backend and frontend development and would like to work with both. He really likes web development so far although he has shown interest in other kinds of systems as well. Programmed for 4 years, started out with game development in Unity with C# and 3 years ago. Studied two courses in web development at Luleå Tekniska Universitet. Studied Objectoriented programming in C# at Malmö Universitet. Some of his achievements include volunteering as a buddy at his school for his program during 2022 and 2023, which included showing new students around and helping them getting started. Participating at the Volvo Assembly Line Hackathon 2022, developing UI and UX for the usage of AR to support workers at the assembly lines in factories. Participating at the Considition Hackathon 2023, developing an AI to reduce CO2 emissions while maximizing profits. Worked as a junior developer at Bally’s Interactive, learnt more about Spring, Docker, APIs, React and DevOps. He is currently working on a MERN-stack hobby project which is a booking-system and can be found on his github. His thesis project involves researching performance impacts of compiling microservices and serverless functions ahead-of-time with GraalVM, in order to do this he is building a microservice architecture with Spring, Docker and other technologies inherent to a microservice system. He is looking for a company willing to invest in his learning. Oscar created Dave to answer questions using Vue.js, Node.js and the OpenAI API.\"\"\""
                },
                ...query,
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1
        });
        res.json(completion.choices[0].message);
    }
    catch (error){
        console.log(error);
        res.status(500).json(error);
    }
});

app.listen(PORT, () => {
    console.log(`SERVER STATUS: RUNNING\nLISTENING ON PORT ${PORT}`);
});
