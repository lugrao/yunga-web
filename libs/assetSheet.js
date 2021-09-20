import { google } from "googleapis"

export default async function assetSheet() {
  try {
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"]
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
      target
    )

    jwt.authorize(function (error, tokens) {
      if (error) {
        console.log(error)
        return
      } else {
        console.log("connected…")
      }
    })

    const sheets = google.sheets({ version: "v4", auth: jwt })
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: process.env.SPREADSHEET_NAME, // sheet name
    })

    const rows = response.data.values
    if (rows.length) {
      let assetObject = {}
      rows.map((row) => {
        assetObject = { ...assetObject, [row[0]]: row[1] }
      })
      console.log(assetObject)
      return assetObject
    }
  } catch (err) {
    console.log(err)
  }
  return []
}
