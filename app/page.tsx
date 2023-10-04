import dynamic from "next/dynamic";
// import Home from "./components/section/home/home";

// const DynamicProjects = dynamic(
//   () => import("./components/section/projects/projects"),
//   {
//     loading: () => <p>Loading...</p>,
//   },
// );

const DynamicAbout = dynamic(() => import("./components/section/about/about"), {
  loading: () => <p>Loading...</p>,
});

const DynamicContact = dynamic(
  () => import("./components/section/contact/contact"),
  {
    loading: () => <p>Loading...</p>,
  },
);

export default function Page() {
  return (
    <main className="relative flex grow flex-col">
      {/* <Home /> */}
      <div className="flex flex-col content-center items-center justify-center px-4 md:px-6">
        {/* <DynamicProjects /> */}
        <DynamicAbout />
        <DynamicContact />
      </div>
    </main>
  );
}
