import { AbsoluteFill, Html5Audio, interpolate, OffthreadVideo, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export const MyComposition = ({text}: {text: string}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
    return <>
    <AbsoluteFill  className="text-8xl text-center justify-center font-playpen font-black">
      {text}
    </AbsoluteFill>
    <Html5Audio src={staticFile("muqit-nasheed.mp3")} trimBefore={fps * 100} trimAfter={fps*107} volume={1}/>
    </>}