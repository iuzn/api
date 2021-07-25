function generateVirtualTry() {
  const iframeLink = "http://localhost:8000/";
  const virtualTryIframe = document.createElement("iframe");
  virtualTryIframe.setAttribute("src", iframeLink);
  virtualTryIframe.classList.add("virtual-try");
  virtualTryIframe.style.width = "640px";
  virtualTryIframe.style.height = "480px";
  document.getElementById("virtual-try").appendChild(virtualTryIframe);
  const  head = document.getElementsByTagName("HEAD")[0];
  const  styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.type = "text/css";
  styleLink.href = "style.css";
  head.appendChild(styleLink);
}
