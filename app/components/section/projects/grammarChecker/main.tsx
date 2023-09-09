"use client";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy, Loader2, Undo } from "lucide-react";

export default function Main() {
  const [text, setText] = useState("");
  const [previousText, setPreviousText] = useState("");
  const [words, setWords] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [fixed, setFixed] = useState(false);

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
    setWords(countWords(e.target.value));
  }

  function countWords(str: string) {
    var matches = str.match(/[\w\d\'\'-]+/gi);
    return matches ? matches.length : 0;
  }

  function handleCopy() {
    setMessage("Copied to clipboard!");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  function handleUndo() {
    setMessage("Undo successful!");
    setText(previousText);
    setWords(countWords(previousText));

    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  function handleSubmit() {
    setFixed(true);
  }

  useEffect(() => {
    if (loading || !fixed) return;

    try {
      setLoading(true);
      setPreviousText(text);

      const message =
        " The free trial of my OpenAI key is over so I cannot make it work :(";
      let i = 0;

      setText("");

      const typingEffect = setInterval(() => {
        setText((prevText) => prevText + message[i]);
        i++;

        if (i === message.length - 1) {
          clearInterval(typingEffect);

          setMessage("Fixed all grammar errors.");
          setWords(countWords(text));
          setFixed(false);
          setLoading(false);

          setTimeout(() => {
            setMessage("");
          }, 4000);
        }
      }, 50);
    } catch {
      setMessage("Something went wrong. Please try again.");
    }
  }, [fixed, loading, text]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-2 py-16 sm:px-8 sm:py-16">
      <div className="h-full w-full rounded-lg bg-white p-2 shadow-lg dark:bg-neutral-800 sm:p-4">
        <form className="flex h-full  flex-col gap-4">
          <textarea
            className="h-full w-full resize-none bg-white placeholder-neutral-400 focus:border-0 focus:outline-none focus:ring-0 dark:bg-neutral-800"
            placeholder="Enter your text"
            onChange={handleTextChange}
            value={text}
          />
          <div className="grid w-full grid-cols-3 justify-between ">
            <div className="flex gap-2  place-self-start self-center">
              <p className="self-center whitespace-nowrap">{words} Words</p>
              <span
                className={`${
                  words !== 0 ? "bg-green-500" : "bg-neutral-500"
                } invisible h-1.5 w-1.5  self-center rounded-full sm:visible`}
              />
            </div>
            <div className="place-self-center self-center">
              <button
                type="button"
                disabled={!words}
                onClick={handleSubmit}
                className={`${
                  words !== 0
                    ? "bg-teal-600 hover:bg-teal-700 dark:bg-teal-800 dark:hover:bg-teal-900"
                    : "cursor-not-allowed bg-neutral-200 text-neutral-400 dark:bg-neutral-700"
                } flex w-32 justify-center rounded-full px-3 py-1.5 font-bold`}
              >
                {!loading ? (
                  <span>Fix All Errors</span>
                ) : (
                  <Loader2 className="h-6 w-6 animate-spin p-0.5 text-gray-400 dark:text-gray-600" />
                )}
              </button>
            </div>
            <div className="flex  gap-4 place-self-end self-center">
              <button type="button" onClick={handleUndo}>
                <Undo className="h-6 w-6 self-center text-neutral-400 hover:text-teal-800" />
              </button>
              <CopyToClipboard text={text} onCopy={handleCopy}>
                <button type="button">
                  <Copy className="h-6 w-6 self-center text-neutral-400 hover:text-teal-800" />
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </form>
      </div>
      <div className="my-4 w-full">
        {message ? (
          <span className="rounded-lg bg-teal-700 px-2 py-2 pr-6 text-white">
            {message}
          </span>
        ) : (
          <span className="text-gray-200 dark:text-neutral-900">
            This is invisible
          </span>
        )}
      </div>
    </div>
  );
}
