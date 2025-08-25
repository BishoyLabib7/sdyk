import { LoaderIcon } from "lucide-react";

function ChatLoader() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-4">
      <LoaderIcon className="animate-spin size-10 text-primaryBg" />
      <p className="mt-4 text-center text-lg font-mono">
        ... جارى الاتصال بالدردشة
      </p>
    </div>
  );
}

export default ChatLoader;
