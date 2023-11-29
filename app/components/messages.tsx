import MessageAI from "./message-ai";
import MessageUser from "./message-user";

export default function Messages() {
  return (
    <div className="flex-1 space-y-8 overflow-y-auto leading-6 sm:text-base sm:leading-7">
      <MessageUser>
        Explain quantum computing in simple terms. dsfjkdsfjkdsj
        fkdsjfkdsjfdksjfkdsjfkdsjfkdsjfkdsjfkdsjfkdsjfkdsjfkdsjfkdsjfkdsjfkdsfdskfjdskfdsfdsfdsfds dsfdsfds
      </MessageUser>
      <MessageAI>
        Certainly! Quantum computing is a new type of computing that relies on the principles of quantum physics.
        Traditional computers, like the one you might be using right now, use bits to store and process information.
        These bits can represent either a 0 or a 1. In contrast, quantum computers use quantum bits, or qubits.
        <br />
        <br />
        Unlike bits, qubits can represent not only a 0 or a 1 but also a superposition of both states simultaneously.
        This means that a qubit can be in multiple states at once, which allows quantum computers to perform certain
        calculations much faster and more efficiently.
      </MessageAI>
      <MessageUser>What are three great applications of quantum computing?</MessageUser>
      <MessageAI>
        Three great applications of quantum computing are: Optimization of complex problems, Drug Discovery and
        Cryptography.
      </MessageAI>
    </div>
  );
}
