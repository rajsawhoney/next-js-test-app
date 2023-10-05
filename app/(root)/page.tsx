export default function Home() {
  return (
    <div className="flex flex-col w-screen bg-blue-400 h-screen items-center justify-center">
      <h1>This is a Home Screen</h1>
      <a
        className="px-4 py-4 text-blue-600 text-2xl"
        href="veel-app://player/8684d664-381c-4382-ba60-75623e75e444"
      >
        Open Video in App
      </a>
    </div>
  );
}
