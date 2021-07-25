function generateVirtualTry() {
  const iframeLink = "https://virtualtrydemo.website/";
  const virtualTryIframe = document.createElement("iframe");
  virtualTryIframe.setAttribute("src", iframeLink);
  virtualTryIframe.classList.add("virtual-try");
  virtualTryIframe.style.width = "640px";
  virtualTryIframe.style.height = "480px";
  const virtualTry = document.getElementById("virtual-try")
  virtualTry.appendChild(virtualTryIframe);
  const head = document.getElementsByTagName("HEAD")[0];
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.type = "text/css";
  styleLink.href ="https://cdn.jsdelivr.net/gh/iuzn/api@main/virtual-try/virtualtry.css";
  styleLink.media = "all";
  head.appendChild(styleLink);
}
generateVirtualTry();
