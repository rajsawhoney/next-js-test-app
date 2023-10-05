import Layout from "@/components/Layout";

export default function Home() {
  //   window.location.replace(
  //     "veelapp-devclient://player/8684d664-381c-4382-ba60-75623e75e444"
  //   );
  return (
    <Layout>
      {/* <title>Home Page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      <div className="flex flex-col w-screen bg-blue-400 h-screen items-center justify-center">
        <h1>This is a Home Screen</h1>
        <a
          className="px-4 py-4 text-blue-600 text-2xl"
          href="veelapp-devclient://player/8684d664-381c-4382-ba60-75623e75e444"
        >
          Open App
        </a>
      </div>
    </Layout>
  );
}
