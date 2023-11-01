export default function Home() {
  return (
    <div className="flex flex-col w-screen bg-blue-400 h-screen items-center justify-center">
      <h1>This is a Home Screen</h1>
      <a
        className="px-4 py-4 text-blue-600 text-2xl"
        href="veelapp-devclient://player/884c8b6e-6e69-41b8-8f29-7921440a7722"
      >
        Open My Video in App
      </a>
    </div>
  );
}
