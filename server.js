const express = require("express");
var cors = require("cors");
const puppeteer = require("puppeteer");

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 1337;
app.listen(port, () => console.log(`listening on ${port}`));

app.post("/generatePdf", async (req, res) => {
	console.log('server got a request on route "/generatePdf"!');
	// console.log(req.body.html);
	const html = req.body.html;
	try {
		// const browser = await puppeteer.launch();
		// for ubuntu VM
		const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"]});
		const page = await browser.newPage();

		await page.setContent(html, { waitUntil: "networkidle2" });
		await page.evaluateHandle("document.fonts.ready");

		// create a pdf buffer with my preffered settings
		const pdfBuffer = await page.pdf({
			format: "A4",
			landscape: false,
			pageRanges: "1",
			printBackground: true,
			margin: "none",
		});
		// console.log(pdfBuffer);
		return res.json({ pdfBuffer });
	} catch (err) {
		console.log(err);
		return res.send(err);
	}
});
