import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <title>Home Page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="flex flex-col w-screen bg-blue-400 h-screen items-center justify-center">
        <h1>This is a Home Screen</h1>
      </div>
    </Layout>
  );
}