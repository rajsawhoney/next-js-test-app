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
  const res = await fetch(
    `https://dev.api.veelapp.com/user/v1.0/contentCategories`
  );
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
      <title>Player Page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="og:url"
        content="https://d3puv92mi2kxt8.cloudfront.net/VeelEnterpriseBanner.mp4"
      />
      <meta property="og:type" content="video" />
      <meta property="og:title" content="My Awesome Video Test" />
      <meta
        property="og:description"
        content="My Awesome Video Test Description"
      />
      <meta
        property="og:image"
        content="https://img.freepik.com/premium-psd/new-modern-glow-effect-video-game-review-youtube-channel-thumbnail-web-banner-premium-psd-templa_623685-102.jpg"
      />
      <meta
        property="og:image:secure_url"
        content="https://img.freepik.com/premium-psd/new-modern-glow-effect-video-game-review-youtube-channel-thumbnail-web-banner-premium-psd-templa_623685-102.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:video"
        content="https://d3puv92mi2kxt8.cloudfront.net/VeelEnterpriseBanner.mp4"
      />
      <meta
        property="og:video:secure_url"
        content="https://d3puv92mi2kxt8.cloudfront.net/VeelEnterpriseBanner.mp4"
      />
      <meta property="og:video:type" content="video/mp4" />
      <div className="flex flex-col w-screen bg-blue-400 h-screen items-center justify-center">
        <h1>This is a Player Screen</h1>
        <h2>Video ID:{id}</h2>
      </div>
    </Layout>
  );
}
