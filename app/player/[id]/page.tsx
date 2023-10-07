import { Metadata } from "next";
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
{
  /* <meta property="al:android:url" content="yourapp://content/path">
  <meta property="al:android:package" content="com.yourapp.package">
  <meta property="al:android:app_name" content="Your App Name">

  <!-- Fallback URL for other platforms or if the app is not installed -->
  <meta property="al:web:url" content="https://www.yourwebsite.com/path"></meta> */
}
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
    "al:android:url": "veel-app://dashboards/Feeds",
    "al:android:package": "com.veelapp.staging",
    "al:android:app_name": "Veel App",
    "al:web:url": "https://veelapp.com",
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
    <div className="flex flex-col w-screen bg-blue-400 h-screen items-center justify-center">
      <h1>This is a Player Screen</h1>
      <h2>Video ID:{id}</h2>
    </div>
  );
}
