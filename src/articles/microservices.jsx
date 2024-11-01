import React from "react";
import { useEffect } from "react";

const MicroservicesArticle = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = "smooth";
    }, 0);
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center bg-[#F0F0F0] p-2 text-black">
      <div className="w-full max-w-[900px] bg-white p-6 shadow-lg rounded-lg">
        <p className="text-gray-600 mb-2">
          Author: Thamasha Galahena | 8 min read
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Building Microservices: A Journey into Scalable System Design
        </h1>
        <p className="mb-6">
          As software systems grow, managing complexity becomes essential.
          Microservices architecture offers a solution by breaking down
          applications into smaller, independent services, each focusing on a
          specific functionality. In this article, we’ll explore the
          fundamentals of microservices, key benefits, and some practical steps
          to create a microservices-based application.
        </p>

        <h2 className="text-2xl font-semibold mb-4">What Are Microservices?</h2>
        <p className="mb-6">
          Microservices is an architectural style where a single application is
          structured as a collection of loosely coupled services. Each service
          operates independently and communicates with others via well-defined
          APIs, typically using HTTP/REST or messaging protocols like gRPC or
          Kafka.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Benefits of Microservices
        </h2>
        <ul className="list-disc ml-6 mb-6">
          <li>
            **Scalability**: Services can be independently scaled to handle
            varying loads, optimizing resources.
          </li>
          <li>
            **Flexibility**: Teams can choose the best technology stack for each
            service, even mixing languages or frameworks.
          </li>
          <li>
            **Resilience**: Since each service runs independently, failures in
            one area don’t necessarily bring down the entire system.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Core Components of Microservices
        </h2>
        <p className="mb-6">
          A successful microservices architecture involves several core
          components:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>
            **API Gateway**: Acts as the entry point for client requests,
            managing authentication, load balancing, and more.
          </li>
          <li>
            **Service Registry**: Maintains a list of available services and
            their locations to help services discover each other.
          </li>
          <li>
            **Database per Service**: Each service has its own database,
            reducing dependencies and enabling autonomy.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Creating a Basic Microservices Application
        </h2>
        <p className="mb-6">
          Let's look at the high-level steps to create a microservices-based
          application. Consider a simple e-commerce app with three core
          services: **User**, **Product**, and **Order** services.
        </p>
        <pre className="bg-gray-200 text-gray-800 p-4 rounded-md mb-6 overflow-x-auto">
          <code>
            {`// Example of an Express microservice for the User Service
const express = require('express');
const app = express();
app.use(express.json());

app.get('/users/:id', (req, res) => {
  const user = { id: req.params.id, name: 'John Doe' };
  res.send(user);
});

app.listen(5000, () => console.log('User service running on port 5000'));`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold mb-4">
          Challenges of Microservices
        </h2>
        <p className="mb-6">
          Microservices introduce complexities, such as handling data
          consistency across services and managing communication between them.
          Tools like Docker, Kubernetes, and CI/CD pipelines help simplify
          deployment and management in microservices architectures.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="mb-6">
          Microservices enable scalable, flexible applications that adapt to
          modern software demands. Though they introduce complexity, learning
          the fundamentals can open doors to building systems that handle growth
          effectively and serve users reliably.
        </p>
      </div>
    </div>
  );
};

export default MicroservicesArticle;
