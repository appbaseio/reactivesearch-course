import React, { useEffect, useState } from "react";

const getStars = async () => {
  try {
    const res = await fetch(
      "https://api.github.com/repos/appbaseio/reactivesearch?callback=callback"
    );
    const data = await res.text();
    const lines = data.split("\n");
    lines.splice(0, 1, "{");
    lines.splice(-2, 1, "}");
    return JSON.parse(lines.join("\n")).data.stargazers_count;
  } catch (error) {
    throw error;
  }
};
export default ({ children }) => {
  const [stars, setStars] = useState(
    window.sessionStorage.getItem("appbase_rs_star_count")
  );
  useEffect(() => {
    const sessionData = window.sessionStorage.getItem("appbase_rs_star_count");
    console.log("session data", sessionData);
    if (!sessionData) {
      async function fetchData() {
        const currentStars = await getStars();
        console.log("stars", currentStars);
        setStars(currentStars);
        window.sessionStorage.setItem("appbase_rs_star_count", currentStars);
      }
      fetchData();
    }
  }, [stars]);
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          margin: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            //   background: "#173baa",
            padding: 20,
            display: "flex",
            alignItems: "center",
            borderBottomRightRadius: 5,
          }}
        >
          <img
            src="https://opensource.appbase.io/reactivesearch/images/RSlogo.svg"
            alt="rs logo"
          />
          <span
            style={{
              marginLeft: 10,
              fontSize: 24,
              fontWeight: "light",
            }}
          >
            Reactive<span style={{ fontWight: "700" }}>Search</span>
          </span>
          {stars && (
            <div style={{ display: "flex", marginLeft: 10 }}>
              <a
                href="https://github.com/appbaseio/reactivesearch"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "2px 5px 2px 4px",
                  color: "#333",
                  textDecoration: "none",
                  textShadow: "0 1px 0 #fff",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  borderRadius: "3px",
                  fontSize: 12,
                  backgroundRepeat: "no-repeat",
                  border: "1px solid #d5d5d5",
                  backgroundColor: "#eee",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "14px",
                    height: "14px",
                    marginRight: "4px",
                    backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4=)`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <span>Star</span>
              </a>
              <a
                href="https://github.com/appbaseio/dejavu/stargazers"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: "4px",
                  backgroundColor: " #fafafa",
                  border: "1px solid #d4d4d4",
                  padding: "2px 5px 2px 4px",
                  color: "#333",
                  textDecoration: "none",
                  textShadow: "0 1px 0 #fff",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  borderRadius: "3px",
                  fontSize: 12,
                }}
              >
                {stars}
              </a>
            </div>
          )}
        </div>
        <div style={{ paddingRight: 20 }}>
          <img
            src="https://appbase.io/static/svg/appbase-dark.svg"
            alt="logo"
            height={40}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {children}
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          fontSize: 16,
          padding: 10,
          textAlign: "center",
        }}
      >
        <a
          href="https://reactivesearch-course.appbase.io"
          style={{ color: "dodgerblue", textDecoration: "none" }}
        >
          https://reactivesearch-course.appbase.io
        </a>{" "}
        | Use arrow keys or spacebar to navigate between slides.
      </div>
    </div>
  );
};
