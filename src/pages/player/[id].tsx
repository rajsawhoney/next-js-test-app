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
  // const data = await res.json();

  return { props: { data: { id: 1233 } } };
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        content="https://marketplace.canva.com/EAFFt_DccoA/1/0/1600w/canva-colorful-freelancer-youtube-thumbnail-ucA52BZ7Bqk.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

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
        content="https://marketplace.canva.com/EAFFt_DccoA/1/0/1600w/canva-colorful-freelancer-youtube-thumbnail-ucA52BZ7Bqk.jpg"
      />

      <div className="flex flex-col w-screen bg-blue-400 h-screen items-center justify-center">
        <h1>This is a Player Screen</h1>
        <h2>Video ID:{id}</h2>
      </div>
    </Layout>
  );
}
