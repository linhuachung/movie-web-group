import React, { useState } from "react";
import ModalVideo from "react-modal-video";

function ModalVideoComponent(props) {
  const [isOpen, setOpen] = useState(false);
  const { detailMovie } = props;
  const youtubeIdByEmbed = detailMovie.trailer?.slice(-11);
  const youtubeIDWatch = detailMovie.trailer?.slice(32, 43);

  return (
    <div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={`${
          detailMovie.trailer?.length > 41 ? youtubeIDWatch : youtubeIdByEmbed
        }`}
        onClose={() => setOpen(false)}
      />

      <button className="btn-primary btnPlay" onClick={() => setOpen(true)}>
        <img src="/image/play.png" alt={"icon"} />
      </button>
    </div>
  );
}

export default ModalVideoComponent;
