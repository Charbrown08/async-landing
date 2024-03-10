const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UC7TA6H0g8g-2e1TAKuS1c8A&part=snippet%2Cid&order=date&maxResults=3"

const content = null || document.getElementById("content")
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "872de4c292msh59f1f5dcc75c82bp154242jsn9548d7a9a7b0",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
  }
}

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options)
  const data = await response.json()
  return data
}

;(async () => {
  try {
    const videos = await fetchData(API)
    let view = `
      ${videos.items
        .map(
          (video) => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
      `
        )
        .slice(0, 4)
        .join("")}
  
      `
    content.innerHTML = view
  } catch (error) {
    console.log(error)
  }
})()
