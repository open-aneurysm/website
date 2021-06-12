import React, { useState, useRef, useEffect } from 'react'
import Head from 'next/head'

let backgroundSvg = `
opacity: 0.25;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

function Dropdown({ title, content }) {
  return (
    <div className="border collapse w-full max-w-[700px] mx-auto rounded-box border-base-300 collapse-arrow">
      <input type="checkbox" />
      <div className="text-xl font-medium collapse-title">
        {title}
      </div>
      <div className="collapse-content">
        <p>
          {content}
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  const bgRef = useRef();
  const bgRef_2 = useRef();
  const bgRefParent = useRef();
  const bgRefParent_2 = useRef();

  useEffect(() => {
    // Add SVG effects
    const bg = bgRef.current;
    const bgParent = bgRefParent.current;
    bg.style.cssText += backgroundSvg;
    bgParent.style.cssText += "-webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 50%, transparent 100%)"
    const bg2 = bgRef_2.current;
    const bgParent2 = bgRefParent_2.current;
    bg2.style.cssText += backgroundSvg;
    bgParent2.style.cssText += "-webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 50%, transparent 100%)"
  }, [])

  return (
    <div className="min-h-screen bg-gray-800">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="h-[450px] bg-gradient-to-b from-pink-900 to-gray-800 absolute top-0 left-0 w-full"></div>
      <div className="h-[450px] bg-gradient-to-b from-pink-900 to-gray-800 absolute top-0 left-0 w-full" ref={bgRefParent}>
        <div ref={bgRef} className="absolute top-0 left-0 w-full h-full"></div>
      </div>
      <div className="fixed z-20 top-0 left-0 h-[56px] bg-pink-900 bg-opacity-10 w-full backdrop-filter backdrop-blur shadow-md">
        <div className="mx-auto w-full max-w-[1210px] text-gray-200 flex justify-between items-center h-full">
          <div className="flex items-center h-full px-3">
            <img src="https://avatars.githubusercontent.com/u/85714537?s=36&v=4" className="mr-3 rounded-lg" />
            <div className="flex flex-col leading-none">
              <h1 className="text-xl font-bold leading-none">Open Aneurysm</h1>
              <p className="text-xs">Public, open-source aneurysm research</p>
            </div>
          </div>
          <div className="flex items-center h-full px-3 space-x-6">
            <a href="http://github.com/open-aneurysm/website/discussions" target="_blank" rel="noopener" className="text-gray-200 hover:text-white">Community</a>
            <a href="http://github.com/open-aneurysm/" target="_blank" rel="noopener"><img src="./github.svg" className="w-8 h-8 filter invert" /></a>
          </div>
        </div>
      </div>
      <div className="mt-[56px] relative flex flex-col items-center justify-center pt-16 pb-20 z-10">
        <img src="https://avatars.githubusercontent.com/u/85714537?s=64&v=4" className="rounded-lg shadow-xl" />
        <div className="flex flex-col items-center pt-10">
          <h1 className="px-4 pb-8 text-5xl font-bold leading-none text-center text-white md:pb-3 md:leading-normal">Open Aneurysm</h1>
          <span className="space-x-2">
            <h2 className="inline-block text-center text-white bg-white rounded-full bg-opacity-10 px-3 py-0.5">
              <div className="h-[8px] w-[8px] bg-green-500 rounded-full inline-block my-0.5 mr-2"></div>EOIs Open
            </h2>
            <h2 className="inline-block text-center text-white bg-white rounded-full bg-opacity-10 px-3 py-0.5">
              <div className="h-[8px] w-[8px] bg-green-500 rounded-full inline-block my-0.5 mr-2"></div>Alpha
            </h2>
          </span>
        </div>
        <div className="flex flex-col items-start pt-16 space-y-4 md:space-y-0 md:space-x-2 md:flex-row">
          <button className="btn btn-wide btn-primary btn-lg">Submit an EOI</button>
          <button className="bg-gray-900 btn btn-wide btn-disabled btn-lg">
            <div className="flex flex-col">
              <div className="leading-none text-gray-400">Browse the Dataset</div>
              <div className="text-xs text-gray-500">Coming Soon</div>
            </div>
          </button>
        </div>
        <div className="py-20 w-full max-w-[1000px] text-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-center pb-8 text-center md:pb-0">
              <img src="/data.png" className="mb-3 filter invert" />
              <h2 className="pb-2 text-xl font-bold">Ethics & Collection</h2>
              <p className="px-6">We're building a fully public, open-source, & anonymised database of unruptured aneurysms.</p>
              <div className="mt-4 inline-block text-center text-white bg-white rounded-full bg-opacity-10 px-3 py-0.5">
                <div className="h-[8px] w-[8px] bg-green-500 rounded-full inline-block my-0.5 mr-2"></div>EOIs Open
              </div>
            </div>
            <div className="flex flex-col items-center pb-8 text-center opacity-50 md:pb-0">
              <img src="/annotate.png" className="mb-3 filter invert" />
              <h2 className="pb-2 text-xl font-bold">Annotation & Visualisation</h2>
              <p className="px-6">We're developing an open-source editor to annotate and visualize data in a high-performance voxel environment</p>
              <div className="mt-4 inline-block text-center text-white bg-white rounded-full bg-opacity-10 px-3 py-0.5">
                IN PROGRESS
              </div>
            </div>
            <div className="flex flex-col items-center text-center opacity-50">
              <img src="/analysis.png" className="mb-3 filter invert" />
              <h2 className="pb-2 text-xl font-bold">Analysis & Segmentation</h2>
              <p className="px-6">We're working on detection algorithms to quickly identify and segment aneurysms</p>
              <div className="mt-4 inline-block text-center text-white bg-white rounded-full bg-opacity-10 px-3 py-0.5">
                COMING SOON
              </div>
            </div>
          </div>
        </div>
        <div className="py-20 w-full max-w-[1000px] text-gray-200">
          <h1 className="text-3xl font-bold text-center">About the project</h1>
          <div className="px-3 pt-10 space-y-2">
            <Dropdown title="What is the project's mission?" content="[[[ Content will go here ]]]" />
            <Dropdown title="How are submitted images licensed and credited?" content="[[[ Content will go here ]]]" />
            <Dropdown title="How is patient anonymity ensured?" content="[[[ Content will go here ]]]" />
            <Dropdown title="Why should I get involved?" content="[[[ Content will go here ]]]" />
            <Dropdown title="Who is running this?" content="[[[ Content will go here ]]]" />
          </div>
        </div>
        <div className="py-20 w-full max-w-[1000px] text-gray-200 px-4">
          <div className="bg-gradient-to-br from-indigo-700 to-blue-900 transform -skew-y-2 rounded-2xl shadow-lg h-[330px] w-full px-8 py-6">
            <div className="mt-6 transform skew-y-2">
              <h1 className="text-4xl font-bold text-blue-100 max-w-[440px]">Test Our DICOM Anonymisation Tooling</h1>
              <h2 className="text-lg max-w-[360px] leading-tight pt-3">Works 100% offline, in your browser. It even automatically strips soft-tissue away to prevent facial reconstruction.</h2>
              <button className="mt-4 btn btn-wide btn-info">Try it out</button>
              <p className="pt-2 text-sm text-blue-400">100% open source, on GitHub</p>
            </div>
          </div>
        </div>
        <div className="py-20 w-full max-w-[1000px] text-gray-200">
          <h1 className="text-3xl font-bold text-center">Our Repositories</h1>
          <div className="px-3 pt-10 space-y-2">
            <Dropdown title="What is the project's mission?" content="[[[ Content will go here ]]]" />
            <Dropdown title="How are submitted images licensed and credited?" content="[[[ Content will go here ]]]" />
            <Dropdown title="How is patient anonymity ensured?" content="[[[ Content will go here ]]]" />
            <Dropdown title="Why should I get involved?" content="[[[ Content will go here ]]]" />
            <Dropdown title="Who is running this?" content="[[[ Content will go here ]]]" />
          </div>
        </div>
      </div>
      <div className="relative mt-[-400px] h-[450px] flex flex-col justify-end">
        <div className="absolute h-[450px] w-full" style={{ opacity: 0.25 }}>
          <div className="h-[450px] bg-gradient-to-b from-gray-900 to-gray-800 absolute top-0 left-0 w-full transform rotate-180" ref={bgRefParent_2}>
            <div ref={bgRef_2} className="absolute top-0 left-0 w-full h-full"></div>
          </div>
        </div>
        <div className="relative py-6 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Mitchell Johnson
        </div>
      </div>
    </div>
  )
}
