// Skeleton.tsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import './style.css'
const SkeletonComponent: React.FC = () => {
  return (
    <div>
      <Skeleton count={3} height={30} className="custom-skeleton" />
      <Skeleton width={'80%'} height={30} />
    </div>
  );
};

export default SkeletonComponent;
