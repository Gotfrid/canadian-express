import { ResponsiveBar } from "@nivo/bar";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../containers/DataContainer";
import { getCurrentDistribution } from "../lib/getCurrentDistribution";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export const CurrentDistribution = ({ gridArea }: { gridArea: string }) => {
  const data = useContext(DataContext);
  const windowSize = useWindowSize();

  return (
    <div className="card" style={{ gridArea }}>
      <h3>Distribution of applicants by score bracket</h3>
      <ResponsiveBar
        data={getCurrentDistribution(data!)}
        // @ts-ignore
        height={400}
        keys={["value"]}
        indexBy="id"
        margin={{ top: 5, right: windowSize.width > 800 ? 130 : 0, bottom: 50, left: 0 }}
        colors={{ scheme: "accent" }}
        valueFormat={(val) => Intl.NumberFormat("en-US").format(val)}
        colorBy="indexValue"
        axisBottom={{ tickRotation: 45 }}
        role="application"
        ariaLabel="Latest round score distribution"
        gridYValues={[0]}
        borderWidth={1}
        borderColor="#333"
        legends={[
          {
            dataFrom: "indexes",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: windowSize.width > 800 ? 0 : 1000,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
          },
        ]}
      />
    </div>
  );
};
