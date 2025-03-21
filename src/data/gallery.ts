
export const galleryImages = [
  {
    id: "g1",
    title: "Custom Entrance Gate",
    imageUrl: "https://images.unsplash.com/photo-1539409363834-aa99701db1d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Gates"
  },
  {
    id: "g2",
    title: "Spiral Staircase Installation",
    imageUrl: "https://images.unsplash.com/photo-1603850121003-771fee512738?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Structural"
  },
  {
    id: "g3",
    title: "Decorative Garden Fence",
    imageUrl: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Fences"
  },
  {
    id: "g4",
    title: "Contemporary Steel Table",
    imageUrl: "https://images.unsplash.com/photo-1494205577727-d32e58564756?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Furniture"
  },
  {
    id: "g5",
    title: "Metal Art Installation",
    imageUrl: "https://images.unsplash.com/photo-1545231590-d0af06b50f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Art"
  },
  {
    id: "g6",
    title: "Custom Balcony Railing",
    imageUrl: "https://images.unsplash.com/photo-1605276450241-c5a2abb809a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Railings"
  },
  {
    id: "g7",
    title: "Steel and Glass Pergola",
    imageUrl: "https://images.unsplash.com/photo-1592170577795-0158c156b642?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Outdoor"
  },
  {
    id: "g8",
    title: "Ornate Fireplace Screen",
    imageUrl: "https://images.unsplash.com/photo-1579656450812-5b1da79e8afe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Decor"
  },
  {
    id: "g9",
    title: "Industrial Shelving Unit",
    imageUrl: "https://images.unsplash.com/photo-1616627974445-40f9bdf62a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Furniture"
  },
  {
    id: "g10",
    title: "Commercial Security Gates",
    imageUrl: "https://images.unsplash.com/photo-1553258847-530e0aae4c9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Commercial"
  },
  {
    id: "g11",
    title: "Metal Garden Sculpture",
    imageUrl: "https://images.unsplash.com/photo-1562079176-49004961b0bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Art"
  },
  {
    id: "g12",
    title: "Custom Wine Cellar Door",
    imageUrl: "https://images.unsplash.com/photo-1585248673811-364f3699b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Doors"
  }
];

// Get unique gallery categories
export const galleryCategories = Array.from(new Set(galleryImages.map(image => image.category)));
