import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const VIDEO_SRC = "/videos/video_business.mp4";
const VIDEO_POSTER = "/videos/video_business_poster.jpg";

const RestaurantVideo = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <section
      id="video"
      aria-labelledby="video-heading"
      className={cn("w-full py-12 sm:py-16", className)}
    >
      <div className="text-center mb-8 sm:mb-10">
        <p className="text-gold text-xs sm:text-sm tracking-[0.4em] uppercase mb-3 font-medium">
          {t("video.subtitle")}
        </p>
        <h2
          id="video-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
        >
          {t("video.title")}
        </h2>
        <div className="h-px w-24 bg-gold mx-auto mt-6" />
      </div>

      <div className="mx-auto w-fit max-w-full rounded-2xl overflow-hidden border-2 border-border shadow-soft bg-black">
        <video
          className="block h-auto max-h-[75vh] w-auto max-w-[min(100vw-2rem,360px)] bg-black"
          width={720}
          height={1280}
          controls
          playsInline
          preload="metadata"
          poster={VIDEO_POSTER}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
          {t("video.unsupported")}
        </video>
      </div>
    </section>
  );
};

export default RestaurantVideo;
