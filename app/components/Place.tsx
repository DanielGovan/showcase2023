import { ChildrenProps } from "./MainWrap";
import Subheader from "./Subheader";

interface PlaceProps extends ChildrenProps {
  time: string;
  place: string;
}

const Place = ({ time, place, children }: PlaceProps) => {
  return (
    <div className="mb-4 print:mb-2 break-inside-avoid">
      <Subheader>
        {place}
        <span className="text-sm opacity-70 text-gray-900 block">{time}</span>
      </Subheader>
      {children}
    </div>
  );
};

export default Place;
