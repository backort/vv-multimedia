const searchButton = document.querySelector(".head button");
const search = document.querySelector(".head input");
const videoContainer = document.querySelector(".content");

const API_KEY = "AIzaSyADHrPdwza10001dUSe4zGQ8fVtvNq7wxo";

function fetchData() {
  videoContainer.innerHTML = "";
  const query = search.value;
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}&maxResults=10`
  )
    .then((res) => res.json())
    .then((res) => {
      const videos = res.items;
      videos.map((video) => {
        videoID = video.id.videoId;
        videoTitle = video.snippet.title;
        videoImage = video.snippet.thumbnails.high.url;
        uploaderId = video.snippet.channelId;
        videoUploader = video.snippet.channelTitle;
        generateVideos(
          videoID,
          videoTitle,
          videoImage,
          uploaderId,
          videoUploader
        );
      });
    });
}

function generateVideos(
  videoID,
  videoTitle,
  videoImage,
  uploaderId,
  videoUploader
) {
  videoContainer.innerHTML += `
      <div class="card">
      <iframe allowfullscreen src="https://www.youtube.com/embed/${videoID}"></iframe>
          <p class="title">${videoTitle}</p>
          <a class="uploader" href="https://www.youtube.com/channel/${uploaderId}">
              Channel: ${videoUploader}
          </a>
      </div>
      `;
}

searchButton.addEventListener("click", fetchData);
search.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    fetchData();
  }
});
