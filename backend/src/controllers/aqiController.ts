import { Request, Response } from "express";
import { fetchAQIData } from "../services/aqiService";

export const getAQIData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      res.status(400).json({
        success: false,
        message: "Latitude and Longitude are required."
      });
      return;
    }

    const data = await fetchAQIData(
      Number(lat),
      Number(lon)
    );

    res.json({
      success: true,
      data
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch AQI data."
    });
  }
};
