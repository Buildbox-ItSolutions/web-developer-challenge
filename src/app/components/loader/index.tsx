import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CustomSkeleton } from "./style";

export const SkeletonLoader = () => (
  <SkeletonTheme baseColor="#3B3B3B" height={190} highlightColor="#444">
    <p>
      <Skeleton
        wrapper={CustomSkeleton}
        style={{ marginBottom: "16px" }}
        count={3}
      />
    </p>
  </SkeletonTheme>
);
