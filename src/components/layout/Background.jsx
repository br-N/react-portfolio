import bg_video from "../../img/background.mp4";

function Background() {
  return (
    <video
      autoPlay
      loop
      muted
      className="fixed -z-50 right-0 bottom-0 min-w-full min-h-full object-cover"
    >
      <source src={bg_video} type="video/mp4"></source>
    </video>
  );
}

export default Background;
