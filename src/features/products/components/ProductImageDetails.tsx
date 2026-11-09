"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";

export default function ProductGallery({ images }: { images: string[] }) {
  const items = images.map((image) => ({
    
    original: image,
    thumbnail: image,
  }));

  return <ImageGallery items={items} 
  showPlayButton={false}
  showNav={false}
  />;
}