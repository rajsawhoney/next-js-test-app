import { Metadata } from "next";
import Layout from "@/components/Layout";

// const getDeviceOperatingSystem = () => {
//   const userAgent = navigator.userAgent;
//   if (/android/i.test(userAgent)) {
//     return "Android";
//   }

//   if (/iPad|iPhone|iPod/.test(userAgent)) {
//     return "iOS";
//   }

//   if (/Macintosh;/.test(userAgent)) {
//     return "Mac";
//   }
//   return "unknown";
// };

export const metadata: Metadata = {
  title: "Veel Player",
  description: "Veel Player",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter:image":
      "https://veelapp.com/assets/veel-white-no-reel-3f54901b.svg",
    "twitter:card": "summary_large_image",
    "al:ios:url": "veel-app://dashboards/Feeds",
    "al:ios:app_store_id": "6455370559",
    "al:ios:app_name": "Veel App",
    "og:url": "veelapp.com",
    "og:image": "https://veelapp.com/assets/veel-white-no-reel-3f54901b.svg",
    "og:type": "website",
  },
};

export default function Player({ params }: { params: { id: string } }) {
  const id = params.id;
  // useEffect(() => {
  //   const device = getDeviceOperatingSystem();
  //   switch (device) {
  //     case "Android":
  //     case "iOS":
  //       window.location.replace("veel-app://dashboards/Feeds");
  //       break;
  //     default:
  //       break;
  //   }
  // }, []);

  return (
    <Layout>
      <div className="flex flex-col w-screen bg-blue-400 h-screen items-center justify-center">
        <h1>This is a Player Screen</h1>
        <h2>Video ID:{id}</h2>
      </div>
    </Layout>
  );
}
