Numazu Scraper

Numazu Scraper is a web scraping project that fetches observation and earthquake data from the Numazu City website. It consists of a backend server built with Express.js and Puppeteer for scraping, and a frontend interface built with HTML, CSS, and JavaScript for user interaction.

Features
Efficient Web Scraping: Utilizes Puppeteer for efficient and reliable data extraction from the Numazu City website.
Scalable Backend Architecture: Built with Express.js, providing a scalable and efficient backend server.
Cross-Origin Resource Sharing (CORS) Support: Implements secure CORS policies to enable seamless interaction between frontend and backend components.
Secure Environment Configuration: Utilizes dotenv for secure loading of environment variables, enhancing application security.
User-Friendly Interface: Offers an intuitive frontend interface, allowing users to initiate scraping and download scraped data effortlessly.
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/numazu-scraper.git
Install Dependencies:

bash
Copy code
cd numazu-scraper/backend
npm install
cd ../frontend
npm install
Configure Environment Variables:
Create a .env file in the backend directory and add your environment variables:

plaintext
Copy code
PORT=3333
WEBSC=https://yourdomain.com/screenshotimg.png
WEBDETO=https://yourdomain.com/detailObservation.txt
WEBDETE=https://yourdomain.com/detailEarthquake.txt
WEBTARGET=https://numazu-city-website-url.com
Replace the URLs with the actual paths where you want to store the scraped data.

Usage
Start the Backend Server:

bash
Copy code
cd backend
npm start
Start the Frontend Server:

bash
Copy code
cd frontend
npm start
Access the Frontend Application:
Navigate to http://localhost:3323 in your web browser.

Initiate Scraping:
Click on the "Start Retrieval" button to initiate the scraping process.

Download Scraped Data:
Once the scraping is complete, download the scraped data by clicking the "Download Files" button.

Contribution Guidelines
Contributions are welcome! To contribute to Numazu Scraper, please follow these guidelines:

Fork the repository and create your branch from main.
Ensure your code follows the existing coding style and conventions.
Submit a pull request with a detailed description of your changes.
