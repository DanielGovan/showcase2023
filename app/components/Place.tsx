import { ChildrenProps } from "./MainWrap";
import Subheader from "./Subheader";

// const StyledPlace = styled.div`
//   @media screen {
//     margin-bottom: 1rem;
//   }
//   margin-bottom: 0.5rem;
//   --webkit-column-break-inside: avoid;
//   break-inside: avoid;
// `;

interface PlaceProps extends ChildrenProps {
  time: string;
  place: string;
  type?: string;
}

const Place = ({ time, place, type, children }: PlaceProps) => {
  return (
    <div>
      <Subheader>
        {place}
        <span className="dateText">{time}</span>
        <span className="dateText">{type}</span>
      </Subheader>
      {children}
    </div>
  );
};

export default Place;
