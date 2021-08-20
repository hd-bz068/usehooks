import { useState, useEffect } from "react";

/**
 * @param {string} src
 * this hook takes in a link to any css href internal or external, then tries to load it. it will also return the status of loading process and append the css href to the index.html
 */

const useCss = (href) => {
  const [hrefLink] = useState(href);
  const [status, setStatus] = useState(hrefLink ? "loading" : "idle");

  useEffect(() => {
    if (!hrefLink) {
      setStatus("idle");
      return;
    }

    let link = document.querySelector(`link[href="${hrefLink}"]`);
    if (!link) {
      link = document.createElement("link");
      link.href = hrefLink;
      link.async = true;
      link.setAttribute("data-status", "loading");
      link.setAttribute("rel", "stylesheet");

      document.head.appendChild(link);

      const setAttributeFromEvent = (event) => {
        link.setAttribute(
          "data-status",
          event.type === "load" ? "ready" : "error"
        );
      };
      link.addEventListener("load", setAttributeFromEvent);
      link.addEventListener("error", setAttributeFromEvent);
    } else {
      setStatus(link.getAttribute("data-status"));
    }

    const setStateFromEvent = (event) => {
      setStatus(event.type === "load" ? "ready" : "error");
    };
    link.addEventListener("load", setStateFromEvent);
    link.addEventListener("error", setStateFromEvent);
    return () => {
      if (link) {
        link.removeEventListener("load", setStateFromEvent);
        link.removeEventListener("error", setStateFromEvent);
      }
    };
  }, [hrefLink]);

  return status;
};

export default useCss;
