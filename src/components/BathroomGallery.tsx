
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const BathroomGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const galleryImages = [
    {
      src: "/placeholder.svg",
      alt: "Modern bathroom with walk-in shower",
      category: "Complete Renovation",
      location: "Putney",
      description: "Contemporary bathroom featuring a spacious walk-in shower, floating vanity, and premium tiles."
    },
    {
      src: "/placeholder.svg", 
      alt: "Luxury bathroom with freestanding tub",
      category: "Luxury Suite",
      location: "Richmond",
      description: "Luxurious bathroom with freestanding tub, marble finishes, and underfloor heating."
    },
    {
      src: "/placeholder.svg",
      alt: "Compact ensuite bathroom",
      category: "Space Optimization",
      location: "Kingston",
      description: "Clever use of space in a small ensuite with built-in storage and modern fixtures."
    },
    {
      src: "/placeholder.svg",
      alt: "Traditional style bathroom renovation",
      category: "Traditional Style",
      location: "Wimbledon",
      description: "Classic bathroom design with period features and modern functionality."
    },
    {
      src: "/placeholder.svg",
      alt: "Family bathroom with double vanity",
      category: "Family Bathroom",
      location: "Surbiton",
      description: "Family-friendly bathroom with double vanity, bathtub, and ample storage."
    },
    {
      src: "/placeholder.svg",
      alt: "Wet room design",
      category: "Wet Room",
      location: "Twickenham",
      description: "Fully tiled wet room with rainfall shower and accessibility features."
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bathroom Renovation <span className="text-extendia-accent">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent bathroom renovation projects across South West London.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="text-white">
                  <p className="text-sm font-medium">{image.category}</p>
                  <p className="text-xs opacity-80">{image.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <img 
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-screen object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                <h3 className="text-lg font-bold mb-2">{galleryImages[selectedImage].category}</h3>
                <p className="text-sm mb-1">{galleryImages[selectedImage].location}</p>
                <p className="text-sm opacity-80">{galleryImages[selectedImage].description}</p>
              </div>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BathroomGallery;
