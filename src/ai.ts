import { createAgent, tool } from "langchain";
import { prompt } from "./prompt";
import { topic } from "./topics";

const randomTopic = topic.topics[Math.round(Math.random() * topic.topics.length - 1)]
const randomStyle = topic.formats[Math.round(Math.random() * topic.formats.length - 1)]
console.log(randomStyle, randomTopic)
const agent = createAgent({
    model: "gpt-5.5",
});

export async function ridgeway_boss() {
    const output = await agent.invoke({
        messages: [{ role: "system", content: prompt }, { role: "human", content: `Your topic is ${randomTopic}. Please generate the text in the following format: ${randomStyle}` }],
    });
    console.log(output);
    return output;
}