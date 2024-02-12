const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");
const app = express();
const port = process.env.PORT || 3333;
const path = require("path");
const fs = require("fs").promises;

app.use(cors({ origin: "*" }));

const staticPath = path.join(__dirname, "/");
const dotenv = require("dotenv").config();

if (dotenv.error) {
  throw dotenv.error;
}

const webscreenshotimg = process.env.WEBSC;
const webdetailobservation = process.env.WEBDETO;
const webdetailearthquake = process.env.WEBDETE;
const webtarget = process.env.WEBTARGET;

app.use(express.static(staticPath));

app.get("/scrape", async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: puppeteer.executablePath(),
      args: ["--no-sandbox"],
    });

    const page = await browser.newPage();

    await page.goto(webtarget);

    // Wait for the 'load' event to ensure the page is fully loaded
    await page.waitForNavigation({ waitUntil: "load" });

    // Additional wait time to ensure all dynamic content is loaded
    await page.waitForTimeout(10000);

    const screenshotBuffer = await page.screenshot({ fullPage: true });
    const screenshotPath = path.join(__dirname, "screenshotimg.png");

    // Save the screenshot locally
    await fs.writeFile(screenshotPath, screenshotBuffer);

    const detailObservation = await page.evaluate(() => {
      return Array.from(
        document.querySelectorAll("#bosaitop-bosai_amedas_table_div")
      ).map((here) => here.textContent);
    });

    const detailEarthquake = await page.evaluate(() => {
      return Array.from(
        document.querySelectorAll("#bosaitop-earthquake_window")
      ).map((here) => here.textContent);
    });

    // Save the observation and earthquake details locally
    await fs.writeFile("detailObservation.txt", detailObservation.join("\r\n"));
    await fs.writeFile("detailEarthquake.txt", detailEarthquake.join("\r\n"));

    await browser.close();

    res.json({
      screenshotPath: webscreenshotimg,
      detailObservationPath: webdetailobservation,
      detailEarthquakePath: webdetailearthquake,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/detailObservation.txt", cors(), (req, res) => {
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=detailObservation.txt"
  );
  res.sendFile(path.join(__dirname, "detailObservation.txt"));
});

app.get("/detailEarthquake.txt", cors(), (req, res) => {
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=detailEarthquake.txt"
  );
  res.sendFile(path.join(__dirname, "detailEarthquake.txt"));
});

app.get("/screenshotimg.png", cors(), (req, res) => {
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=screenshotimg.png"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.sendFile(path.join(__dirname, "screenshotimg.png"));
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
