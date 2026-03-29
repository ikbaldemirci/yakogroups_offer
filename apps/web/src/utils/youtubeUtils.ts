export const getYouTubeEmbedUrl = (url: string) => {
    let videoId = "";
    try {
        if (url.includes("youtube.com/watch")) {
            videoId = new URL(url).searchParams.get("v") || "";
        } else if (url.includes("youtu.be/")) {
            videoId = url.split("youtu.be/")[1].split("?")[0];
        } else if (url.includes("youtube.com/embed/")) {
            return url;
        }
    } catch (e) {
        console.error("Invalid YouTube URL", url);
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : "";
};
