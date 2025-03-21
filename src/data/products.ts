
// Sample product data
export const products = [
  {
    id: "p1",
    name: "Custom Steel Gate",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Gates",
    description: "Elegant custom-designed steel gate with intricate scrollwork and premium finish. Perfect for enhancing your home's entrance."
  },
  {
    id: "p2",
    name: "Wrought Iron Railing",
    price: 850,
    imageUrl: "https://images.unsplash.com/photo-1530904613557-b405de3a6915?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Railings",
    description: "Handcrafted wrought iron railing with detailed patterns. Adds safety and sophistication to staircases and balconies."
  },
  {
    id: "p3",
    name: "Metal Fire Pit",
    price: 450,
    imageUrl: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Outdoor",
    description: "Durable steel fire pit with artistic cutouts that create beautiful light patterns. Perfect for outdoor gatherings."
  },
  {
    id: "p4",
    name: "Industrial Steel Table",
    price: 780,
    imageUrl: "https://images.unsplash.com/photo-1532463788086-56a492a0b4ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Furniture",
    description: "Modern industrial steel coffee table with tempered glass top. Combines rugged strength with elegant design."
  },
  {
    id: "p5",
    name: "Decorative Wall Panel",
    price: 320,
    imageUrl: "https://images.unsplash.com/photo-1562663468-2a8067d98e75?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Decor",
    description: "Laser-cut steel panel with geometric patterns. Makes a stunning accent wall or outdoor privacy screen."
  },
  {
    id: "p6",
    name: "Steel Garden Trellis",
    price: 180,
    imageUrl: "https://images.unsplash.com/photo-1559894204-da953e556365?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Outdoor",
    description: "Durable steel garden trellis for climbing plants. Adds structure and beauty to your garden space."
  },
  {
    id: "p7",
    name: "Metal Wine Rack",
    price: 120,
    imageUrl: "https://images.unsplash.com/photo-1529060532150-a0c935a6d6e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Decor",
    description: "Elegant wall-mounted wine rack crafted from wrought iron. Holds up to 8 bottles with stylish display."
  },
  {
    id: "p8",
    name: "Custom Steel Mailbox",
    price: 240,
    imageUrl: "https://images.unsplash.com/photo-1584365468887-d20c8c8be286?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Exterior",
    description: "Personalized steel mailbox with house number and weather-resistant finish. Combines functionality with curb appeal."
  },
  {
    id: "p9",
    name: "Industrial Bookshelf",
    price: 560,
    imageUrl: "https://images.unsplash.com/photo-1631701601945-414a32dbef47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Furniture",
    description: "Steel and reclaimed wood bookshelf with adjustable shelves. Perfect for modern and industrial interior designs."
  },
  {
    id: "p10",
    name: "Spiral Staircase",
    price: 3500,
    imageUrl: "https://images.unsplash.com/photo-1602020214076-3853514588bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Structural",
    description: "Custom spiral staircase with wrought iron railings. Space-saving design with exceptional strength and visual appeal."
  },
  {
    id: "p11",
    name: "Metal Plant Stand",
    price: 85,
    imageUrl: "https://images.unsplash.com/photo-1595425169239-eb24d4c868a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Decor",
    description: "Elegant metal plant stand with tiered design. Showcases your indoor plants with style."
  },
  {
    id: "p12",
    name: "Custom Metal Sign",
    price: 150,
    imageUrl: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Decor",
    description: "Personalized metal sign with custom lettering or logo. Perfect for businesses or home decor."
  }
];

// Get unique categories
export const categories = Array.from(new Set(products.map(product => product.category)));
