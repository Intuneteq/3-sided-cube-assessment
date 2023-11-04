import React from "react";

type Props = {
  progress: string;
};

export default function ProgressBar({ progress }: Props) {
  return (
    <div className="w-full h-2 bg-secondary-white overflow-hidden">
      <div className="h-full bg-primary-pink" style={{ width: progress }} />
    </div>
  );
}
