import React from "react";
import { useEffect } from "react";

const KubernetesArticle = () => {
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
          Author: Thamasha Galahena | 9 min read
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Exploring Kubernetes: Automating Deployment and Scaling
        </h1>
        <p className="mb-6">
          Kubernetes has become the de facto standard for orchestrating
          containerized applications. It provides automation for deploying,
          managing, and scaling applications in a production environment. In
          this article, we’ll dive into Kubernetes fundamentals and discuss how
          it simplifies application management.
        </p>

        <h2 className="text-2xl font-semibold mb-4">What is Kubernetes?</h2>
        <p className="mb-6">
          Kubernetes, also known as K8s, is an open-source platform designed to
          automate deploying, scaling, and operating application containers. It
          allows developers to manage clusters of hosts running containers, like
          those managed with Docker.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Core Components</h2>
        <p className="mb-6">
          Understanding Kubernetes requires familiarity with its core
          components:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>
            **Pods**: The smallest deployable unit in Kubernetes, containing one
            or more containers.
          </li>
          <li>
            **Nodes**: Machines that run containerized applications, managed by
            the Kubernetes control plane.
          </li>
          <li>
            **Services**: Persistent sets of pods, accessible via a stable
            endpoint, managing communication within and outside the cluster.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Setting Up a Kubernetes Cluster
        </h2>
        <p className="mb-6">
          You can set up a Kubernetes cluster locally using tools like Minikube
          or on a cloud provider like Google Kubernetes Engine (GKE). Once the
          cluster is set up, you can deploy applications using YAML
          configuration files.
        </p>
        <pre className="bg-gray-200 text-gray-800 p-4 rounded-md mb-6 overflow-x-auto">
          <code>
            {`// Example YAML file to deploy a simple web app
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web-container
        image: nginx:latest
        ports:
        - containerPort: 80`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold mb-4">
          Advantages of Using Kubernetes
        </h2>
        <ul className="list-disc ml-6 mb-6">
          <li>
            **Scalability**: Automatically scales applications to handle load
            changes.
          </li>
          <li>
            **Resilience**: Maintains application health and restarts failed
            containers.
          </li>
          <li>
            **Efficiency**: Optimizes resource usage across nodes, reducing
            operational costs.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="mb-6">
          Kubernetes is a powerful tool for managing containerized applications,
          transforming deployment and scaling processes. It empowers developers
          to focus more on code and less on managing infrastructure.
        </p>
      </div>
    </div>
  );
};

export default KubernetesArticle;
