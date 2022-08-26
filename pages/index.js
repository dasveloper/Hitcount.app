import Image from "next/image";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const code = `<a href="hitcount.app" target="_blank">
  <img src="hitcount.app/YOUR_SITE_HERE" alt="Hitcounter" />
</a>`;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-24 px-6 flex flex-col items-center w-full max-w-5xl mx-auto">
        <h1 className="text-center tracking-tight font-bold text-black text-4xl sm:text-5xl md:text-6xl">
          <span className="block font-['PressStart2P']">
            Old-school
            <br />
            analytics
          </span>
          <span className="block">meets the modern web</span>
        </h1>
        <img
          className="mx-auto mt-4 max-w-[50%]"
          width={380}
          src="/hitcount.com"
        />
        <p className="mt-2 text-xs sm:text-sm text-gray-500">
          Adding a hitcounter to your website is as simple as adding an image.
        </p>
        <div className="relative mt-12 sm:translate-x-[100px]">
          <Image src="/pointer.svg" alt="" width={180} height={44} />
        </div>
        <div className="text-sm mx-auto w-full max-w-xl overflow-auto rounded-lg bg-black py-4 px-6 text-left font-medium text-white shadow-lg">
          <pre>
            <code>
              <span className="opacity-50">{`<a href="hitcount.app" target="_blank">`}</span>
              <br />
              <span className="opacity-50">{`  <img src="hitcount.app/`}</span>
              <span className="rounded-sm bg-red-500 px-1.5 py-0.5 font-semibold text-white">
                yourwebsite.com
              </span>
              <span className="opacity-50">{`" alt="Hitcounter" />`}</span>
              <br />
              <span className="opacity-50">{`</a>`}</span>
            </code>
          </pre>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          (The anchor tag isn&apos;t mandatory but helps support the site!)
        </p>
        <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
          <button
            type="button"
            className={`${
              copied
                ? "bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-600"
                : "bg-red-500 hover:bg-red-600 focus:ring-red-600"
            } mt-2 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2`}
          >
            {copied ? "Copied!" : "Copy to clipboard"}
          </button>
        </CopyToClipboard>
        <h1 className="mt-20 text-xl font-semibold text-gray-900">
          Customization
        </h1>
        <p className="mt-2 text-sm text-gray-700">
          You can customize your hitcounter by adding querystrings to the img
          url.
        </p>
        <div className="mt-2 overflow-x-auto w-full">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" className="sr-only">
                  Name
                </th>
                <th
                  scope="col"
                  className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                >
                  Example
                </th>
                <th
                  scope="col"
                  className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                >
                  Result
                </th>
                <th
                  scope="col"
                  className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-semibold text-gray-900 sm:pl-6">
                  Background color
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                  Changes the background color. Accepts any hex color (without
                  #).
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                  ?background=ef4444
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <img width={100} src="/example?background=ef4444" />
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-semibold text-gray-900 sm:pl-6">
                  Text color
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                  Changes the text color. Accepts any hex color (without #).
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                  ?color=ef4444
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <img width={100} src="/example?color=ef4444" />
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-semibold text-gray-900 sm:pl-6">
                  Digits
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                  Changes the number of digits to pad the count to. Accepts any
                  number up to 10.
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                  ?digits=3
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <img width={50} src="/example?digits=3" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-center p-4">
        <a
          className="text-sm underline text-gray-500"
          href="https://github.com/dasveloper/Hitcount.app.git"
          target="_blank"
          rel="noreferrer"
        >
          Visit Github repo
        </a>
      </div>
    </div>
  );
}
