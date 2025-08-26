import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import vehiclesRoutes from "./routes/vehicles.routes.js";
import placesRoutes from "./routes/places.routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use(vehiclesRoutes);
app.use(placesRoutes);

app.get("/", (req, res) => {
  res.send("API working...");
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running at PORT ${process.env.PORT || 3000}`)
);
