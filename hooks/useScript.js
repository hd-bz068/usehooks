import { useState, useEffect } from "react";

/**
 * @param {string} src
 * this hook takes in a link to any script internal or external, then tries to load it. it will also return the status of loading process and append the script to the index.html
 */

function useScript(src) {
  const [srcLink] = useState(src);
  const [status, setStatus] = useState(srcLink ? "loading" : "idle");

  useEffect(() => {
    if (!srcLink) {
      setStatus("idle");
      return;
    }

    let script = document.querySelector(`script[src="${srcLink}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = srcLink;
      script.async = true;
      script.setAttribute("data-status", "loading");

      document.body.appendChild(script);

      const setAttributeFromEvent = (event) => {
        script.setAttribute(
          "data-status",
          event.type === "load" ? "ready" : "error"
        );
      };
      script.addEventListener("load", setAttributeFromEvent);
      script.addEventListener("error", setAttributeFromEvent);
    } else {
      setStatus(script.getAttribute("data-status"));
    }

    const setStateFromEvent = (event) => {
      setStatus(event.type === "load" ? "ready" : "error");
    };
    script.addEventListener("load", setStateFromEvent);
    script.addEventListener("error", setStateFromEvent);
    return () => {
      if (script) {
        script.removeEventListener("load", setStateFromEvent);
        script.removeEventListener("error", setStateFromEvent);
      }
    };
  }, [srcLink]);

  return status;
}
export default useScript;
