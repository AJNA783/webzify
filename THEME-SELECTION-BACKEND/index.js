const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory data containing our website templates
const images = [
  {
    // Alternative URL for a proper e-commerce related image (300x200 pixels)
    imageUrl: "https://picsum.photos/300/200",
    websiteType: "E-commerce",
    designTone: "Professional",
    status: "Approved",
  },
  {
    imageUrl: "https://via.placeholder.com/300x200?text=Service-Based+Playful+and+Chill",
    websiteType: "Service-Based",
    designTone: "Playful and Chill",
    status: "Approved",
  },
  {
    imageUrl: "https://via.placeholder.com/300x200?text=Informative+Relax",
    websiteType: "Informative",
    designTone: "Relax",
    status: "Pending",
  },
];

// Root route for quick testing
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Theme Selection API</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f5f5f5;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            text-align: center;
          }
          h1 {
            color: #007BFF;
          }
          p {
            font-size: 18px;
            color: #333;
          }
          a {
            color: #007BFF;
            text-decoration: none;
            font-weight: bold;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to the Theme Selection API</h1>
          <p>This API returns website template images based on your preferences.</p>
          <p>Try this endpoint:</p>
          <p>
            <a href="/api/images/get-approved?websiteType=E-commerce&designTone=Professional">
              /api/images/get-approved?websiteType=E-commerce&designTone=Professional
            </a>
          </p>
        </div>
      </body>
    </html>
  `);
});

// API endpoint to filter and return approved images
app.get("/api/images/get-approved", (req, res) => {
  console.log("=== API Called ===");
  console.log("Received query:", req.query);

  const { websiteType, designTone } = req.query;
  // Trim values to avoid accidental extra spaces
  const filteredImages = images.filter(
    (img) =>
      img.websiteType.trim() === websiteType.trim() &&
      img.designTone.trim() === designTone.trim() &&
      img.status === "Approved"
  );
  console.log("Filtered images:", filteredImages);
  res.json(filteredImages);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
