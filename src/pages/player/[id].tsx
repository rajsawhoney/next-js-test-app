import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const getDeviceOperatingSystem = () => {
  const userAgent = navigator.userAgent;
  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return "iOS";
  }

  if (/Macintosh;/.test(userAgent)) {
    return "Mac";
  }
  return "unknown";
};

export async function getServerSideProps() {
  const res = await fetch(`https://dev.api.veelapp.com/user/getVideos/12345`);
  const data = await res.json();

  return { props: { data } };
}

export default function Player({ data }: { data: object }) {
  const router = useRouter();
  const id = router.query.id;
  console.log("currentVideo:", data);
  useEffect(() => {
    const device = getDeviceOperatingSystem();
    switch (device) {
      case "Android":
      case "iOS":
        window.location.replace("veel-app://dashboards/Feeds");
        break;
      default:
        break;
    }
  }, []);

  return (
    <Layout>
      {/* <!-- HTML Meta Tags --> */}
      <title>My Awesome Video Test</title>
      <meta name="description" content="My Awesome Video Test Description" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://dev.veelapp.com/player/asda" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="My Awesome Video Test" />
      <meta
        property="og:description"
        content="My Awesome Video Test Description"
      />
      <meta
        property="og:image"
        content="https://img.freepik.com/premium-psd/new-modern-glow-effect-video-game-review-youtube-channel-thumbnail-web-banner-premium-psd-templa_623685-102.jpg"
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="dev.veelapp.com" />
      <meta
        property="twitter:url"
        content="https://dev.veelapp.com/player/asda"
      />
      <meta name="twitter:title" content="My Awesome Video Test" />
      <meta
        name="twitter:description"
        content="My Awesome Video Test Description"
      />
      <meta
        name="twitter:image"
        content="https://img.freepik.com/premium-psd/new-modern-glow-effect-video-game-review-youtube-channel-thumbnail-web-banner-premium-psd-templa_623685-102.jpg"
      />

      <div className="flex flex-col w-screen bg-blue-400 h-screen items-center justify-center">
        <h1>This is a Player Screen</h1>
        <h2>Video ID:{id}</h2>
      </div>
    </Layout>
  );
}
