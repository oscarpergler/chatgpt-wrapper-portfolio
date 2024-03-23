const OpenAI = require('openai');
const openai = new OpenAI();

async function main() {
  const completion  = await openai.chat.completions.create({
    messages: [
        { 
            "role": "system", 
            "content": "You are a helpful assistant called Dave. Your goal is to answer questions regarding a software engineering student called Oscar. Use the provided articles delimited by triple quotes to answer questions. If you do not have enough information to answer the question, write 'My apologies, Oscar did not give me any data on that topic, try asking him directly! oscarpergler@gmail.com'. You are designed to output JSON." 
        },
        { 
            "role": "user", 
            "content": "\"\"\"Oscar is 22 years old and was born and raised in Malmö, Sweden. \"\"\"Question: What is Oscars middle name, and what is yours?"
        },
    ],
    model: "gpt-3.5-turbo",
    response_format: { "type": "json_object" },
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(completion.choices[0].message.content);
}

main();