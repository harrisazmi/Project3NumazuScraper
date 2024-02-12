# Project 3: Numazu Scraper

Numazu Scraper is a web scraping project that fetches observation and earthquake data from the Numazu City website. It consists of a backend server built with Express.js and Puppeteer for scraping, and a frontend interface built with HTML, CSS, and JavaScript for user interaction.

## Features

- **Efficient Web Scraping:** Utilizes Puppeteer for efficient and reliable data extraction from the Numazu City website.
- **Scalable Backend Architecture:** Built with Express.js, providing a scalable and efficient backend server.
- **Cross-Origin Resource Sharing (CORS) Support:** Implements Cross-Origin Resource Sharing (CORS) for handling requests from different origins.
- **Environment Variables:** Uses dotenv for loading environment variables from a `.env` file.
- **User-Friendly Interface:** Offers an intuitive frontend interface, allowing users to initiate scraping and download scraped data effortlessly.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/harrisazmi/Project3NumazuScraper.git
   ```

2. Install dependencies:

   ```bash
   cd Project3NumazuScraper
   cd backend
   npm i
   cd ..
   cd frontend
   npm i
   ```

3. Create a `.env` file in the root directory and add your environment variables, you can choose your own port. :

   ```plaintext
   PORT= AddYoursHere
   ```

4. Start the Backend server:

   ```bash
   cd Project3NumazuScraper
   cd backend
   node backendserver.js
   ```

5. Start the Frontend server:
   ```bash
   cd Project3NumazuScraper
   cd frontend
   node frontendserver.js
   ```

## Usage

1. Access the application in your web browser at `http://localhost:AddYoursHere`.
2. Click on the "Scrape" button to initiate the scraping process.
3. If website laggy or could not obtain the real time data, click on download button to download last real time update data.

## Docker Image Build

Dockerfile available for image building.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.
