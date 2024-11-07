import React, { useState, useEffect, useRef } from "react";
import { OpenAI } from "openai";
import { AiOutlineSend, AiOutlineRobot } from "react-icons/ai"; // Assistant icon

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);

  const preloadSVG = (
    <>
      <svg
        className="inline w-8 h-8 mr-2 text-white animate-spin fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="text-white opacity-70">Thinking...</span>
    </>
  );

  const onSubmitAction = () => {
    if (!input) return;
    // Add user message to state
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: input },
    ]);
    setInput("");
    setIsThinking(true);
  };

  const callOpenaiAPI = async () => {
    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_KEY,
      dangerouslyAllowBrowser: true, // Enables use in the browser for testing
    });

    // Context about you
    const context = `
      You are a helpful assistant trained on Thamasha Galahena's resume and experience. 
      Thamasha (Tam) Galahena is a full stack developer and IT consultant based in Melbourne, Australia. 
      They have a Master's in Information Technology and expertise in programming languages such as C, Java, Python, HTML, CSS, JavaScript, and SQL. 
      Thamasha's experience includes working on microservices architecture and cloud platforms like GCP and Azure.

      **Education:**
      - M.Sc. Information Technology - Deakin University, Melbourne, Australia (2023 - 2024)
      - B.Sc. Computer Engineering - Polytechnic University of Turin, Italy

      **Experience:**
      - Full Stack Developer at Tropical Coco (Feb 2024) - (Contract)
      - Full Stack Developer at Chameleon - Smarter World (2024)
      - IT Consultant at Studio Ass. Petrella Capitini Di Dio (2022)
      - IT Consultant at Banca Intesa Sanpaolo (2022)
      - Junior Software Engineer at Satispay (2021)

      **Projects:**
      - Supply Chain Optimization Platform: Developed a scalable inventory management app.

      **Skills:**
      - Programming: C, Java, Python, HTML, CSS, JavaScript, SQL, Matlab
      - Frameworks: React, Node.js, Express.js, Docker, Kubernetes
      - Tools: Git, GCP, Azure, VS Code
      - Libraries: NumPy, pandas, Matplotlib
    `;

    // Prepare the messages for the OpenAI API
    const messagesForApi = [
      { role: "system", content: context },
      ...messages,
      { role: "user", content: input },
    ];

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messagesForApi,
        max_tokens: 500,
        temperature: 0.7,
      });

      // Set response from OpenAI
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: completion.choices[0].message.content },
      ]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsThinking(false);
    }
  };

  useEffect(() => {
    // Set initial welcome message from assistant
    const initialMessage = {
      role: "assistant",
      content: `
        Hello! 👋 I'm your assistant trained on information about Thamasha Galahena (Tam). I've been built using the ChatGPT API. 
        I can help answer any questions you have about him and his work experience. 
        Here are some example questions you can ask me:
        - What is Thamasha's background?
        - Can you tell me about Thamasha's projects?
        - What technologies does Thamasha work with?
        - Where did Thamasha study?
      `,
    };
    setMessages([initialMessage]);

    // Ensure smooth scroll to the bottom when new messages are added
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    // Call OpenAI API when a new user message is added
    if (messages.length && messages[messages.length - 1].role === "user") {
      callOpenaiAPI();
    }
    // Ensure smooth scroll to the bottom when new messages are added
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-[calc(100vh-96px)]">
      <div className="flex-1 overflow-y-auto p-5 max-w-[1100px] mx-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            } items-start`}
          >
            {msg.role === "user" ? (
              // User message bubble style
              <div className="max-w-[500px] p-3 bg-gray-400 text-white rounded-3xl rounded-br-none shadow">
                <div className="ml-2">{msg.content}</div>
              </div>
            ) : (
              // Assistant message without bubble
              <div className="max-w-[900px] p-3 text-white">
                <div className="flex items-center">
                  <AiOutlineRobot size={20} className="mr-2" />
                  <strong>Assistant:</strong>
                </div>
                <div className="ml-1">{msg.content}</div>
              </div>
            )}
          </div>
        ))}
        {isThinking && <div className="mb-2 text-center">{preloadSVG}</div>}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex justify-center mt-6 mb-6 p-5">
        <div className="relative w-[900px]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSubmitAction()}
            placeholder="Type a message..."
            className="w-full p-4 pr-12 border border-gray-300 rounded-full focus:outline-none"
          />
          <button
            onClick={onSubmitAction}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#37AFE1] text-white p-2 rounded-full"
          >
            <AiOutlineSend size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
