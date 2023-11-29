import Messages from "../components/messages";
import PromptInput from "../components/prompt-input";

export default function Chat() {
  return (
    <div className="flex">
      <Messages />
      <PromptInput />
    </div>
  );
}
