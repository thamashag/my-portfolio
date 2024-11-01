import React from "react";
import { useEffect } from "react";
import TopImage from "../assets/recursion1.png";
import Diagram from "../assets/recursion2.png";

const RecursionArticle = () => {
  useEffect(() => {
    // Temporarily disable smooth scrolling
    document.documentElement.style.scrollBehavior = "auto";

    // Set scroll to top after a short delay to avoid smooth scroll override
    setTimeout(() => {
      window.scrollTo(0, 0);

      // Restore smooth scrolling
      document.documentElement.style.scrollBehavior = "smooth";
    }, 0); // A short timeout to ensure scroll reset
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center bg-[#F0F0F0] p-2 text-black">
      <div className="w-full max-w-[900px] bg-white p-6 shadow-lg rounded-lg">
        <p className="text-gray-600 mb-2">
          Author: Thamasha Galahena | 7 min read
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Exploring the Power of C: Understanding Recursion
        </h1>
        <img
          src={TopImage}
          alt="Top"
          className="mb-6 w-full h-auto rounded-lg"
        />
        <p className="mb-6">
          When I started learning C during my bachelor's degree, I found it
          fascinating that C allows us to build custom data structures from
          scratch. But among the concepts I encountered, recursion was one of
          the trickiest to wrap my head around. However, once I understood how
          recursion works, it became an invaluable tool for tackling problems
          that could be broken down into smaller, repetitive tasks.
        </p>

        <h2 className="text-2xl font-semibold mb-4">What is Recursion?</h2>
        <p className="mb-6">
          In programming, recursion is a process where a function calls itself
          to solve a problem in incremental steps. When we use recursion, we
          typically design the function so that it continues calling itself with
          a slightly different input until it reaches a predefined condition,
          known as the “base case.” Once the base case is met, the recursion
          stops, and the function starts returning its results step-by-step,
          completing all the unfinished calls along the way.
        </p>
        <p className="mb-6">
          Recursion can be a more intuitive way to solve problems that have
          natural subproblems. But because a recursive function can quickly
          consume memory if not designed properly, it’s essential to clearly
          define the base case and make sure each recursive call moves the input
          closer to it.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Getting Started: The Concept with a Simple Example
        </h2>
        <p className="mb-6">
          To illustrate, let’s look at a very basic example of recursion:
          calculating the sum of numbers from 1 up to a given integer n. For
          example, if n is 5, the sum should be 1 + 2 + 3 + 4 + 5 = 15.
        </p>
        <p className="mb-6">
          In non-recursive (or iterative) terms, we would likely solve this with
          a loop. But with recursion, we can think of the problem as follows:
          The sum of numbers up to n is just n plus the sum of all numbers up to
          n-1. If we keep doing this, we eventually reach 1, which is our base
          case.
        </p>
        <pre className="bg-gray-200 text-gray-800 p-4 rounded-md mb-6 overflow-x-auto">
          <code>
            {`#include <stdio.h>

int sum(int n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sum(n - 1);
    }
}

int main() {
    int number = 5;
    printf("Sum of numbers from 1 to %d is %d\\n", number, sum(number));
    return 0;
}`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold mb-4">
          Recursion with a More Complex Example: The Fibonacci Sequence
        </h2>
        <p className="mb-6">
          Let’s move on to a slightly more complex example—the Fibonacci
          sequence. This sequence starts with 0 and 1, and each subsequent
          number is the sum of the two preceding ones. For example: 0, 1, 1, 2,
          3, 5, 8, 13, and so on.
        </p>
        <pre className="bg-gray-200 text-gray-800 p-4 rounded-md mb-6 overflow-x-auto">
          <code>
            {`#include <stdio.h>

int fibonacci(int n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

int main() {
    int number = 6;
    printf("Fibonacci number at position %d is %d\\n", number, fibonacci(number));
    return 0;
}`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold mb-4">
          Advantages and Drawbacks of Recursion
        </h2>
        <p className="mb-6">
          Recursion can make certain problems much easier to understand and
          implement, especially when dealing with hierarchical data structures
          like trees or graphs. Some key benefits include:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>
            Simplicity: Recursive solutions are often more readable and closer
            to the problem's natural structure.
          </li>
          <li>
            Modularity: Recursive functions break down a problem into smaller
            subproblems, each handled by its own function call.
          </li>
        </ul>
        <p className="mb-6">
          However, recursion isn’t always the most efficient approach:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>
            Memory Usage: Each recursive call requires its own memory space on
            the call stack. If the recursion is too deep, it can lead to a stack
            overflow.
          </li>
          <li>
            Performance: Recursive solutions can sometimes be slower, especially
            in cases like the Fibonacci example, where repeated calculations
            occur.
          </li>
        </ul>

        <img src={Diagram} alt="" className="mb-6 w-full h-auto rounded-lg" />

        <h2 className="text-2xl font-semibold mb-4">
          Using Recursion in Real-World Scenarios
        </h2>
        <p className="mb-6">
          Once I understood the basics, I began to appreciate how useful
          recursion can be in data structure manipulation. Take binary trees,
          for example. In a binary tree, each node has two children, and
          recursion is a natural way to traverse it.
        </p>
        <pre className="bg-gray-200 text-gray-800 p-4 rounded-md mb-6 overflow-x-auto">
          <code>
            {`#include <stdio.h>

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

int treeHeight(struct Node* node) {
    if (node == NULL) {
        return -1;
    } else {
        int leftHeight = treeHeight(node->left);
        int rightHeight = treeHeight(node->right);
        return (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;
    }
}`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="mb-6">
          Understanding recursion in C was a pivotal moment for me as a
          programmer. At first, it was challenging to see how a function calling
          itself could be effective. But now, recursion feels like a tool I
          can’t live without. It’s ideal for tasks that require repeated
          operations on data structures, like searching or traversing trees, and
          it often yields code that’s elegant and easier to maintain.
        </p>
        <p>
          If you’re just starting out with recursion, my advice is to start with
          the basics and keep practicing. With time, it becomes second nature,
          and you’ll likely come to appreciate its power and versatility just as
          I have. Happy coding!
        </p>
      </div>
    </div>
  );
};

export default RecursionArticle;
